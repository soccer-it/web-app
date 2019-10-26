import { view } from 'react-easy-state';
import { userConfig } from 'utils/store';
import {
  searchWrapper,
  searchWrapperActive,
  search,
  close,
  results,
  singleResult,
  singleResultBanner
} from './SearchWrapper.scss';
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
      <span className={close} onClick={onClose}>
        Fechar
      </span>
      <div className={search}>
        <input type="search" onChange={onSearch} placeholder="busque pelo nome do seu time" />
      </div>
      <div className={results}>
        {currentResults &&
          currentResults.length &&
          currentResults.map((result, index) => {
            return <SingleResult {...result} />;
          })}
      </div>
    </div>
  );
}

export default view(SearchWrapper);
