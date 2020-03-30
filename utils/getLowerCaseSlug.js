export default function getLowerCaseSlug(currentTeam = {}) {
	const teamSlug = currentTeam.slug || '';

	return teamSlug.toLowerCase();
}
