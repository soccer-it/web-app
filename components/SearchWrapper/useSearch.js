import { useState, useEffect } from 'react';
import { userConfig } from 'utils/store';
import removeAccents from 'utils/removeAccents';

export default function useSearch() {
  const baseData = userConfig.searchWrapper.data;

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

  function onClose() {
    userConfig.searchWrapper.active = false;
  }

  function onSearch(e) {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const currentValue = e.target.value;

    setSearchTimeout(setTimeout(_ => setSearchValue(currentValue), 300));
  }

  return {
    onSearch,
    searchResults,
    onClose,
    currentResults: searchResults || baseData,
    active: userConfig.searchWrapper.active
  };
}
