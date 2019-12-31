import { store } from 'react-easy-state';
import { observe } from '@nx-js/observer-util';
import setCustomProperties from 'utils/setCustomProperties';

export const userConfig = store({
  theme: {},
  assets: {
    teams: {}
  },
  searchWrapper: {
    active: false,
    results: []
  }
});

observe(() => {
  setCustomProperties(userConfig.theme);

  setCustomProperties({
    'base-blur': userConfig.searchWrapper.active ? '40px' : '0'
  });
});