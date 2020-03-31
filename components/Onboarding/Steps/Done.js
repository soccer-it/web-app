// Components
import Icon from 'components/Icon';
import AskForPush from 'components/AskForPush';

// Styles
import { doneWrapper, doneTitle, doneSubtitle, doneLogo, doneIcon } from './Steps.scss';

export default function Done() {
  return (
    <div className={doneWrapper}>
      <AskForPush />
      <Icon className={doneLogo} id="logolettering" />
      <Icon className={doneIcon} id="check" />
      <h1 className={doneTitle}>Feito! Você faz parte do time soccerit.</h1>
      <h2 className={doneSubtitle}>
        Aguarde <br /> novidades!
      </h2>
    </div>
  );
}
