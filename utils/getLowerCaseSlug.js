module.exports = function getLowerCaseSlug(currentTeam = {}) {
  const teamSlug = currentTeam.slug || '';

  return teamSlug.toLowerCase();
};
