'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f434fe80db7c6bee8345909599aad9c6",
"version.json": "d8273a91ff6379b2624ec4b10ceae1ad",
"index.html": "f5824cda99bffe8a24ad32b9c2c75c07",
"/": "f5824cda99bffe8a24ad32b9c2c75c07",
"main.dart.js": "0d1fc46e1086f7b651ea57c1f25bd211",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c4a0512cf9bbda522cacba8b3565fa9a",
".git/ORIG_HEAD": "427ded8b61212c65d5a60df2395489b6",
".git/config": "3aa63999861a37575801530dda75f18d",
".git/objects/3b/f84f5db1c243c02a16cb238557ecf08ef6f797": "262ebaaef76944b92ecb6d22cf823d0b",
".git/objects/03/adb540185d1cc76e3073cf3b981020d40ad238": "fbfef385288e1f520581ef6cfaaee9b9",
".git/objects/9b/7b4c428e6dc819aa2f918361ab36d596a1f280": "dd8368d07dc1ebf9082b8aab02946c80",
".git/objects/df/f0e2a59b6662a8472e2760c426412b71a0c0d8": "0631e5f4eefef4148c2bfc0a6e42992f",
".git/objects/f3/fbd3218d83cf225029e94c27cd325333075a51": "ca3b02d0725ea0ae40f29ec8e1552100",
".git/objects/ee/047be7e1d3a31f9a6f0cfc08bd547ab60b1549": "199fc73cc129bbb7f8d7018d1902aad8",
".git/objects/27/4df6f0c90a9d4edba23939245e0b741a19c8c1": "4c1d0412a9ec2db0d6b1ed5f403ce001",
".git/objects/pack/pack-6deea60f0a36c717bad57638ab3ac5a6deeb30a1.pack": "f26422df6afe7f952c05d2f562240bab",
".git/objects/pack/pack-6deea60f0a36c717bad57638ab3ac5a6deeb30a1.idx": "c88ca806dbc794d39ccbe6e6d8dac6a6",
".git/objects/7d/18cf3bc1dd41f2c6eb1362647fd6cdecfdb2a6": "a7a497f02583c002035d7de60a02147b",
".git/objects/1f/e193d078fc3e42bfbf098e10ba0c2e00c65e9e": "338fc7a052d03e03f371cff7c52aef56",
".git/objects/1a/ab14cb6d55839bf1394be538ef0697d4faf36e": "6f7203ed8da0fe582d43684b9af0dc8a",
".git/objects/4c/f282bf786489303f5e5457954744899a153ff9": "1b58e072696c0390f5e03dbcdcc85e6b",
".git/objects/9a/058dde57ef19bf2fa9d6836aea656f8513869a": "b3c9e9546e0c92cbc051cea504434c7d",
".git/objects/5d/68e0ac8ccb49b951187ab6d9466dbd9cd7ec05": "1843d557122c259f86059db169328ef3",
".git/objects/5d/605d3ebac8ef6926b891906fad4ea9f00668d8": "91fb79e86b0c34c3278543b8ecfcf0a4",
".git/objects/bf/32c5b7f148f0e0da17f1d7d7534244420e63a1": "942d14144cc2839915edaecc72671edf",
".git/objects/ba/a8a7abca843cd917914b91e4088d4abaad8a9d": "cd95a0bb853ce7406cbf17e53d2b8f29",
".git/objects/b1/568cc69b412bc410b495ae7294d1cf09592b2b": "e0b94c47981f027f29ce9ebbd9f66556",
".git/objects/c2/2faad1af3bbb2d137171e9ed28a39cd4c9e872": "f443d0f25b4704e5133ab8c6d560a60f",
".git/objects/cb/8dce79d3989e0382dd122b464b49c3dc58133e": "9c403fd51aaef555893f0ff5647d1b6c",
".git/objects/40/6483f8b4d38b1c1924b27673b6ec1959675967": "f02836dbf4c986b7f464b06c582a2087",
".git/objects/14/1542df5a80e7b7cf262f44c8655fd9b4ff93d9": "4a1bb0ef6a282f003c2154eab4c7e503",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19491c71fcd5a5bea44ed6a308993707",
".git/logs/refs/heads/main": "86d6428caca2b7f0c7227fe4ec6d2022",
".git/logs/refs/heads/prod-build": "974c3fa0b1c95b373e5e4612f8cbb426",
".git/logs/refs/remotes/origin/main": "f7927e788142eb011f86fd384a599fb4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5ebbc409030d51c2814b191f0d3a396a",
".git/refs/heads/prod-build": "f496316592f7f3c360ccf11c7bc1f3a0",
".git/refs/remotes/origin/main": "5ebbc409030d51c2814b191f0d3a396a",
".git/index": "21727c43c8541ac05c36e2c6a79c2769",
".git/COMMIT_EDITMSG": "b57ae88c9acbb530f2d7923ff2182a75",
".git/FETCH_HEAD": "9e839a053395e48c5c2088880a630708",
"assets/AssetManifest.json": "60ba0161d1eebb410d16eeb7a888ead5",
"assets/NOTICES": "c882b09736773a2af5a0045b33d187de",
"assets/FontManifest.json": "e5ea468750ba67e543aa3c5ef5b2a96f",
"assets/AssetManifest.bin.json": "faad70c79bfa7ce93f01bb5a47a661a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/qms_core/assets/images/qube.png": "34bf11c0e3fee72c0d47533d62688b95",
"assets/packages/qms_core/assets/icons/lock.png": "fc703a4a662027f76ff2e86edc2843ac",
"assets/packages/qms_core/assets/icons/ph_flag_circular.png": "d87f8ef7afca21d1a2d6abed4082ba84",
"assets/packages/qms_core/assets/icons/person.png": "77f9b215e09eeba540eddcb427c7a58b",
"assets/packages/qms_core/assets/icons/qube_text.png": "cc43a831c46fc4077f75a301a8390006",
"assets/packages/qms_core/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "835c13ef63687a8a36356b178b9a5c24",
"assets/fonts/MaterialIcons-Regular.otf": "ada5d478489dd8f71c1ceda130a4cb57",
"assets/assets/icons/calendar.png": "7f26681e66ad3f138606cb9fb7613854",
"assets/assets/waybill/qube_icon.png": "d0dc2445ca43d7a15fba38b90ddc5459",
"assets/assets/lottie/comforter-gray.json": "2f3cbb637f7152d1d4fc2ce8a25cd44a",
"assets/assets/lottie/dry-clean.json": "596390ff9daf182c21184c56a6052f75",
"assets/assets/lottie/shoe-care.json": "92d4cc2b78e645bdf401bcb67ff4c91a",
"assets/assets/lottie/comforter.json": "6b734d824ae9057955e183833822f568",
"assets/assets/lottie/shoe-care-red.json": "5fc0167689d98299d564f7114699369c",
"assets/assets/lottie/pet-care.json": "41ae170fcc48a03817b0c37ad3167fef",
"assets/assets/lottie/washed.json": "165ada6e0873d63f966878eaa580459c",
"assets/assets/lottie/bag-care.json": "bd8b7ad5e57b5d9d5eefae0120d61d8c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
