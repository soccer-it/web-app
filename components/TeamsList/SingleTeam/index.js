import classNames from 'classnames';

// Styles
import { banner, teamTitle, teamClass } from './SingleTeam.scss';

export default function SingleTeam({ team, setupTeam, currentTeamBanner }) {
  const { name } = team;
  return (
    <article
      className={classNames(teamClass, {
        ['-loaded']: currentTeamBanner
      })}
      onClick={setupTeam}
    >
      <figure className={banner}>
        <img src={currentTeamBanner} alt={`Ícone representando a camisa do ${name}`} />
      </figure>
      <h1 className={teamTitle}>{name}</h1>
    </article>
  );
}
