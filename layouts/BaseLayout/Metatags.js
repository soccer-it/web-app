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
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/images/icons/icon-72x72.png"
      />
    </Head>
  );
}
