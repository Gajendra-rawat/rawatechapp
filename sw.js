var CACHE_NAME = 'rawatech-v1';
var urlsToCache = ['./index.html', './manifest.json'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
```

---

## 🚀 GitHub Par Upload Karne Ke Steps

**Step 1:** GitHub.com → New Repository → Name: `rawatech-app` → Public → Create

**Step 2:** Teeno files upload karo (index.html, manifest.json, sw.js)

**Step 3:** `index.html` mein ye line update karo apne actual URL se:
```
var APP_URL = "https://script.google.com/macros/s/AAPKA_ACTUAL_ID/exec";
