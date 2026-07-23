# Sistema PACS de AROS - Guía de Diseño

Esta guía establece los principios de diseño, colores, tipografía y componentes visuales para el sistema PACS de AROS, asegurando consistencia con la identidad visual de la marca actual.

## 1. Paleta de Colores

El sistema PACS utiliza un tema claro por defecto, priorizando el alto contraste para la legibilidad médica y la fatiga visual, junto con acentos vibrantes que denotan la marca AROS.

### Colores de Fondo
- **Fondo Primario (`--bg-primary`)**: `#ffffff` (Blanco puro, usado para fondos principales de la aplicación y el visor de imágenes cuando no está en modo oscuro).
- **Fondo Secundario (`--bg-secondary`)**: `#f8f9fa` (Gris muy claro, para separar secciones, barras laterales y listas de pacientes).
- **Fondo Terciario (`--bg-tertiary`)**: `#e9ecef` (Gris claro, para estados hover, fondos de inputs y paneles modales).

### Colores de Texto
- **Texto Primario (`--text-primary`)**: `#111111` (Casi negro, para encabezados y texto principal para máximo contraste).
- **Texto Secundario (`--text-secondary`)**: `#555555` (Gris oscuro, para subtítulos, etiquetas y metadatos secundarios).

### Color de Acento (Marca AROS)
- **Acento Naranja (`--accent-orange`)**: `#ff4500` (Naranja vibrante, usado para llamadas a la acción, botones principales, notificaciones e indicadores importantes).
- **Hover de Acento (`--accent-orange-hover`)**: `#e63e00` (Para interacciones y estados activos).
- **Brillo/Glow (`--accent-orange-glow`)**: `rgba(255, 69, 0, 0.2)` (Usado para sombras en botones principales y focos de entrada de texto).

### Elementos Glassmorphism
- **Fondo Glass (`--glass-bg`)**: `rgba(255, 255, 255, 0.9)` (Para barras de navegación pegajosas, overlays o menús flotantes sobre imágenes médicas).
- **Borde Glass (`--glass-border`)**: `rgba(0, 0, 0, 0.1)`

## 2. Tipografía

El sistema utiliza fuentes geométricas y sans-serif de Google Fonts, manteniendo un aspecto técnico, limpio y de alta legibilidad en pantallas de diagnóstico:

- **Encabezados (Headings)**: `Outfit`, sans-serif. 
  - Pesos: 400 (Regular), 500 (Medium), 700 (Bold), 800 (ExtraBold).
  - Uso: Títulos de estudios, nombres de pacientes, encabezados de módulos (Dashboard, Visor, Reportes).
- **Cuerpo de Texto (Body)**: `Inter`, sans-serif.
  - Pesos: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold).
  - Uso: Interfaz de usuario general, tablas de datos médicos, reportes, etiquetas DICOM, botones y menús de navegación.

## 3. Elementos Visuales y Componentes

El diseño del PACS de AROS se caracteriza por líneas definidas, estructura sólida y un enfoque utilitario, ideal para un entorno de software médico donde la precisión visual es crítica.

### Bordes y Formas (Hard Edges)
- **Cero Redondez**: A diferencia de las interfaces suaves y amigables al consumidor, AROS utiliza bordes duros (`border-radius: 0`) para tarjetas, botones, modales y paneles. Esto confiere un aspecto técnico, profesional y de alta precisión (estilo "industrial/médico").
- **Paneles Glass**: Uso moderado de `.glass-panel` con bordes sólidos sutiles y sombra ligera para separar componentes de la interfaz flotante sin usar bordes redondeados.

### Interacciones y Botones
- **Botón Primario**: Fondo naranja vibrante (`#ff4500`), texto blanco, sin bordes redondeados y una sutil sombra naranja proyectada (`box-shadow: 0 4px 15px rgba(255, 69, 0, 0.2)`). Al hacer hover, se eleva ligeramente (`transform: translateY(-2px)`).
- **Botón Secundario**: Fondo transparente, borde sólido del color del texto primario (`#111111`) y texto del mismo color. Al hacer hover, el fondo cambia al color secundario (`#f8f9fa`).

### Efectos y Animaciones
- **Transiciones**: Fluidas y rápidas (ej: `0.2s ease` para cambios de color, `0.3s ease` para transformaciones como botones y paneles). No debe haber retrasos que ralenticen el flujo de trabajo del especialista.
- **Fade Ins (`.animate-fade-in`)**: Animaciones sutiles de aparición para listas de estudios o reportes al cargar la vista.
- **Gradientes de Texto (`.text-gradient`)**: Transición de `#111111` a `#ff4500` reservada exclusivamente para destacar mensajes críticos, nombres de módulos del sistema o estados importantes, atrayendo la atención del usuario.

## 4. Espaciado y Layout

El sistema se basa en un diseño tipo rejilla (CSS Grid), optimizado para estaciones de trabajo médicas multiconguración y pantallas de alta resolución.

### Sistema de Espaciado (Escala Modular)
- `xs` (0.5rem / 8px): Para espaciado muy ajustado entre un ícono y texto, o en celdas de tablas de datos compactas.
- `sm` (1rem / 16px): Márgenes internos (padding) predeterminados de botones, inputs de formularios y paneles de herramientas.
- `md` (2rem / 32px): Separación estándar entre bloques de contenido, secciones de la interfaz y columnas de la rejilla (`gap`).
- `lg` (4rem / 64px): Separación de secciones principales en pantallas completas.
- `xl` (8rem / 128px): Espaciados amplios (principalmente para vistas de login o landing).

### Contenedores
- Diseño predominantemente **fluido** para el Visor (100% de la pantalla) y un ancho máximo delimitado (ej: `1400px` usando la clase `.container`) para vistas administrativas, paneles de control y listas de trabajo (Worklists), centrado horizontalmente (`margin: 0 auto`).
