import initFirebase from 'utils/init-firebase';
import showNotification from 'utils/showNotification';
import { userConfig } from 'utils/store';
import { useState, useEffect } from 'react';

export default function useAskForPush() {
  const [active, setActive] = useState(!userConfig.userSetup.notificationToken);
  const [firebaseConfig, setFirebaseConfig] = useState(null);

  function onClose() {
    setActive(false);
  }

  useEffect(() => {
    const firebase = initFirebase();

    firebase.messaging.onMessage(({ notification }) => {
      const title = notification.title;
      const options = {
        body: notification.body,
        icon: ''
      };

      showNotification({
        title,
        options
      });
    });

    setFirebaseConfig(firebase);
  }, []);

  function onRequestPermission() {
    const { messaging } = firebaseConfig;

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
    onClose
  };
}
