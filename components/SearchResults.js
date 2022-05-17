import React from 'react';

export default function SearchResults({ searchInfo }) {
  return (
    <div>
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {searchInfo.formattedTotalResults} results (
        {searchInfo.formattedSearchTime} seconds)
      </p>
    </div>
  );
}
