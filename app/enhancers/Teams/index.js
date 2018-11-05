import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import data from './data';
import hooks from './hooks';

export default compose(
  setDisplayName('enhancers/AppLayout/index.js'),
  data,
  hooks
);