import dynamic from 'next/dynamic';

const stepsHandlers = {
  askName: dynamic(import('../Steps/AskName').then(m => m.default)),
  askContact: dynamic(import('../Steps/AskContact').then(m => m.default)),
  done: dynamic(import('../Steps/Done').then(m => m.default))
};

module.exports = () => {
  return {
    stepsHandlers
  };
};

import { userConfig } from 'utils/store';

module.exports = (_) => {
	const userSetupTeam = userConfig.userSetup.team;

	return {
		userSetupTeam
	};
};

