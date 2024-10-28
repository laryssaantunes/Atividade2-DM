let cacheName = "meus-horarios-de-aulas";
let filesToCache = ["/", "index.html",
                    "css/style.css", "/js/main.js", "/pages/pagina.html", "/pages/pagina", "/manifest.json", "aula.html", "pe.html",];
/* inicializando a service worker e fazendo o dowloand do conteudo da aplicação */
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});