import isClient from 'utils/isClient';

export default function ga(...args) {
  if (!isClient()) {
    return;
  }

  const noop = function() {
    return null;
  };

  const analytics = window.gtag || noop;

  try {
    console.log('analytics', analytics);
    analytics(...args);
  } catch (err) {
    console.error('Error on dispatch GA Pageview', err);
  }
}
