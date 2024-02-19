
"use client"

import { Suspense, useDeferredValue, useState } from 'react';
import SearchResults from './searchresult';

export default function AppSearch() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
console.log(deferredQuery,"real value ==",query)
const isStale = query !== deferredQuery;

  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
      <div style={{
          opacity: isStale ? 0.5 : 1,
          transition: isStale ? 'opacity 0.2s 0.2s linear' : 'opacity 0s 0s linear'
        }}>
        

        <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
}