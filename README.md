# GTH Colombia — estructura base

Proyecto HTML/CSS/JavaScript del Home de GTH Colombia basado en el Modelo 2 seleccionado.

## Abrir en VS Code

1. Abre la carpeta `gth-colombia` completa en VS Code.
2. Abre `index.html`.
3. Recomendado: usa la extensión **Live Server** y selecciona **Open with Live Server**.

## Estructura

```text
gth-colombia/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   │   └── gth-cimco-logo.png
│   │   ├── home/
│   │   │   ├── hero-velero.jpg
│   │   │   └── metodologia.png
│   │   ├── equipo/
│   │   ├── actividades/
│   │   │   ├── team-building.jpg
│   │   │   ├── campo/
│   │   │   └── aula/
│   │   └── clientes/
│   ├── icons/
│   └── fonts/
└── pages/
    ├── quienes-somos.html
    ├── soluciones.html
    ├── experiencia.html
    ├── noticias.html
    ├── ofertas-laborales.html
    ├── galeria.html
    └── contacto.html
```

## Importante

- El Home está funcional y usa las rutas de esta estructura.
- Las páginas dentro de `pages/` son plantillas provisionales para el desarrollo posterior.
- Las imágenes actuales del Home son provisionales y pueden reemplazarse manteniendo los mismos nombres de archivo, evitando modificar HTML/CSS.
- Para imágenes referenciadas desde `index.html`, la ruta comienza con `assets/...`.
- Para imágenes referenciadas desde `css/styles.css`, la ruta comienza con `../assets/...`.
- Para páginas dentro de `pages/`, las rutas compartidas comienzan con `../`.
