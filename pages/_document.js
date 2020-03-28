import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="dns-prefetch" href="//assets.soccerit.com.br" />
          <link rel="dns-prefetch" href="//services.soccerit.com.br" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />

          <meta name="robots" content="noindex, nofollow" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="soccerit" />
          <meta name="application-name" content="soccerit" />
          <meta name="theme-color" content="#232323" />
          <meta name="msapplication-navbutton-color" content="#232323" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
          <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#444444" />
          <link rel="shortcut icon" href="/images/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#333333" />
          <meta name="msapplication-TileImage" content="/images/icons/mstile-144x144.png" />
          <meta name="msapplication-config" content="/images/icons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
          ></script> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              gtag('js', new Date());
              gtag('config', '${process.env.GA_ID}', {
                location: window.location,
                path_path: window.location.pathname,
                path_title: document.title,
                non_interaction: true
              });
            `
            }}
          /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
