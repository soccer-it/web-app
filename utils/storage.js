import isClient from 'utils/isClient';

const store2 = require('store2');

const noop = () => null;

const initStore = () => {
  const fallback = {
    set: noop,
    get: noop
  };

  if (!isClient()) {
    return fallback;
  }

  const Store = store2.namespace(process.env.BUILD_ID);

  if (!Store) {
    return fallback;
  }

  return Store;
};

const Store = initStore();

export const set = Store.set.bind(Store);

export const get = Store.get.bind(Store);
