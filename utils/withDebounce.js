const debounce = require('debounce');
export default debounce((callback, ...params) => callback(...params), 300);
