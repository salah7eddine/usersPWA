importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);

// // custom adjustments
// console.log("my adjustments");

workbox.routing.registerRoute(
  new RegExp("http://jsonplaceholder.typicode.com/users"),
  workbox.strategies.caheFirst()
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets"
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
);

workbox.precaching.precacheAndRoute([]);
