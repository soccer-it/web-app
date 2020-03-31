// Components
import Icon from 'components/Icon';

// Styles
import { doneWrapper, doneTitle, doneSubtitle, doneLogo, doneIcon } from './Steps.scss';

export default function Done() {
  return (
    <div className={doneWrapper}>
      <Icon className={doneLogo} id="logolettering" />
      <Icon className={doneIcon} id="check" />
      <h1 className={doneTitle}>Feito! Você faz parte do time soccerit.</h1>
      <h2 className={doneSubtitle}>
        Aguarde <br /> novidades!
      </h2>
    </div>
  );
}
