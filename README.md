# Mercado Libre Frontend Test

Este repositorio contiene el código fuente para el test práctico de frontend para aspirantes a Mercado Libre.

## Tecnologías Utilizadas

- **Cliente**: React con TypeScript, HTML, CSS (Sass)
- **Servidor**: Node.js con Express
- **Pruebas Unitarias**: Jest, React Testing Library

## Estructura del Proyecto

La aplicación consta de tres componentes principales:

1. **Caja de Búsqueda**: Permite a los usuarios ingresar el producto a buscar.
2. **Resultado de la Búsqueda**: Muestra los productos encontrados.
3. **Detalle del Producto**: Proporciona información detallada de un producto específico.

## Rutas de la Aplicación

- **Caja de Búsqueda**: `/`
- **Resultados de la Búsqueda**: `/items?search=`
- **Detalle del Producto**: `/items/:id`

## Endpoints de la API

- **Búsqueda**: `/api/items?q=:query`
- **Detalle del Producto**: `/api/items/:id`

## Instrucciones de Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

```
git clone [URL_DEL_REPOSITORIO]
```

2. Instala las dependencias:

```
npm install
```

3. Inicia el servidor de desarrollo:

```
npm start
```

## Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```
npm test
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, envía un pull request o abre un issue para discutir los cambios propuestos.

## Autor

- **Nombre**: Sebastian Mosquera Valencia
