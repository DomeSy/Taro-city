import * as d from '../../declarations';
export declare function generateServiceWorker(config: d.Config, buildCtx: d.BuildCtx, workbox: d.Workbox, outputTarget: d.OutputTargetWww): Promise<void | [void, void]>;
export declare function hasServiceWorkerChanges(config: d.Config, buildCtx: d.BuildCtx): boolean;
export declare const INDEX_ORG = "index-org.html";
export declare function getRegisterSW(swUrl: string): string;
export declare const UNREGISTER_SW = "\nif ('serviceWorker' in navigator && location.protocol !== 'file:') {\n  // auto-unregister service worker during dev mode\n  navigator.serviceWorker.getRegistration().then(function(registration) {\n    if (registration) {\n      registration.unregister().then(function() { location.reload(true) });\n    }\n  });\n}\n";
export declare const SELF_UNREGISTER_SW = "\nself.addEventListener('install', function(e) {\n  self.skipWaiting();\n});\n\nself.addEventListener('activate', function(e) {\n  self.registration.unregister()\n    .then(function() {\n      return self.clients.matchAll();\n    })\n    .then(function(clients) {\n      clients.forEach(client => client.navigate(client.url))\n    });\n});\n";
