# NOVA IA — Versión en React

Migración del sitio NOVA IA (hecho antes en HTML y CSS) a componentes de **React**, usando **Vite** para crear y ejecutar el proyecto.

## Estructura

```text
nova-ia-react/
├── index.html            (tiene el <div id="root"> donde se dibuja React)
├── package.json          (dependencias y comandos del proyecto)
├── vite.config.js        (configuración de Vite)
├── public/
│   └── Activos/          (imágenes del sitio)
└── src/
    ├── main.jsx          (punto de entrada: dibuja App dentro de #root)
    ├── App.jsx           (listas de datos y armado de la página)
    ├── css/
    │   └── style.css     (estilos del proyecto original en HTML)
    └── components/
        ├── Layout.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Formulario.jsx
        ├── CampoFormulario.jsx
        ├── Boton.jsx
        ├── Card.jsx
        ├── Galeria.jsx
        ├── GaleriaItem.jsx
        ├── Footer.jsx
        └── RedSocial.jsx
```

## Componentes

- **Contenedor:** arma una sección de la página y recibe listas (arrays) que recorre con `.map()`, o agrupa a otros componentes.
- **Individual:** muestra un solo elemento (una card, un botón, un campo) con datos simples que recibe por props.

| Componente | Tipo | Props |
|---|---|---|
| `Layout` | Contenedor | `marca`, `opcionesMenu`, `redesSociales`, `copyright`, `children` |
| `Navbar` | Contenedor | `marca` (string), `opciones` (array de `{ nombre, url }`) |
| `Hero` | Contenedor | `imagenFondo` (string), `servicios` (array), `cards` (array) |
| `Formulario` | Contenedor | `servicios` (array de `{ valor, nombre }`) |
| `Galeria` | Contenedor | `items` (array de `{ imagen, titulo }`) |
| `Footer` | Contenedor | `redes` (array), `copyright` (string) |
| `Card` | Individual | `imagen` (string), `texto` (string) |
| `GaleriaItem` | Individual | `imagen` (string), `titulo` (string) |
| `CampoFormulario` | Individual | `id`, `etiqueta`, `tipo`, `placeholder` (strings) |
| `Boton` | Individual | `clase`, `tipo`, `texto` (strings) |
| `RedSocial` | Individual | `icono`, `url`, `titulo`, `subtitulo` (strings) |

Las listas de datos (menú, servicios, cards, galería y redes sociales) están en `App.jsx` y llegan a los componentes por **props**.
Los textos fijos del formulario (etiquetas y placeholders) se pasan como props a `CampoFormulario` y `Boton` desde `Formulario.jsx`.

## Cómo funciona

1. `index.html` tiene un `<div id="root">` vacío.
2. `main.jsx` busca ese div y dibuja adentro el componente `App`.
3. `App.jsx` guarda las listas de datos (menú, servicios, cards, galería y redes) y arma la página con `Layout`, `Hero` y `Galeria`.
4. Cada componente recibe sus datos por **props**. Los contenedores recorren las listas con `.map()` y, por cada elemento, dibujan un componente individual. Por ejemplo:
   `App` (lista `itemsGaleria`) → `Galeria` (recibe `items` y hace `.map()`) → `GaleriaItem` (muestra una imagen y su título).
5. En cada `.map()` se usa la prop `key` con un valor único (título, texto o nombre), que es lo que React pide para identificar cada elemento de una lista.
6. `Layout` recibe a `Hero` y `Galeria` como `children` (todo lo que se escribe entre `<Layout>` y `</Layout>`) y los ubica entre `Navbar` y `Footer`.

## De HTML a componentes

| Parte del HTML original | Componente en React |
|---|---|
| `<header>` con la marca y el menú | `Navbar` |
| `<section class="hero">` | `Hero` |
| `<form class="form_items">` | `Formulario` (usa `CampoFormulario` y `Boton`) |
| cada `<article class="card">` | `Card` |
| `<section class="galeria-cards">` | `Galeria` |
| cada `<div class="galeria-item">` | `GaleriaItem` |
| `<footer>` | `Footer` |
| cada `<div class="red-item">` | `RedSocial` |
| estructura general (header + main + footer) | `Layout` |

Al pasar a JSX se cambiaron `class` por `className` y `for` por `htmlFor`. Los estilos (`style.css`) son los mismos del proyecto original y se importan en `main.jsx`.
Los links del menú ahora llevan a cada sección por su `id` (`#inicio`, `#servicios`, `#portafolio`, `#contacto`).

## Aclaraciones

- La empresa y los datos de contacto son ficticios.
- El formulario todavía no envía los datos a ningún lado: solo usa la validación de HTML (`required`, `type="email"`). Manejar el envío con JavaScript queda fuera de esta entrega.
