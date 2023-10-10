'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "c5fd648bc6d5153110da00f144583e43",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f07b7cbf5fab3d2b8b0fe3ba279ff9d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "035dff7c24c7e1527696a55dc0b2cedb",
".git/logs/refs/heads/main": "a2171255dcb6aaabc97da9488d9bc7b6",
".git/logs/refs/remotes/origin/main": "3eb5131b486c5731881f09d33aae6205",
".git/objects/05/f95ab3c2d788153e525ce923b51c6527d2eb53": "323b37850576e5165294025e93ec72f9",
".git/objects/0a/82ab76479489f5a5eae51c320d729c2ae6909f": "75d5978c2e39d0718cda093e32ed86b0",
".git/objects/19/7aae87637b2dbf334d33028ca4a5f0a91117bd": "ceaa8672be1745a8c37da7bc0cbaec51",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/20/cc2d858a1bd6d3b852dc9c8cf9f2d378236e60": "9e862cf02e3c3878d93cc5bfa9a064e8",
".git/objects/22/bbdc89a77f3a60596e85b8b3bc12c16238ee35": "b64350dbb5a7ff421fef0e75dad0eee0",
".git/objects/23/2f5d39032f27f4b3fca4e18dd73fc6b1595a01": "2cda2b24de309cc4654e7ceeb5252baa",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/34/7c29e2f1dbebe28783d3a82363569e36752fa5": "c023dbc4e3bbc7ac8b11d57afa98cbcb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/38/0495c76d8d17bea637268de067dbd5e5f0b30a": "1654b5475c211c1f004fdeb2ad9fe900",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3f/8b195e7925f0ef6a55a0410b14d88a7fa37113": "145fdf806d82a5aaba0c443fa2622fa3",
".git/objects/41/ccff03039334cd4ca646c0eea967fc24918380": "aac0fe30ac6fb2d6798f548dfb3ed6b0",
".git/objects/44/53bc690c4386f8c8ef8145487e54b5d182222b": "455bd50c805ce8e5fce7b408615c8762",
".git/objects/51/3b49a5683b9fae803eb2142a459b371aba5824": "7d69c35ce18b870a02db9e199ad0a14b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/ffe1cc1f6519c76b716c3daaf84c68485554d6": "7e9f7612af94fec4efc8c71cbf340495",
".git/objects/5a/b46cc9aff6f707125b4e47626f0f1350696dba": "6dee714995fad7e1e5a7354124bee5c7",
".git/objects/5a/e8d6e4a39b747299318b96283b09997255e52a": "8733913e0b5e5f432e3420c01a79132b",
".git/objects/5c/6961d2bde21a235ac073f3d6f978ad1fb0319c": "6cc4839e47ddab60d66ee01c7041f7b3",
".git/objects/65/8974e035a7ac0500b4d6ad1b96ed0615133d13": "d2e53c240438455902495eba2b359599",
".git/objects/6c/3076fe119c94b9f9a5eac0cb273cf13a9321fe": "d4926a0e46685f700647e50b189be82c",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/70/dab1ec31704aaae9d4016606c5cdc2b89d6754": "5f847e082387ce43b88bbf655acfd351",
".git/objects/75/397c292e1942991cc7569aeb941585e01d28e8": "da0e117d92e6dbff473b4029aecbb100",
".git/objects/78/edfa05821ff23e27e6f616c5eb23a1de0c85ef": "83040a95f8aa8907f3c9bba061ef3c2f",
".git/objects/82/7a76ef3ca12d73dabc206282b1b6cc975ea7ee": "a99225195a1531bc3dd01719cb349bf5",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/dcdde32b0f04a3e8169d69f8e9532f0be0bb5e": "e217a9ddc6c48f2b48d659bb5b45430c",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a3/07b92b76ed6d87edde2fc78712cb943500915b": "0b7dccca67bbde831d67e30a61f273a9",
".git/objects/ab/5802615caed0a03e7c0c934fa8cebd52b3a638": "e99598145b11dd360210e57d60a07738",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/05cf1a43a265a76d633f0288adbf2b595733b4": "e6b3549b6f7b504ed3543c0a35991555",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/dd65271bc3abe6358837388e894a61d41761a9": "d131090a6034908ae68b87ae7ae6e686",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/ca/a64789f000fb95700672b79a9da58c932b9fa4": "708bdad7cd43d8cfe7ba1ec36959c684",
".git/objects/cd/c41444c9399970279c761358f0e7df7b7f5b18": "6ae2d62b17fad38c38fe107ab283c630",
".git/objects/cf/81ffda93ca703197e7afbde352439429cdb268": "b87ba403428b5dd4a3129c30a7f11d53",
".git/objects/d0/f8f3d57bf5e32de2aeddac720aa683c6e03c23": "669774e386d84c1cdb2a53bdc67e37dd",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/3314bd7bdf4dc3a05c6999206a0425f39262fb": "4343bff239cd5bb1bb3e3ee6e9f7eb0f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/0d64b44bcf9fd0702854bfa948a3fde2ab8ff8": "e68ee2c18384bfa5c86293b57bf31001",
".git/objects/de/509734e4346ea45134376ab0cefe4ae4713574": "2f05e8b72c6ec67334822e50f4adf29d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/f70794d904fc826c1d650cb2cd101b6d227cc8": "89afe08bd74b6d0f3e53c3ed0f6bebc3",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/9aa12b3fa121baedc5e68c007b04d7ef60c96d": "37bc8372c34215cff3d6e62183f7b609",
".git/objects/fc/c86f32e5b8346e0f1d7053a8501619ca8bf7da": "4c1d0ff19d106965484f5376f9f974d6",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "09bb8a96b6e5c37b1dc750682d366a77",
".git/refs/remotes/origin/main": "09bb8a96b6e5c37b1dc750682d366a77",
"assets/AssetManifest.bin": "16d0a069dd914deac7b3ced25b92da60",
"assets/AssetManifest.json": "803f61b74cd078f86df2c1dea72357d0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "75a2abf322e64cda7cb3ff6fecd72228",
"assets/images/certificates/asli.png": "d0b40fb209cfc049487ff1e644fa4b97",
"assets/images/certificates/bdpj.png": "caf37c7d80524ca3af4f2159bd7498cd",
"assets/images/certificates/bdpw.png": "1a6a7844c69f52d823fdbdd53cc5e0e0",
"assets/images/certificates/bmafp.png": "75f3a46400f2e40be3d6559ff8f11649",
"assets/images/certificates/bmfep.png": "31f02ad180342fafc0dc91f8fb98ca7d",
"assets/images/certificates/dddt.png": "fe07f5edca6b3c6afe3d1e464990bec5",
"assets/images/certificates/fo.png": "73ed178eb2c3ca16e0070f261b3102d8",
"assets/images/certificates/its.png": "25b85aee77ad4b88dbef2f975827b020",
"assets/images/certificates/kit.png": "97a14b6ac2c67efc0e33be109fdb77a7",
"assets/images/certificates/mpdd.png": "cf58902b49b1325ae25e8bcac3f630d7",
"assets/images/certificates/mtcna.png": "b6b91691a8dc672682873eb5d0efcef4",
"assets/images/certificates/sbjk.png": "be7150ab805da2fa9643bd98e3ebcd97",
"assets/images/certificates/soa.png": "fc4e15d1e9fa176edc4c133ef1d98472",
"assets/images/profile-nobg-cropped.png": "94f9d544b4605d1d2c854a6d933d8511",
"assets/images/profile-nobg.png": "682e475c40fe12126fc10f17e5faaf01",
"assets/images/rhealth/logo.png": "8c39a586652ef3419d2bb0370f99ea27",
"assets/images/rsite/logo.png": "42ae74039dc44d6602e5d7e79cc59e75",
"assets/NOTICES": "0d9564e42336e3ae9bc1aa9868b92b23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5048718ed290bd07c9f0b97fec507a80",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac9372f57cb240b3f5c7b9cb84308d45",
"/": "ac9372f57cb240b3f5c7b9cb84308d45",
"main.dart.js": "4d1f9f98c9d137d0d1dd3bc1b5e9e53a",
"manifest.json": "82e3c9f9417b2ed478e9d8cd1ccb08f2",
"version.json": "067a0a76d92620d1609853117da487af"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
