import styles from "./SingleTeam.scss";

const classNames = require("classnames");

export default function SingleTeam({
  name,
  banner,
  theme,
  customClasses = {}
}) {
  const className = classNames({
    [styles.singleTeam]: true,
    ...customClasses
  });

  return (
    <article className={className} data-theme={theme}>
      <div className="container">
        <figure className={styles.banner}>
          <img
            src={`/static/images${banner}`}
            alt="Ícone representando a camisa do Corinthians"
          />
        </figure>
        <h1 className={styles.title}>{name}</h1>
        <a className={styles.link} href="#">
          selecionar
        </a>
      </div>
    </article>
  );
}
