import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function ImageResults({ results }) {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-4 lg:gap-8">
        {results.items?.map((result) => (
          <div className="" key={result.link}>
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className="group hover:shadow-md w-full h-60 object-contain"
                  src={result.link}
                  alt={result.title}
                />
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <h2 className="mt-2 truncate text-xl">{result.title}</h2>
              </a>
              <a href={result.image.contextLink}>
                <p className="text-gray-600">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 lg:mt-10">
        <PaginationButtons />
      </div>
    </>
  );
}
