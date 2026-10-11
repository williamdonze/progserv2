/* Service worker de ProgWeb 2 : appli installable et utilisable hors connexion.
   Réseau d'abord (le contenu est toujours le plus récent quand on est en ligne), copie en cache pour le hors-ligne. */
const CACHE = "progserv2-v2";
const CACHE_MOTEURS = "moteurs-v1";   // js/vendor/ : gardé d'une version du site à l'autre ; passer à v2 si on reconstruit js/vendor/ (tools/php-wasm/construire.sh)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== CACHE_MOTEURS).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // moteurs lourds et figés (PHP en WebAssembly, 18 Mo) : le cache d'abord, le réseau seulement la première fois
  if (new URL(req.url).pathname.includes("/js/vendor/")) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(rep => { if (rep.ok) { const copie = rep.clone(); caches.open(CACHE_MOTEURS).then(c => c.put(req, copie)); } return rep; })));
    return;
  }
  e.respondWith(
    fetch(req).then(rep => {
      if (rep.ok) { const copie = rep.clone(); caches.open(CACHE).then(c => c.put(req, copie)); }
      return rep;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === "navigate" ? caches.match("./") : Response.error())))
  );
});
