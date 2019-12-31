import styles from '../ChooseYourTeam.scss';

const classNames = require('classnames');

export default function SingleTeam({ name, setupTeam, currentTeamBanner, customClasses = {} }) {
  const className = classNames({
    ...customClasses
  });

  const SetupLink = ({ children }) => (
    <a title={`Escolher ${name}`} onClick={setupTeam} href="#">
      {children}
    </a>
  );

  return (
    <article className={className}>
      {currentTeamBanner && (
        <div className="container">
          <figure className={styles.banner}>
            <SetupLink>
              <img src={currentTeamBanner} alt={`Ícone representando a camisa do ${name}`} />
            </SetupLink>
          </figure>
          <h1 className={styles.teamTitle}>
            <SetupLink>{name}</SetupLink>
          </h1>
        </div>
      )}
    </article>
  );
}
