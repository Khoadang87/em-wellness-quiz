const C="em-wellness-v7",F=["./","index.html","manifest.json","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png","logo.png","favicon.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F.map(u=>new Request(u,{cache:"reload"})))))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const q=e.request;if(q.method!=="GET"||new URL(q.url).origin!==location.origin)return;
 if(q.mode==="navigate"||q.destination==="document"){e.respondWith(fetch(q,{cache:"no-store"}).then(n=>{const cp=n.clone();caches.open(C).then(c=>c.put("index.html",cp));return n}).catch(()=>caches.match("index.html").then(r=>r||caches.match("./"))));return}
 e.respondWith(caches.match(q,{ignoreSearch:true}).then(r=>{const net=fetch(q).then(n=>{if(n.ok){const cp=n.clone();caches.open(C).then(c=>c.put(q,cp))}return n});return r||net}))});
