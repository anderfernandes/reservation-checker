const CACHE = 'cache'

const urlsToCache = [
  '/index.html',
  './app.js',
  '/astral-logo-dark.png',
  '/favicon.ico',
  '/styles.css'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})
