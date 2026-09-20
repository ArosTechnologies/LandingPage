# Sistema de Diseño - Landing Page AROS

Este documento detalla los principios de diseño, colores, tipografía, espaciado y comportamientos interactivos (hovers, animaciones) utilizados en la Landing Page de AROS. Puede ser utilizado como base y referencia para desarrollar futuras interfaces, como páginas para instaladores, manteniendo la consistencia de marca y experiencia de usuario.

---

## 1. Paleta de Colores (Light Theme)

El diseño utiliza un esquema de colores claros con alto contraste y acentos vibrantes, transmitiendo un estilo profesional, limpio y técnico.

### Colores Base y Fondos
- **Fondo Primario (`--bg-primary`)**: `#ffffff` (Blanco puro). Utilizado como fondo base de toda la aplicación y contenedores principales.
- **Fondo Secundario (`--bg-secondary`)**: `#f8f9fa` (Gris súper claro). Utilizado para separar y diferenciar visualmente secciones alternas de la página.
- **Fondo Terciario (`--bg-tertiary`)**: `#e9ecef` (Gris claro). Usado para detalles de fondo o estados pasivos en componentes secundarios.

### Colores de Texto
- **Texto Primario (`--text-primary`)**: `#111111` (Casi negro). Para títulos, subtítulos y textos con máximo requerimiento de lectura.
- **Texto Secundario (`--text-secondary`)**: `#555555` (Gris oscuro). Utilizado para descripciones secundarias, detalles y metadatos.

### Colores de Acento (Marca)
- **Acento Principal (`--accent-orange`)**: `#ff4500` (Naranja AROS). El color de la marca, usado para captar atención en botones principales, íconos y textos destacados.
- **Hover de Acento (`--accent-orange-hover`)**: `#e63e00` (Naranja oscuro). Usado al pasar el ratón por los botones principales.
- **Brillo Naranja (`--accent-orange-glow`)**: `rgba(255, 69, 0, 0.2)`. Usado como una sombra sutil (drop-shadow) en elementos importantes que usan el color de acento.

### Efecto Glassmorphism (Translúcido)
- **Fondo Glass (`--glass-bg`)**: `rgba(255, 255, 255, 0.9)`.
- **Borde Glass (`--glass-border`)**: `rgba(0, 0, 0, 0.1)`.
Usado en componentes que requieren superposición sobre el fondo sin ocultarlo del todo, como menús de navegación estáticos.

---

## 2. Tipografía

Se combinan dos tipografías sin serifa de Google Fonts para dar un toque moderno y altamente legible.

- **Encabezados (Headings - h1 al h6)**: `Outfit`
  - Utilizada para títulos y llamados a la acción grandes.
  - Pesos disponibles: 400 (Normal), 500 (Medium), 700 (Bold), 800 (ExtraBold).
- **Cuerpo de Texto (Body)**: `Inter`
  - Utilizada para párrafos, botones y UI general.
  - Pesos disponibles: 300 (Light), 400 (Normal), 500 (Medium), 600 (SemiBold).
- **Clase `.text-gradient`**: Crea un gradiente lineal a 135 grados de color `#111111` a `#ff4500`, que se recorta al texto. Ideal para destacar la palabra clave dentro de un título (ej: "Sistemas para *Instaladores*").

---

## 3. Filosofía Visual: Bordes y Formas

La Landing Page de AROS utiliza un estilo **técnico, estructural y sólido (Hard Edges)**, diferenciándose de las tendencias "soft" comunes en internet:
- **Cero Redondez (`border-radius: 0`)**: Las esquinas de los botones, tarjetas (cards), paneles y modales son en 90 grados exactos.
- **Paneles Glass (`.glass-panel`)**: Las cajas de contenido destacadas usan el fondo blanco, bordes translúcidos en 90 grados y una sombra muy sutil (`0 4px 6px rgba(0,0,0,0.05)`).

---

## 4. Botones, Hovers e Interacciones

Las interacciones están diseñadas para sentirse ágiles, receptivas y fluidas. Los botones principales evocan un "botón de encendido" de maquinaria por sus acabados rectos y brillos.

### Tiempos de Transición Base
- `--transition-fast`: `0.2s ease` (Para cambios de color al vuelo, enlaces simples).
- `--transition-normal`: `0.3s ease` (Para botones y desplazamientos).
- `--transition-slow`: `0.5s cubic-bezier` (Para animaciones de entrada en la página).

### Botón Primario (`.btn-primary`)
- **Estado Normal**: Fondo color Naranja AROS, texto blanco en fuente `Outfit` gruesa, bordes rectos. Tiene una sombra anaranjada base: `box-shadow: 0 4px 15px rgba(255, 69, 0, 0.2)`.
- **Efecto Hover (Al pasar el ratón)**: 
  - El color se oscurece (`#e63e00`).
  - El botón se eleva físicamente en la pantalla: `transform: translateY(-2px)`.
  - La sombra naranja proyectada se intensifica y expande dando un efecto de que el botón se ha "despegado" más del fondo: `box-shadow: 0 6px 20px rgba(255, 69, 0, 0.2)`.

### Botón Secundario (`.btn-secondary`)
- **Estado Normal**: Fondo transparente, texto y contorno (borde sólido) en color negro primario.
- **Efecto Hover**:
  - El fondo se rellena con el gris secundario (`#f8f9fa`).
  - También se eleva en la pantalla: `transform: translateY(-2px)`.

### Enlaces Generales
- Todos los hipervínculos (`<a>`) cambian su color suavemente utilizando `--transition-fast`.

---

## 5. Sistema de Espaciado (Layout)

El diseño es responsivo (se adapta a móviles) utilizando un sistema de espaciado mediante variables que cambian dinámicamente según el tamaño de la pantalla.

- `--space-xs` (8px): Distancias mínimas (entre ícono y texto).
- `--space-sm` (16px): Padding interior estándar de botones y inputs.
- `--space-md` (32px): Separación entre elementos medianos o columnas (en móvil se reduce a 24px).
- `--space-lg` (64px): Separación entre bloques de contenido importantes (en móvil se reduce a 40px).
- `--space-xl` (128px): Separación masiva (ej. margen superior del Hero de la página. En móvil se reduce a 64px).

### Contenedor y Rejilla
- **Contenedor Principal (`.container`)**: Centra el contenido en pantalla limitando el ancho máximo a `1400px` con padding lateral, ideal para monitores UltraWide.
- **Grillas (`.grid-2`, `.grid-3`)**: Utilizan CSS Grid puro para distribuir elementos (ej. características del servicio). En móvil todo forma 1 sola columna y automáticamente cambian a 2 o 3 columnas al aumentar el tamaño de la pantalla.

---

## 6. Animaciones

- **Fade In (`.animate-fade-in`)**: Animación estandarizada que hace aparecer a un componente oculto desde abajo (se traslada de `20px` hacia `0`) al mismo tiempo que su opacidad aumenta de 0 a 1. Toma un total de 0.8s en completarse.
- **Cascadas (Delays)**: Para evitar que todo el contenido aparezca de golpe y sature al usuario, se aplican clases `.delay-100`, `.delay-200` o `.delay-300` a elementos consecutivos, creando un efecto de aparición encadenado muy moderno.
