import { Fragment } from "react";
import styles from "./ContentSection.scss";

export default function ContentSection({ sectionName, title, children }) {
  return (
    <section className={styles.contentSection} data-section-name={sectionName}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
      </div>
      <Fragment>{children}</Fragment>
    </section>
  );
}
