import { store } from 'react-easy-state';
import { observe } from '@nx-js/observer-util';
import setCustomProperties from 'utils/setCustomProperties';
import pathOr from 'ramda/src/pathOr';
import { get, set } from 'utils/storage';

const cachedUserData = get('userSetup');

export const userConfig = store({
  userSetup: cachedUserData || {
    team: null
  },
  theme: pathOr({}, ['team', 'theme'], cachedUserData),
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
