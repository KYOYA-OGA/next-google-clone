import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import User from './User';

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function handleSearch(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}`);
  }

  return (
    <header className="sticky top-0 bg-white w-full">
      <div className="flex w-full items-center p-6">
        <Image
          onClick={() => router.push('/')}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          alt="google logo"
          width={120}
          height={50}
          objectFit="contain"
          className="cursor-pointer"
        />

        <form className="grow flex items-center border border-gray-200 rounded-full shadow-md px-6 py-3 ml-10 mr-5 max-w-3xl">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />

          <XIcon
            className="h-7 text-gray-500 sm:mx-3 cursor-pointer"
            onClick={() => (searchInputRef.current.value = '')}
          />

          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button type="submit" hidden onClick={handleSearch}></button>
        </form>
        <div className="ml-auto whitespace-nowrap">
          <User />
        </div>
      </div>
    </header>
  );
}
