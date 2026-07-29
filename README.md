# Beyond the Smile — sitio web

## Qué hay en esta carpeta
- `index.html` → Inicio
- `conocenos.html` → Equipo (foto grupal + parejas)
- `salud-periodontal.html` → Página completa con el contenido que enviaste
- `tecnicas-cepillado.html`, `factores-de-riesgo.html`, `enjuagues-bucales.html` → estructura lista, marcadas como "contenido en construcción" — reemplázalas cuando tengas el texto de cada tema (usa `salud-periodontal.html` como modelo de qué bloques usar: comparativas, chips de iconos, callouts, etc.)
- `contacto.html` → formulario listo para Netlify Forms (gratis, sin backend)
- `styles.css` / `script.js` → compartidos por todas las páginas (colores, animaciones, menú móvil)
- `assets/logo/` → tu logo real
- `assets/icons/` → los 4 íconos circulares que enviaste (salud periodontal, técnicas de cepillado, factores de riesgo, enjuagues bucales)
- `assets/team/` → foto grupal + las 2 fotos de pareja que enviaste
- `build.py` → el script que generó todo (solo se necesita si quieres regenerar el sitio completo)

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
Igual que en el proyecto anterior: abre cualquier `.html` con un editor de texto y edita el texto directamente. Los colores están centralizados en `styles.css`, en la sección `:root` al inicio (ya configurados con tu paleta: Sage Drift, Warm Parchment, Ivory Stillness, Dusty Petal, Stone Whisper).

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

## Cómo publicarlo en Netlify
Igual que antes: arrastra la carpeta `beyond-the-smile` completa a [netlify.com](https://www.netlify.com) → Deploy manually. Todas las páginas están enlazadas con rutas relativas, así que la navegación funciona automáticamente.
