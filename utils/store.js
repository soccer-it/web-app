import { store } from 'react-easy-state';
import { observe } from '@nx-js/observer-util';
import setCustomProperties from 'utils/setCustomProperties';
import propOr from 'ramda/src/propOr';
import { get, set } from 'utils/storage';

const cachedUserData = get('userSetup');

export const userConfig = store({
  userSetup: cachedUserData || {
    team: null
  },
  theme: propOr({}, 'theme', cachedUserData),
  assets: {
    teams: {}
  },
  searchWrapper: {
    active: false,
    results: []
  },
  notificationTokens: null
});

observe(() => {
  const { theme, userSetup, searchWrapper } = userConfig;

  set('userSetup', { ...userSetup, theme });

  setCustomProperties(theme);

  setCustomProperties({
    'base-blur': searchWrapper.active ? '40px' : '0'
  });
});
