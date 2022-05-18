import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="max-w-xl text-blue-700 flex items-center justify-between px-7 pb-4 sm:justify-start sm:gap-x-20">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {/* Because there are only 100 results */}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
