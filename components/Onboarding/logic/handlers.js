import { userConfig } from 'utils/store';
import withDebounce from 'utils/withDebounce';

const fetchAddUser = function (data) {
  return fetch(`${process.env.SOCCERIT_SERVICES}/addUser/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

module.exports = {
  setUserName: () => (e) => {
    e.preventDefault();

    withDebounce((name) => {
      userConfig.userSetup.userName = name;
    }, e.target.value);
  },
  setUserEmail: () => (currentEmail) => {
    withDebounce((email) => {
      userConfig.userSetup.userEmail = email;
    }, currentEmail);
  },
  addUser: () => fetchAddUser,
  onSetupStep: ({ userSetup, isLoading, currentStep, setCurrentStep, setIsLoading, addUser }) => (
    e
  ) => {
    e.preventDefault();

    const { userName, userEmail, team } = userSetup;

    if (currentStep === 'askName' && userName) {
      setCurrentStep('askContact');
    }

    if (currentStep === 'askContact' && userEmail) {
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      addUser({
        name: userName,
        email: userEmail,
        team: team.id,
        notificationTokens: userSetup.notificationTokens
      })
        .then(() => {
          setIsLoading(false);
          setCurrentStep('done');
        })
        .catch(console.log);
    }
  }
};
