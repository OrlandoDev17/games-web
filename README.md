# Games Web

Una aplicación web moderna para explorar y guardar tus videojuegos favoritos. La aplicación permite a los usuarios registrarse, iniciar sesión, explorar un catálogo de juegos y guardar sus favoritos.

## 🚀 Cómo funciona

### 1. Autenticación

- Los usuarios pueden registrarse con un nombre de usuario y contraseña
- Iniciar sesión con credenciales válidas
- La sesión se mantiene activa mientras el navegador esté abierto

### 2. Catálogo de Juegos

- Explora una amplia variedad de videojuegos
- Filtra juegos por género y plataforma
- Interfaz intuitiva y fácil de usar

### 3. Favoritos

- Guarda tus juegos favoritos para acceder rápidamente a ellos
- Visualiza todos tus juegos guardados en una sola vista
- Interfaz atractiva con iconos intuitivos

## 🏗️ Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
│   ├── Navbar.jsx  # Barra de navegación
│   ├── Footer.jsx  # Pie de página
│   ├── Filters.jsx # Filtros para el catálogo
│   └── CardsContainer.jsx # Contenedor de tarjetas de juegos
├── pages/         # Páginas de la aplicación
│   ├── Auth.jsx   # Página de autenticación (login/registro)
│   ├── Catalogue.jsx # Página del catálogo de juegos
│   └── Favorites.jsx # Página de juegos favoritos
├── styles/        # Estilos CSS
│   ├── Auth.css
│   ├── Catalogue.css
│   ├── FavoritePage.css
│   └── Index.css
└── data/          # Datos de la aplicación
    └── juegos.json # Base de datos de juegos
```

## 🛠️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/games-web.git
   cd games-web
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en:
   ```
   http://localhost:5173
   ```

## 🛠️ Tecnologías Utilizadas

- React 18
- React Router DOM
- Vite
- CSS3
- HTML5

## 📝 Notas

- La aplicación utiliza el estado local para la autenticación (no hay backend)
- Los datos de los juegos están almacenados en un archivo JSON local
- Diseño responsivo para diferentes tamaños de pantalla

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
