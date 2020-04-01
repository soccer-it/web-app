import initFirebase from 'utils/init-firebase';
import { userConfig } from 'utils/store';
import { useState } from 'react';

export default function useAskForPush() {
  const [active, setActive] = useState(false);

  function onClose() {
    setActive(false);
  }

  function onRequestPermission() {
    const { messaging } = initFirebase();

    messaging
      .requestPermission()
      .then(() => {
        setActive(false);
        return messaging.getToken();
      })
      .then(token => (userConfig.userSetup.notificationToken = token))
      .catch(err => console.log('No permission to send push', err));
  }

  return {
    active,
    onRequestPermission,
    onClose,
    setActive
  };
}
