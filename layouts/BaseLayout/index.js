import Metatags from './Metatags';
import baseStyles from 'styles/base.scss';
import loadSvg from 'utils/loadSvg';
import { useEffect } from 'react';

export default function BaseLayout({ children, pageName }) {
  useEffect(() => {
    loadSvg();
  }, []);

  return (
    <>
      <Metatags />
      <main className={baseStyles.baseLayout} data-page={pageName}>
        {children}
      </main>
    </>
  );
}
