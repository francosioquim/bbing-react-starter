"use strict";var precacheConfig=[["/index.html","6a11b7a1edb58959297ff2c717fd4965"],["/static/css/main.a6cdc79b.css","97f83e0eddca57282e36dbac08c554be"],["/static/js/main.7ba5c0c8.js","ec83572085810120cd80cbe923985c12"],["/static/media/alegreya-sans-latin-100.4f4ec4d4.woff2","4f4ec4d4e1febfbb1c90ab4b2aa169e3"],["/static/media/alegreya-sans-latin-100.dfdbcab4.woff","dfdbcab4967c4d668efa4abf49f1a237"],["/static/media/alegreya-sans-latin-100italic.898cfa2b.woff","898cfa2b3b880efb0836a0f49c1fd3fe"],["/static/media/alegreya-sans-latin-100italic.8cde3350.woff2","8cde3350804914f1a238a0060045c6cf"],["/static/media/alegreya-sans-latin-300.62b3f172.woff2","62b3f172767a5bd461ba88a7646be64b"],["/static/media/alegreya-sans-latin-300.7bd338da.woff","7bd338da6be7e6f49bc180daec6e7fb4"],["/static/media/alegreya-sans-latin-300italic.9e801905.woff","9e801905dbbc2735662bd3cdfda58ef3"],["/static/media/alegreya-sans-latin-300italic.d713a4de.woff2","d713a4de960ba74502127e6a6eaed836"],["/static/media/alegreya-sans-latin-400.01c01a55.woff","01c01a5557565545312a148d5e8b0719"],["/static/media/alegreya-sans-latin-400.2b849349.woff2","2b8493494c3e0bed01e3d0db60f0c49b"],["/static/media/alegreya-sans-latin-400italic.1546de83.woff","1546de83abb1ab566618b57e731be0ba"],["/static/media/alegreya-sans-latin-400italic.2c99a54d.woff2","2c99a54d4525274d95991506456ca459"],["/static/media/alegreya-sans-latin-500.e3e912d0.woff","e3e912d0fa34ad1527ea951d93f2d4fc"],["/static/media/alegreya-sans-latin-500.f0c1cd83.woff2","f0c1cd83d38c6953fb1f989cfefe7d0c"],["/static/media/alegreya-sans-latin-500italic.04b7567e.woff","04b7567e0660a20a03100464b80fa47d"],["/static/media/alegreya-sans-latin-500italic.84919aff.woff2","84919affed175763d981693597e1a59f"],["/static/media/alegreya-sans-latin-700.c3a537e2.woff2","c3a537e2ee3bf55e8097508b38de905b"],["/static/media/alegreya-sans-latin-700.c4476a24.woff","c4476a2495b54143eda4ba49674fae80"],["/static/media/alegreya-sans-latin-700italic.5538533a.woff2","5538533ad6f64209cb0ee0fc742e2537"],["/static/media/alegreya-sans-latin-700italic.ba8320a6.woff","ba8320a6f454a9cac2ff5cd8c09e9c99"],["/static/media/alegreya-sans-latin-800.cf799eae.woff","cf799eaeb763b460db93197c1b8016a4"],["/static/media/alegreya-sans-latin-800.fb733163.woff2","fb733163f33a1b4c15fb118e208814d3"],["/static/media/alegreya-sans-latin-800italic.846e0403.woff2","846e040352171c01ecc3853569e298fe"],["/static/media/alegreya-sans-latin-800italic.e65be38f.woff","e65be38fe79d13bfc2fd2972bf374d8f"],["/static/media/alegreya-sans-latin-900.7b889c05.woff","7b889c05c33fcf696daa2998da0d0e0b"],["/static/media/alegreya-sans-latin-900.98e64653.woff2","98e646533f5d5b3d828dc1733edb895d"],["/static/media/alegreya-sans-latin-900italic.0cb6f30d.woff","0cb6f30da333181c247551b93ee371f5"],["/static/media/alegreya-sans-latin-900italic.d8331806.woff2","d83318060f4626dca706f88c420cf0b8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});