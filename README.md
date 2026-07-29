# Beyond the Smile — sitio web

## Estructura de carpetas
```
Beyond-The-Smile/
├── index.html              → Inicio (tiene que quedarse en la raíz para Netlify)
├── pages/
│   ├── conocenos.html      → Equipo (foto grupal + parejas + 2 filas pendientes)
│   ├── salud-periodontal.html → Contenido completo
│   ├── tecnicas-cepillado.html   → Contenido completo
│   ├── factores-de-riesgo.html   → Contenido completo
│   ├── enjuagues-bucales.html    → Contenido completo
│   └── contacto.html       → formulario listo para Netlify Forms (gratis, sin backend)
└── assets/
    ├── css/styles.css      → estilos compartidos (colores, animaciones, menú móvil)
    ├── js/script.js        → interacciones compartidas
    ├── logo/               → tu logo real
    ├── icons/              → íconos e imágenes propias de cada tema
    └── team/                → foto grupal + las 2 fotos de pareja
```
Las 4 páginas de tema ya tienen contenido completo (comparativas, chips de iconos, callouts, pasos numerados, tarjetas de producto, etc.)

## Pendientes / marcado con [corchetes]
- Texto de presentación del equipo en `conocenos.html` (dejé el espacio reservado tal como pediste)
- Foto y nombres de los 2 dúos restantes en "Integrantes" (`conocenos.html`)
- Videos reales de YouTube (hay varios espacios `[Video pendiente]` / "Video próximamente" repartidos entre Inicio y las páginas de tema)

## Animaciones incluidas
- Revelado de tarjetas y bloques al hacer scroll (con retraso escalonado entre elementos)
- Números animados (ej. el "40%" cuenta desde 0 al entrar en pantalla)
- Formas circulares decorativas flotando de fondo en los heros
- Hover con elevación y sombra en tarjetas, íconos girando levemente, insignia circular del hero rotando sola
- Header que gana sombra al hacer scroll
- Todo respeta `prefers-reduced-motion` (se desactiva automáticamente para personas sensibles al movimiento)

## Cómo editar contenido
Abre cualquier `.html` (en la raíz o dentro de `pages/`) con un editor de texto y edita el texto directamente. Los colores están centralizados en `assets/css/styles.css`, en la sección `:root` al inicio (ya configurados con tu paleta: Sage Drift, Warm Parchment, Ivory Stillness, Dusty Petal, Stone Whisper).

### Reemplazar un video placeholder por uno real de YouTube
Busca este bloque en `index.html` y reemplázalo por el código "insertar" de YouTube:
```html
<div class="video-placeholder">...</div>
```
por:
```html
<iframe width="100%" style="aspect-ratio:16/9; border-radius:20px; border:none;"
  src="https://www.youtube.com/embed/TU_ID_DE_VIDEO" allowfullscreen></iframe>
```

## Cómo publicarlo
El repo está conectado a GitHub y desplegado en Netlify vía Git — cada `git push` a `main` republica el sitio automáticamente. No hace falta arrastrar carpetas a Netlify.
