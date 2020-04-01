import useAskForPush from './useAskForPush';
import classnames from 'classnames';

// Styles
import { askForPush, buttonAccept, buttonReject, holder, title, pushActived } from './AskForPush.scss';

export default function AskForPush() {
  const { active, onClose, onRequestPermission } = useAskForPush();

  // if (!active) return null;

  return (
    <div className={classnames(askForPush, {
      [pushActived]: active
    })}>
      <h1 className={title}>você gostaria de receber informações sobre o seu time do coração?</h1>
      <div className={holder}>
        <button className={buttonReject} onClick={onClose}>mais tarde</button>
        <button className={buttonAccept} onClick={onRequestPermission}>aceito</button>
      </div>
    </div>
  );
}
