import styles from '../ChooseYourTeam.scss';

const classNames = require('classnames');

export default function SingleTeam({ name, setupTeam, currentTeamBanner, customClasses = {} }) {
  const className = classNames({
    ...customClasses
  });

  return (
    <article className={className}>
      {currentTeamBanner && (
        <div className="container" onClick={setupTeam}>
          <figure className={styles.banner}>
            <img src={currentTeamBanner} alt={`Ícone representando a camisa do ${name}`} />
          </figure>
          <h1 className={styles.teamTitle}>{name}</h1>
        </div>
      )}
    </article>
  );
}
