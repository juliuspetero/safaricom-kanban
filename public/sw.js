if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>a(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/__datasets__.json",revision:"d5381e35973fccd0909917f37a2f4fd0"},{url:"/_next/static/X70zgw1AYEo2ec0u5wx_y/_buildManifest.js",revision:"ab8fa5563415a3c0d134924c5c0708db"},{url:"/_next/static/X70zgw1AYEo2ec0u5wx_y/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/140-ac3c24947411533b.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/187-f5d3ebb25aa82b20.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/447-f703eac2d011b536.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/4bd1b696-3a9304f6a5857c9f.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/602dbae6-d6dde19115ff804d.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/96-68f82473eda4afd5.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/app/_not-found/page-efc75bd9588067c9.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/app/api/graphql/route-ea8f3f286f1ff0e6.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/app/layout-81ea169b6e938507.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/app/page-55162f392a740a74.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/main-app-8327e7b73be3baf4.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/main-fe43580cd27c9bc1.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-e20c3912beb9e35d.js",revision:"X70zgw1AYEo2ec0u5wx_y"},{url:"/_next/static/css/1018df78a05ccae4.css",revision:"1018df78a05ccae4"},{url:"/_next/static/media/24c15609eaa28576-s.woff2",revision:"be8ee93a8cf390eb9cb6e6aadf1a3bf0"},{url:"/_next/static/media/2c07349e02a7b712-s.woff2",revision:"399fb80a20ea7d2a53a1d6dc1e5f392a"},{url:"/_next/static/media/47cbc4e2adbc5db9-s.p.woff2",revision:"4746809ed1c17447d45d2a96c64796d4"},{url:"/_next/static/media/627d916fd739a539-s.woff2",revision:"c46f88e9518178fd56311db461452f8d"},{url:"/_next/static/media/74c003a2abab0c4f-s.woff2",revision:"99ebacc4dfd7bd21bf48d21306c0dd42"},{url:"/_next/static/media/84602850c8fd81c3-s.woff2",revision:"bdf2a9a2d904dc21d9b593b82887af52"},{url:"/_next/static/media/90da053edc2b7de3-s.woff2",revision:"5489c188e786a745bd9ba1bc9fbf7f71"},{url:"/_next/static/media/ac3b7908202f8517-s.woff2",revision:"9df032a6b99e0fce98ec4ad311b0fd7d"},{url:"/_next/static/media/b5ee789b512e4d1b-s.woff2",revision:"6f64aa964b323b9c0e5dbce214081225"},{url:"/favicon.ico",revision:"aadc2f3d357ed07534592a4c93cfd5e5"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon512_maskable.png",revision:"1feb926c18c2710085e7063dc0fe7b94"},{url:"/manifest.json",revision:"63637839154fb2453fd702e7ffc15a35"},{url:"/screenshot1.png",revision:"5ebd5e37d07394c50b0ad91a74d13c6a"},{url:"/serviceWorker.js",revision:"592c3d7cd04d5bde4b991beaa04f8986"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.sameOrigin,a=e.url.pathname;return!(!s||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,a=e.url.pathname,n=e.sameOrigin;return"1"===s.headers.get("RSC")&&"1"===s.headers.get("Next-Router-Prefetch")&&n&&!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,a=e.url.pathname,n=e.sameOrigin;return"1"===s.headers.get("RSC")&&n&&!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.url.pathname;return e.sameOrigin&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
