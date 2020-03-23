const classNames = require('classnames');

// Styles
// TODO: remover essas regras para um lugar próprio do SingleTeam
import { banner, teamTitle, singleTeam } from './SingleTeam.scss';


export default function SingleTeam({ name, setupTeam, currentTeamBanner, customClasses = {} }) {
  const className = classNames(singleTeam, {
    ...customClasses
  });

  return (
    <article className={className} onClick={setupTeam}>
      <figure className={banner}>
        {currentTeamBanner && (
          <img src={currentTeamBanner} alt={`Ícone representando a camisa do ${name}`} />
        )}
      </figure>
      <h1 className={teamTitle}>{name}</h1>
    </article>
  );
}
