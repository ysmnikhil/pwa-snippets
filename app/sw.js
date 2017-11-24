// tasks
// change response 
// -> change image
// -> change value
// add cache for different domains like local, live, outside
// skip server side requests
// skip post request

var extraPram = '';
var version = 'v';
var serverCache = 'pwa-' + version;
var allCaches = [
  serverCache,
];

//add
var cacheFiles = [

];

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(serverCache).then(function(cache){
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', function(event){
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    return cacheName.startsWith('pwa-') &&
                        !allCaches.includes(cacheName);
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestUrl = new URL(event.request.url);

    if(skipIfThese(requestUrl.pathname)) return;

    event.respondWith(getPWACacheData(event.request, serverCache));
});

function skipIfThese(storageUrl){
    storageUrl = storageUrl.replace(extraPram, '');

    if(['app/sw.js'].indexOf(storageUrl) > -1){
        return true;
    }
    return false;
}

function getPWACacheData(request, cacheName){
    var storageUrl = request.url;

    return caches.open(cacheName).then(function(cache) {
        return cache.match(storageUrl).then(function(response) {
            if(response)
                return response;
            else{
                return fetch(request).then(function(networkResponse) {
                    // if(networkResponse.ok == true){
                        cache.put(storageUrl, networkResponse.clone());
                    // }
                    return networkResponse;
                }).catch(function(error) {
                    console.log(error);
                });
            }
        });
    });
}

self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});