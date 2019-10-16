import styles from "./SingleTeam.scss";

const classNames = require("classnames");

export default function SingleTeam({ name, banner, customClasses = {} }) {
  const className = classNames({
    [styles.singleTeam]: true,
    ...customClasses
  });

  return (
    <article className={className}>
      <div className="container">
        <figure className={styles.banner}>
          <img src={banner} alt={`Ícone representando a camisa do ${name}`} />
        </figure>
        <h1 className={styles.title}>{name}</h1>
      </div>
    </article>
  );
}
