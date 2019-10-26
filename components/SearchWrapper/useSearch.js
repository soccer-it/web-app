import { useState, useEffect } from 'react';

import removeAccents from 'utils/removeAccents';

export default function useSearch({ baseData }) {
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [searchResults, setSearchResults] = useState(baseData);

  useEffect(() => {
    const currentPattern = new RegExp(removeAccents(searchValue), 'gi');

    const filteredResults = (baseData || []).filter(({ name, slug }) => {
      const testPatternWith = value => currentPattern.test(removeAccents(value));
      return testPatternWith(name) || testPatternWith(slug);
    });

    if (filteredResults.length) {
      setSearchResults(filteredResults);
    }
  }, [searchValue]);

  function onSearch(e) {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const currentValue = e.target.value;

    setSearchTimeout(setTimeout(_ => setSearchValue(currentValue), 300));
  }

  return {
    onSearch,
    searchResults
  };
}
