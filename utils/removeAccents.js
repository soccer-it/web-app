const removeAccents = str => {
  if (!str) return;

  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export default removeAccents;
