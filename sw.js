// Service worker mínimo: solo sirve para mostrar avisos y abrir la app al
// tocarlos. No guarda nada en caché (así siempre cargan la versión más nueva).
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("notificationclick", function(e){
  e.notification.close();
  var tab = (e.notification.data && e.notification.data.tab) || "inicio";
  e.waitUntil(self.clients.matchAll({type:"window", includeUncontrolled:true}).then(function(list){
    for(var i=0;i<list.length;i++){
      var c=list[i];
      if("focus" in c){ c.postMessage({tab:tab}); return c.focus(); }
    }
    if(self.clients.openWindow) return self.clients.openWindow("./index.html");
  }));
});
