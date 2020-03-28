import useAskForPush from './useAskForPush';
import { askForPush } from './AskForPush.scss';

export default function AskForPush() {
  const { active, onClose, onRequestPermission } = useAskForPush();

  if (!active) return null;

  return (
    <div styles={askForPush}>
      <h1 className="title">Você gostaria de receber informações sobre o seu time do coração?</h1>
      <button onClick={onClose}>Não Obrigado!</button>
      <button onClick={onRequestPermission}>Ok!</button>
    </div>
  );
}
