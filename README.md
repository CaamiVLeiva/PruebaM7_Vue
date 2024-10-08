
# Proyecto Vue.js con Firebase Hosting

Este proyecto es una aplicación web desarrollada con **Vue.js** y **Vite**, que incluye integración con **Firebase Hosting** para despliegue en producción. Se han implementado varias funcionalidades y buenas prácticas, como el manejo de datos sensibles a través de un archivo `.env`, uso de componentes modulares en Vue.js, y pruebas unitarias con Jest.

## Características

- **Firebase Hosting**: La aplicación está desplegada en Firebase Hosting, aprovechando su rendimiento y facilidad de configuración.
- **Vite**: Para la construcción rápida del proyecto y una experiencia de desarrollo ágil.
- **Componentes Vue.js**: Estructura modular y reutilizable mediante componentes.
- **Pruebas unitarias**: Implementación de pruebas utilizando Jest para asegurar la funcionalidad del proyecto.
- **Manejo de variables de entorno**: Se utiliza un archivo `.env` para mantener segura la información sensible, como las credenciales de Firebase.

## Instalación

1. Clona el repositorio:
    
    ```bash
    git clone <https://github.com/CaamiVLeiva/PruebaM7_Vue.git>
    
    ```
    
2. Instala las dependencias:
    
    ```bash
    npm install
    
    ```
    
3. Configura el archivo `.env` con tus variables de entorno:
    
    ```bash
    VITE_FIREBASE_API_KEY=tu-api-key
    VITE_FIREBASE_AUTH_DOMAIN=tu-auth-domain
    
    ```
    
4. Ejecuta el proyecto en modo desarrollo:
    
    ```bash
    npm run dev
    
    ```
    

## Estructura del proyecto

```
└── 📁Prueba_M7
    └── 📁public
        └── favicon.ico
        └── index.html
    └── 📁src
        └── 📁__test__
            └── 📁unit
                └── ComunicacionTest.spec.js
                └── CounterStore.spec.js
                └── RouterTest.spec.js
        └── 📁assets
            └── base.css
            └── logo.svg
            └── main.css
        └── 📁components
            └── 📁icons
            └── ChildComponent.vue
            └── CounterComponent.vue
            └── HelloWorld.vue
            └── ParentComponent.vue
            └── TheWelcome.vue
            └── WelcomeItem.vue
        └── 📁router
            └── index.js
        └── 📁stores
            └── counter.js
        └── 📁views
            └── AboutView.vue
            └── ComunicacionView.vue
            └── CounterView.vue
            └── HomeView.vue
        └── App.vue
        └── main.js

```

## Despliegue

Para generar el build de producción y desplegarlo en Firebase Hosting:

1. Genera el build:
    
    ```bash
    npm run build
    
    ```
    
2. Despliega a Firebase:
    
    ```bash
    firebase deploy --only hosting
    
    ```
    

## Enlace del hosting

Puedes acceder a la versión en producción de la aplicación en el siguiente enlace: [Enlace del Hosting](https://prueba-m7-17ed7.web.app/)

## Tecnologías utilizadas

- **Vue.js 3**
- **Vite**
- **Firebase Hosting**
- **Jest** (para pruebas unitarias)


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

# PruebaM7_Vue
