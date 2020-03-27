// Styles
import { banner, teamTitle, teamClass } from './SingleTeam.scss';

export default function SingleTeam({ team, setupTeam, currentTeamBanner }) {
  const { name } = team;
  return (
    <article className={teamClass} onClick={setupTeam}>
      <figure className={banner}>
        {currentTeamBanner && (
          <img src={currentTeamBanner} alt={`Ícone representando a camisa do ${name}`} />
        )}
      </figure>
      <h1 className={teamTitle}>{name}</h1>
    </article>
  );
}
