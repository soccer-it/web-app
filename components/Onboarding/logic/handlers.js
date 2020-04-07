import { userConfig } from 'utils/store';
import withDebounce from 'utils/withDebounce';
import Router from 'next/router';

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
  addUser: ({ userSetup, setIsLoading, isLoading }) => () => {
    if (isLoading) return;
    setIsLoading(true);

    const { userName, userEmail, team } = userSetup;

    return fetchAddUser({
      name: userName,
      email: userEmail,
      team: team.id,
      notificationTokens: userSetup.notificationTokens
    });
  },
  onNext: ({ userSetup, currentStep, addUser, setIsLoading }) => (e) => {
    e.preventDefault();
    const { userName, userEmail } = userSetup;

    if (currentStep === 'askName' && userName) {
      Router.push(`/app/onboarding/dados-de-contato`);
    }

    if (currentStep === 'askContact' && userEmail) {
      addUser()
        .then(() => {
          setIsLoading(false);
          Router.push(`/app/onboarding/sucesso`);
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err)
        });
    }
  }
};
