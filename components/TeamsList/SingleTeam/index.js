import classNames from 'classnames';

// Styles
import { banner, teamTitle, teamClass, actived } from './SingleTeam.scss';

export default function SingleTeam({ team, setupTeam, activeSlide }) {
  const {
    images: { shirt },
    name
  } = team;

  return (
    <article
      className={classNames(teamClass, {
        [actived]: activeSlide
      })}
      onClick={setupTeam}
    >
      <figure className={banner}>
        <img src={shirt} alt={`Ícone representando a camisa do ${name}`} />
      </figure>
      <h1 className={teamTitle}>{name}</h1>
    </article>
  );
}
