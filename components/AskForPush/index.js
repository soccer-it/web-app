import useAskForPush from './useAskForPush';

// Styles
import { askForPush, buttonAccept, buttonReject, holder, title } from './AskForPush.scss';

export default function AskForPush() {
  const { active, onClose, onRequestPermission } = useAskForPush();

  if (!active) return null;

  return (
    <div className={askForPush}>
      <h1 className={title}>você gostaria de receber informações sobre o seu time do coração?</h1>
      <div className={holder}>
        <button className={buttonReject} onClick={onClose}>mais tarde</button>
        <button className={buttonAccept} onClick={onRequestPermission}>aceito</button>
      </div>
    </div>
  );
}
