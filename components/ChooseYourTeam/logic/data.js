import { userConfig } from 'utils/store';

module.exports = (_) => {
	const userSetupTeam = userConfig.userSetup.team;

	return {
		userSetupTeam
	};
};
