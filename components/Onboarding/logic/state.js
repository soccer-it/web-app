// Utils
import { userConfig } from 'utils/store';

export default _ => {
  return {
    triggerMotion: true,
    currentStep: '',
    isLoading: false,
    userSetup: userConfig.userSetup
  };
};
