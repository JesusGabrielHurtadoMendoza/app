# Solo Nosotros — ya casi está lista 🎉

Ya configuré todo tu proyecto de Firebase por ti (el "backend" gratis donde
se guardan las fotos, las respuestas, la música y los mensajes en vivo).
Solo te falta **un paso de 1 minuto** para tener tu link final.

## Lo que ya hice por ti (en tu proyecto `solo-nosotros-1b53b`)

- ✅ Activé el acceso anónimo (así ninguno de los dos tiene que registrarse).
- ✅ Creé la base de datos Firestore y le puse las reglas de seguridad
  correctas (solo alguien con el link puede leer/escribir).
- ✅ Creé la Realtime Database (la que hace posible "escribir en vivo") y
  también le puse sus reglas de seguridad.
- ✅ Registré la app web y ya dejé el archivo `firebase-config.js` de esta
  carpeta con tus datos reales — no tienes que tocarlo.

### Un cambio importante: las fotos

Cuando armé esto por primera vez, la idea era guardar las fotos en "Cloud
Storage" de Firebase. Pero Google cambió su política y **ahora Storage pide
una cuenta de facturación (tarjeta) incluso para quedarte dentro de lo
gratis**. Como la app tiene que ser 100% gratis y yo no puedo ni debo meter
una tarjeta por ti, cambié la manera en que se guardan las fotos:

- Ahora, cuando suben una foto, el navegador la achica y la comprime antes
  de guardarla (queda en buena calidad para verse en el celular, pero no es
  el archivo original en máxima resolución).
- Se guarda directo en Firestore, que sí es gratis siempre.
- Si en algún momento quieres fotos a máxima resolución, se puede activar
  Cloud Storage — pero eso sí requeriría que tú actives la facturación de
  Google Cloud con una tarjeta (aunque no te cobren si te quedas en lo
  gratis). Dime si en algún momento lo quieres y te explico cómo.

## Lo único que falta: subir la carpeta para tener tu link

1. Entra a **app.netlify.com/drop** desde tu computadora (no hace falta
   crear cuenta).
2. Arrastra esta carpeta completa (`solo-nosotros-app`) a esa página.
3. En unos segundos te da un link tipo `https://algo-al-azar.netlify.app`.
   Ese link ya es definitivo, gratis y no caduca.
4. Opcional: en el panel de ese sitio puedes darle "Change site name" para
   que el link diga algo como `https://solo-nosotros-gabo.netlify.app`.

Ese es el link que le mandas a tu pareja. Cualquiera de los dos lo puede
abrir desde Chrome (Android) o Safari (iPhone), y desde el navegador pueden
elegir "Agregar a pantalla de inicio" para que quede como un ícono de app
normal.

(Si prefieres Vercel en vez de Netlify: crea cuenta gratis en vercel.com,
"Add New… → Project", sube la carpeta, y Deploy. El resultado es el mismo:
un link `tuapp.vercel.app` gratis para siempre.)

## Cosas que debes saber

- **Es gratis mientras no se pasen de los límites gratuitos de Firebase**
  (para dos personas usando texto, fotos comprimidas y mensajes en vivo,
  están muy por debajo del límite gratuito).
- **Seguridad**: las reglas que dejé permiten leer/escribir a cualquiera que
  abra la app (con sesión anónima automática). Es como un "link privado":
  quien no tenga el link no puede entrar, pero si el link se filtra,
  cualquiera con él podría ver el contenido. Para un proyecto de pareja está
  bien.
- **Ambos celulares deben tener internet** para que lo "en vivo" funcione;
  sin internet, la app sigue guardando lo demás y se sincroniza en cuanto
  vuelva la conexión.
- Cada foto se guarda ya comprimida (hasta ~1300px de ancho); si alguien
  intenta subir una foto rarísima que no logra comprimirse lo suficiente, la
  app avisa y pide intentar con otra.
