import { view } from 'react-easy-state';
import { searchWrapper, searchWrapperActive, search, close, results } from './SearchWrapper.scss';
import useSearch from './useSearch';
import Icon from 'components/Icon';
import classnames from 'classnames';
import React from 'react';

/* refactor singleResult */

function SearchWrapper({ singleResult: SingleResult, ...props }) {
  const { currentResults, onSearch, onClose, active } = useSearch(props);

  const searchWrapperClassName = classnames({
    [searchWrapper]: true,
    [searchWrapperActive]: active
  });

  return (
    <div className={searchWrapperClassName}>
      <div className={search}>
        <div className={close} onClick={onClose}>
          <Icon id="goback" />
        </div>
        <input autoFocus={true} type="search" onChange={onSearch} placeholder="procurar time" />
      </div>
      <div className={results}>
        {currentResults &&
          currentResults.length &&
          currentResults.map((result, index) => (
            <SingleResult key={`result_${index}`} {...result} />
          ))}
      </div>
    </div>
  );
}

export default React.memo(view(SearchWrapper));
