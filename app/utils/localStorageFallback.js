import storage from 'local-storage-fallback';

window.localStorage = storage;
window.sessionStorage = storage;
