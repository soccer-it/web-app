import { store } from 'react-easy-state';
import { observe } from '@nx-js/observer-util';
import setCustomProperties from 'utils/setCustomProperties';
import { get, set } from 'utils/storage';

export const userConfig = store({
  userSetup: get('userSetup') || {
    team: null
  },
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
  const { theme, userSetup, searchWrapper } = userConfig;

  setCustomProperties(theme);

  set('userSetup', userSetup);

  setCustomProperties({
    'base-blur': searchWrapper.active ? '40px' : '0'
  });
});
