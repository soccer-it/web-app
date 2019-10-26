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

function onClose() {
  userConfig.searchWrapper.active = false;
}

/* refactor singleResult */

function SearchWrapper(props) {
  const searchWrapperClassName = classnames({
    [searchWrapper]: true,
    [searchWrapperActive]: userConfig.searchWrapper.active
  });

  const baseData = userConfig.searchWrapper.data;

  const { searchResults, onSearch } = useSearch({ baseData, ...props });

  const currentResults = searchResults || baseData;

  console.log('searchResults', searchResults);
  console.log('currentResults', currentResults);

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
            return (
              <span className={singleResult} key={`searchResult_${result.id}_${index}`}>
                <div className={singleResultBanner}>
                  <img src={result.banner} alt={`Camisa do ${result.name}`} />
                </div>
                {result.slug}
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default view(SearchWrapper);
