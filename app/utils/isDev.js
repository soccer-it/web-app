/* global APP */

const isDev = (!(/(prod)/gi.test(APP.env)));

/* Reverting isDev */
// const isDev = false;

export default isDev;
