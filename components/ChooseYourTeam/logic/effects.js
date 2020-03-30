import Router from 'next/router';
import browserHistory from 'utils/browserHistory';

module.exports = (useEffect, { setCurrentSelectedIndex, setTeam, setCurrentTeam, teams, currentTeam }) => {
	useEffect(() => {
		const urlTeam = Router.router.query.team;

		const currentTeamUrl = urlTeam || teams[0].slug.toLowerCase();
		const slugIndex = teams.findIndex(({ slug }) => slug.toLowerCase() === currentTeamUrl);
		const currentTeamIndex = slugIndex !== -1 ? slugIndex : 0;

		browserHistory().replace(`/app/escolha-seu-time/?team=${currentTeamUrl}`);

		setCurrentTeam(teams[currentTeamIndex]);
		setCurrentSelectedIndex(currentTeamIndex);
	}, []);

	useEffect(
		() => {
			if (currentTeam) setTeam(currentTeam);
		},
		[ currentTeam ]
	);
};
