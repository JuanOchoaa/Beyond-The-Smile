# Beyond the Smile — sitio web

## Estructura de carpetas
```
Beyond-The-Smile/
├── index.html              → Inicio (tiene que quedarse en la raíz para Netlify)
├── pages/
│   ├── conocenos.html      → Equipo (foto grupal + parejas)
│   ├── salud-periodontal.html → Página completa con el contenido que enviaste
│   ├── tecnicas-cepillado.html   → "contenido en construcción"
│   ├── factores-de-riesgo.html   → "contenido en construcción"
│   ├── enjuagues-bucales.html    → "contenido en construcción"
│   └── contacto.html       → formulario listo para Netlify Forms (gratis, sin backend)
└── assets/
    ├── css/styles.css      → estilos compartidos (colores, animaciones, menú móvil)
    ├── js/script.js        → interacciones compartidas
    ├── logo/               → tu logo real
    ├── icons/              → los 4 íconos circulares (salud periodontal, técnicas de cepillado, factores de riesgo, enjuagues bucales)
    └── team/                → foto grupal + las 2 fotos de pareja
```
Las 3 páginas de tema pendientes están marcadas como "contenido en construcción" — reemplázalas cuando tengas el texto de cada tema (usa `pages/salud-periodontal.html` como modelo de qué bloques usar: comparativas, chips de iconos, callouts, etc.)

## Pendientes / marcado con [corchetes]
- `[Universidad]`, `[Facultad]`, `[Sponsor]` en Conócenos y en el footer
- Texto de presentación del equipo en `conocenos.html` (dejé el espacio reservado tal como pediste)
- Contenido de las 3 páginas de tema restantes (Técnicas de cepillado, Factores de riesgo, Enjuagues bucales)
- Videos reales de YouTube (hay 3 espacios reservados en la página de Inicio)

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
