import styles from '../ChooseYourTeam.scss';

const classNames = require('classnames');

export default function SingleTeam({ name, currentTeamBanner, customClasses = {} }) {
  const className = classNames({
    [styles.singleTeam]: true,
    ...customClasses
  });

  return (
    <article className={className}>
      {currentTeamBanner && (
        <div className="container">
          <figure className={styles.banner}>
            <img src={currentTeamBanner} alt={`Ícone representando a camisa do ${name}`} />
          </figure>
          <h1 className={styles.teamTitle}>{name}</h1>
        </div>
      )}
    </article>
  );
}
