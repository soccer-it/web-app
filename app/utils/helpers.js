import { fromNullable } from 'folktale/maybe'
import R from 'ramda'

export const capitalizeText = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const normalizeText = (str) => str.normalize
	? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	: str

export const toInt = (n) => parseInt(n, 10)

export const is = (value, type) => {
	return Object.prototype.toString.call(value) === `[object ${type}]`;
}

export const removeSpecialChars = str => {
	if (!str) return str;
  var newStr = str.replace(/[^\w\s]/gi, '')
	return newStr;
}

export const removeSpacesRegex = (str) => str.replace(/\s/g, '');

export const removeMaskFromCellphone = (str) =>
  removeSpacesRegex(removeSpecialChars(str))

export const getOnlyNumbers = (str) => {
  return str.replace(/\D/g, '');
}

export const strInsertAt = (a, b, position) => a.substr(0, position) + b + a.substr(position);

export const getDropdownElement = (el) => el.parentNode.parentNode.parentNode;

export const pipe = (fn,...fns) => (...args) => fns.reduce( (acc, fn) => fn(acc), fn(...args));

export const safeProp = R.curry(R.compose(fromNullable, R.prop))

export const isDropdown = (el) => el.getAttribute('role') === 'combobox';

export const log = (prefix) =>
  R.tap((value) => console.log('%c%s: ', 'color: #C753B4; background: #E7FFE7; font-size: 24px;', prefix, value))


export const disableElement = el => {
  if(isDropdown(el)) {
    const box = getDropdownElement(el)
    box.classList.add('disabled')
  }

  el.readonly = true;
  el.classList.add('disabled');
  el.setAttribute('readonly', true);
  el.setAttribute('aria-disabled', true);
  return el
}

export const enableElement = el => {
  if(isDropdown(el)) {
    const box = getDropdownElement(el)
    box.classList.remove('disabled')
  }

  el.classList.remove('disabled');
  el.removeAttribute('readonly');
  el.removeAttribute('aria-disabled');
  return el
}

export const removeAttrs = R.curry((attrs, el) => {
  R.forEach(attr => el.removeAttribute(attr), attrs)
  return el
})

export const $ = {
  querySelector(selector){
    const element = document.querySelector(selector);
    return fromNullable(element)
  },

  querySelectorAll(selector){
    const elements = document.querySelectorAll(selector);
    return fromNullable(elements)
      .map(Array.from)
  },


  disableElement(elementName) {
    return $.querySelector(elementName)
            .map(disableElement)
  },

  enableElement(elementName) {
    return $.querySelector(elementName)
            .map(enableElement)
  },

  hideField(query) {
    return $.querySelector(query)
      .chain(el => safeProp('parentNode', el))
      .map(parent => parent.style.display = 'none')
  }
}

export const getIfWasPropChanged = (prevProps, props) =>
  propName => R.not(
    R.equals(R.prop(propName, prevProps) , R.prop(propName, props))
  )


const getStrWithBlocked = R.pipe(R.split('blocked_'), R.last)

export const getFirst = R.prop('0');

const getKeysWithBlocked = R.pipe(R.keys, R.filter(R.test(/blocked/)))

const getBlockedFields = R.curry((fields, keysWithBlocked) => {
  const byKey = R.prop(R.__, fields)
  return R.pipe(
    R.pick(keysWithBlocked),
    R.keys,
    R.filter(byKey)
  )(fields)
})

export const getModelsBlocked = (fields) => {
  return R.pipe(
    getKeysWithBlocked,
    getBlockedFields(fields),
    R.map(getStrWithBlocked)
  )(fields)
}

export const removeBlockedFields = (fields) => {
  const modelsBlocked = getModelsBlocked(fields)
  const fieldsWithoutKeysBlocked = R.omit(getKeysWithBlocked(fields), fields)
  return R.omit(modelsBlocked, fieldsWithoutKeysBlocked)
}
