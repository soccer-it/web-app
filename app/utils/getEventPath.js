function getEventPath(target) {
  let path = [];
  if (!target || !target.parentNode) {
    return path;
  }
  let parent = target;
  while (parent) {
    path.push(parent);
    parent = parent.parentElement
  }
  return path;
}

export default getEventPath;
