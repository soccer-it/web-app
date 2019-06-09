import baseStyles from "../../static/styles/base.scss";

export default function BaseLayout({ children, pageName }) {
  return (
    <main className={baseStyles.baseLayout} data-page={pageName}>
      {children}
    </main>
  );
}
