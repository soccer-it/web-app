self.__precacheManifest = [
  {
    "url": "/_next/static/7QdCrO-wdC4G8X1FTdB32/pages/_app.js",
    "revision": "6ed839778d0e2b70a6ad"
  },
  {
    "url": "/_next/static/7QdCrO-wdC4G8X1FTdB32/pages/_error.js",
    "revision": "3c85900389330ac82d40"
  },
  {
    "url": "/_next/static/7QdCrO-wdC4G8X1FTdB32/pages/choose-your-team.js",
    "revision": "6b0acab8f293f4a50a87"
  },
  {
    "url": "/_next/static/7QdCrO-wdC4G8X1FTdB32/pages/index.js",
    "revision": "35f868c68759fa6ded1d"
  },
  {
    "url": "/_next/static/chunks/commons.e9c9dc08cf3e1b4db321.js",
    "revision": "863d16506f2ae2f4250a"
  },
  {
    "url": "/_next/static/chunks/styles.bab7c0908fbf221515db.js",
    "revision": "93ca36586f4dfe3769e5"
  },
  {
    "url": "/_next/static/css/styles.fd0fc354.chunk.css",
    "revision": "93ca36586f4dfe3769e5"
  },
  {
    "url": "/_next/static/runtime/main-fd508ba2eaf92d54803d.js",
    "revision": "0ceef72b97a301802689"
  },
  {
    "url": "/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/images/teams/corinthians-shirt.png",
    "revision": "76a5a38fb70d2e22e00363b9ed3ecb9f"
  },
  {
    "url": "static/images/teams/palmeiras-shirt.png",
    "revision": "16fdabdf08f7a430630008ec812ecf10"
  },
  {
    "url": "static/styles/base.scss",
    "revision": "b1b641aff7104de846acd011d2f69e01"
  },
  {
    "url": "static/styles/reset.scss",
    "revision": "72c7bc55301adf5367fdeebbbf442640"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
