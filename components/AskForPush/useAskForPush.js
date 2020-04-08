import { useState, useEffect } from 'react';

// Utils
import initFirebase from 'utils/init-firebase';
import showNotification from 'utils/showNotification';
import { userConfig } from 'utils/store';
import isPushSuported from 'utils/isPushSuported';

export default function useAskForPush() {
  const [active, setActive] = useState(!userConfig.userSetup.notificationTokens);
  const [isLoading, setIsLoading] = useState(false);
  const [firebaseConfig, setFirebaseConfig] = useState(null);

  function onClose() {
    setActive(false);
  }

  useEffect(() => {
    if (isPushSuported()) {
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
    }
  }, []);

  function onRequestPermission() {
    const { messaging } = firebaseConfig;

    messaging
      .requestPermission()
      .then(() => {
        setIsLoading(true);
        return messaging.getToken();
      })
      .then((token) => {
        setIsLoading(false);
        setActive(false);
        userConfig.userSetup.notificationTokens = [token];
      })
      .catch((err) => console.log('No permission to send push', err));
  }

  return {
    isLoading,
    active,
    onRequestPermission,
    onClose,
    setActive
  };
}
