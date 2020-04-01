import classnames from 'classnames';

// Components
import Icon from 'components/Icon';

// Styles
import { loader, loaderVisible, spinner } from './Loader.scss';

export default function Steps({ visible }) {
  return (
    <div
      className={classnames(loader, {
        [loaderVisible]: visible
      })}
    >
      <Icon id="spin" className={spinner} />
    </div>
  );
}
