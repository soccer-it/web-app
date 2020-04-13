// Styles
import { install, icon, contentWrapper, title, text, buttonInstall } from './Install.scss';

// Components
import Icon from 'components/Icon';

export default function Install() {
  return (
    <div className={install}>
      <Icon id="close" className={icon} />
      <div className={contentWrapper}>
        <p className={title}>instale gratuitamente!</p>
        <p className={text}>tenha a experiência completa instalando o soccerit como um app</p>
      </div>
      <button className={buttonInstall}>instalar</button>
    </div>
  );
}
