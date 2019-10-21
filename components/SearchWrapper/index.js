import { view } from "react-easy-state";
import { userConfig } from 'utils/store';
import { searchWrapper, searchWrapperActive, search, close, results, singleResult, singleResultBanner } from './SearchWrapper.scss';
import classnames from 'classnames';

function onClose() {
    userConfig.searchWrapper.active = false;
}

/* refactor singleResult */

function SearchWrapper() {
    const searchWrapperClassName = classnames({
        [searchWrapper]: true,
        [searchWrapperActive]: userConfig.searchWrapper.active
    });

    const currentResults = userConfig.searchWrapper.data;

    return (
        <div className={searchWrapperClassName}>
            <span className={close} onClick={onClose}>Fechar</span>
            <div className={search}>
                <input type="search" placeholder="busque pelo nome do seu time" />
            </div>
            <div className={results}>
                {
                    currentResults &&
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
                    })
                }
            </div>
        </div>
    );
}

export default view(SearchWrapper);