const statCache='statv4';

const dynaCache='dynav1';

const assets=['.java\activies.js/','./java\donation.js','./java\store.js','./activities.html','./android-chrome-192x192.png','./android-chrome-512x512.png','./apple-touch-icon.png','./beaches.html','/browserconfig.xml','/donation.html','./favicon-16x16.png','./favicon-32x32.png','./favicon.ico','./heritage1.html','./heritage2.html','./hotel.html','./index.html','./manifest.json','./mstile-150x150.png','./safari-pinned-tab.svg','./site.webmanifest','./store.html','./wildlife.html','./css\activities.css','./css\beaches.css','./css\Donations.css','./css\heritage1.css','./css\heritage2.css','./css\hotel.css','./css\index.css','./css\main.css','./css\store.css','./css\wildlife.css','./img\act1.jpg','./img\ap2.jpg','./img\ap4.jpg','./img\bacimg.png','./img\bg-2.jpg','./img\bg-3.jpg','./img\diving.jpg','./img\dpic.jpg','./img\dpic2.jpg','./img\dpic3.jpg','./img\dpic4.jpg','./img\dpic5.jpg','./img\Flora.jpg','./img\hbeach.jpg','./img\header4.jpg','./img\hiking.jpg','./img\homepg.jpg','./img\hortan.webp','./img\hotel1.jpg','./img\hotel2.jpg','./img\icons.png','./img\loader.gif','./img\lotus.png','./img\mihika punchi.png','./img\mirror.jpg','./img\mousedeer.jpg','./img\p1.webp','./img\p2.jpg','./img\p3.jpg','./img\prod1.webp','./img\prod2.webp','./img\prod3.webp','./img\prod4.webp','./img\sigiriya.jpg','./img\sigiriya1.jpg','./img\sigiriya2.jpg','./img\sigiriya3.jpg','./img\sigiriya4.jpg','./img\sigiriya5.jpg','./img\sinha.webp','./img\sl2.jpg','./img\sripada.jpg','./img\storetopimg.png','./img\texture-bottom.png','./img\texture-top.png','./img\top_don.jpg','./img\whale.jpg','./img\Wild-Life1.jpg','./img\wild-life2.jpg','./img\yalaleopard.jpg','./img\events\beach1.jpg','./img\events\beach2.jpg','./img\icon\013-photo.png','./img\icon\020-hotel.png','./img\icon\bavel.png','./img\icon\destination.png','./img\news\culture-1-ayurveda-medicine.jpg','./img\news\sri-lankan-new-year-traditions-1.jpg','./img\news\tour.jpg','./img\stay\architecture-bar.jpg','./img\stay\pertiwi-suite-slide1.jpg','./.vscode\settings.json']

self.addEventListener('install',(evt)=>{
    //console.log("Service worker installed.");
    //install event should wait until whatever inside evt.waitUntil() finishes.
    evt.waitUntil(
        //open static cache
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assets...");
        //adding all assets in assets array into cache
        cache.addAll(assets);
    })
    );
    
});

//The activate event
self.addEventListener('activate',(evt)=>{
    //console.log("Service worker is active!");
    evt.waitUntil(
        //accessing all versions of caches available currently
        caches.keys()
        .then((keys)=>{
            //console.log(keys);
            //going through the list pf caches, checking whether the cache name is equal to current cache version/s:static and dynamic and getting rid of any old cache versions
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
    
                .map(key=>caches.delete(key))
            );

        })
    );
});

//The fetch event handler
self.addEventListener('fetch',(evt)=>{
    //console.log("Fetch event",evt);
    //interrupt the normal request and respond with a custom response
    evt.respondWith(
        //check if the resource exists in cache
        caches.match(evt.request)
        .then((cacheRes)=>{
            //return from cache if it is there in cache. or else fetch from server
            return cacheRes || fetch(evt.request)
            //when fetching from server, add the request and response to dynamic cache to access the resource/s when offline
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
            //returning the fallback page if the resource is not available in any of the caches
        }).catch(()=>{
            //check whether the request url contains .html in it
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('/fallback.html')
            }
            })
    );
})