import React from 'react';
import Parser from 'html-react-parser';

export default function SearchResults({ results }) {
  return (
    <div>
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map((result, index) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="group">
            <a className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600 ">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
