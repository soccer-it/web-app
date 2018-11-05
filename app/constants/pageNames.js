import createPageNames from 'utils/createPageNames';

/* globals APP */

const { ROOT_PATH, routes } = APP;

const pageNames = createPageNames({ rootUrl: ROOT_PATH, routes });

export default pageNames
