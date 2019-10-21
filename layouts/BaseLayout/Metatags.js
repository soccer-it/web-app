import Head from "next/head";

export default function Metatags() {
  return (
    <Head>
      <title key="title">soccerit | um novo jeito de torcer</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="soccerit" />
      <meta name="application-name" content="soccerit" />
      <meta name="theme-color" content="#232323" />
      <meta name="msapplication-navbutton-color" content="#232323" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="manifest" href="/static/manifest.json" />

      <link rel="shortcut icon" type="image/x-icon" href="/static/images/icons/favicon/16.ico" />

      <link rel="icon" type="image/png" href="/static/images/icons/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/static/images/icons/favicon-32x32.png" sizes="32x32" />

      {/* <link rel="icon" type="image/png" href="/static/images/icons/favicon/96x96.png" sizes="96x96" /> */}

      <link rel="icon" type="image/png" href="/static/images/icons/android-chrome-196x196.png" sizes="196x196" />

      {/* <link rel="icon" type="image/png" href="/static/images/icons/favicon/228x228.png" sizes="228x228" /> */}

      <link rel="apple-touch-icon" sizes="180x180" href="/static/images/icons/apple-touch-icon.png" />
      {/* <link rel="apple-touch-icon" sizes="114x114" href="/static/images/icons/favicon/114x114.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/images/icons/favicon/72x72.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/images/icons/favicon/144x144.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/images/icons/favicon/60x60.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/images/icons/favicon/120x120.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/images/icons/favicon/76x76.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/images/icons/favicon/152x152.png" /> */}


      <meta name="msapplication-TileColor" content="#29a74a" />
      <meta name="msapplication-TileImage" content="/static/images/icons/mstile-150x150.png" />
      <meta name="msapplication-config" content="/static/images/icons/browserconfig.xml" />

    </Head>
  );
}
