// Utils
import { userConfig } from 'utils/store';

export default _ => {
  return {
    triggerMotion: false,
    currentStep: '',
    isLoading: false,
    userSetup: userConfig.userSetup
  };
};
