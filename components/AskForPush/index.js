import { useEffect } from 'react';
import classnames from 'classnames';

// Logic
import useAskForPush from './useAskForPush';

// Utils
import { userConfig } from 'utils/store';

// Components
import Loader from 'components/Loader';

// Styles
import {
  askForPush,
  buttonAccept,
  buttonReject,
  holder,
  title,
  pushActived
} from './AskForPush.scss';

export default function AskForPush() {
  const { isLoading, active, onClose, onRequestPermission, setActive } = useAskForPush();

  useEffect(() => {
    setTimeout(() => {
      setActive(!userConfig.userSetup.notificationTokens);
    }, 500);
  }, []);

  return (
    <div
      className={classnames(askForPush, {
        [pushActived]: active
      })}
    >
      {isLoading ? (
        <Loader visible={isLoading} />
      ) : (
        <>
          <h1 className={title}>
            você gostaria de receber informações sobre o seu time do coração?
          </h1>
          <div className={holder}>
            <button className={buttonReject} onClick={onClose}>
              mais tarde
            </button>
            <button className={buttonAccept} onClick={onRequestPermission}>
              aceito
            </button>
          </div>
        </>
      )}
    </div>
  );
}
