import React from 'react';
import { useRouter } from 'next/router';

export default function SearchHeaderOption({ title, Icon, selected }) {
  const router = useRouter();
  function selectTab(title) {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === 'Images' ? 'image' : ''
      }`
    );
  }
  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:border-blue-500 cursor-pointer hover:text-blue-600 pl-1 pr-2 pb-1 ${
        selected && 'border-blue-500 text-blue-600'
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
