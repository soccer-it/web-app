// Utils
import { userConfig } from 'utils/store';

export default _ => {
  return {
    triggerMotion: false,
    currentStep: 'askName',
    isLoading: false,
    userSetup: userConfig.userSetup
  };
};
