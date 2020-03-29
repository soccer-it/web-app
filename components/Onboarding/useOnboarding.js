import { useState } from 'react';
import { userConfig } from 'utils/store';

const debounce = require('debounce');

export default function useOnboarding() {
  const [currentStep, setCurrentStep] = useState('askName');
  const [isLoading, setIsLoading] = useState(false);
  const currentUserSetup = userConfig.userSetup;

  const withDebounce = debounce((callback, ...params) => callback(...params), 300);

  const setUserName = e => {
    e.preventDefault();

    withDebounce(name => {
      userConfig.userSetup.userName = name;
    }, e.target.value);
  };

  const setUserEmail = currentEmail => {
    withDebounce(email => {
      userConfig.userSetup.userEmail = email;
    }, currentEmail);
  };

  function addUser(data) {
    return fetch(`${process.env.SOCCERIT_SERVICES}/addUser/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  const onSetupStep = e => {
    e.preventDefault();

    const { userName, userEmail, team } = currentUserSetup;

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
        notificationToken: userConfig.userSetup.notificationToken
      })
        .then(() => {
          setIsLoading(false);
          setCurrentStep('done');
        })
        .catch(console.log);
    }
  };

  return {
    currentStep,
    onSetupStep,
    setUserName,
    setUserEmail,
    isLoading,
    userSetup: currentUserSetup
  };
}
