import { view } from 'react-easy-state';
import { searchWrapper, searchWrapperActive, search, close, results } from './SearchWrapper.scss';
import useSearch from './useSearch';
import classnames from 'classnames';

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
        <input type="text" onChange={onSearch} placeholder="busque seu time" />
        <span className={close} onClick={onClose}>
          &#10005;
        </span>
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

export default view(SearchWrapper);
