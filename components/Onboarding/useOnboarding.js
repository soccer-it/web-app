import { useState } from 'react';
import { userConfig } from 'utils/store';

const debounce = require('debounce');
const omit = require('ramda/src/omit');

export default function useOnboarding() {
  const [currentStep, setCurrentStep] = useState('askName');
  const currentUserSetup = userConfig.userSetup;

  const withDebounce = debounce((callback, ...params) => callback(...params), 300);

  const setUserName = e => {
    e.preventDefault();

    withDebounce(name => {
      userConfig.userSetup.userName = name;
    }, e.target.value);
  };

  const setUserEmail = e => {
    e.preventDefault();

    withDebounce(email => {
      userConfig.userSetup.userEmail = email;
    }, e.target.value);
  };

  function addUser(data) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8000/api/addUser/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(resolve)
        .catch(reject);
    });
  }

  const onSetupStep = e => {
    e.preventDefault();

    const { userName, userEmail, team } = currentUserSetup;

    if (currentStep === 'askName' && userName) {
      setCurrentStep('askContact');
    }

    if (currentStep === 'askContact' && userEmail) {
      const mappedTeam = omit(['images/shirt', 'base-content-color', 'base-theme-color'], team);

      addUser({
        name: userName,
        email: userEmail,
        team: mappedTeam,
        notificationToken: null
      });
    }
  };

  return {
    currentStep,
    onSetupStep,
    setUserName,
    setUserEmail,
    userSetup: currentUserSetup
  };
}
