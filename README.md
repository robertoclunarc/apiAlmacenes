## Descripcición del modulo
 Backend en la administración de Almacenes.
 Nodejs + express + typescript

## Compliar
npm run build

## Ejecutar
npm run start

## Administración Almacenes Sisglobal

### Muestra la data de la tabla Almacenes
Arma una estructura de lista adyacente con la data de la tabla almacenes.
- get "/api/estructura"

### Trae la Data de la tabla Almacenes
- get '/api/almacenes'

### Operaciones básica de la tabla Almacenes
- post '/api/almacenes'
- put '/api/almacenes/:idAlmacenes'
- delete '/api/almacenes/:idAlmacenes'

## Asiganción de puestos a productos
- put '/api/puestoproducto/:idAlmacenes'
###  Estructura de lista Adyacente para la Interfaz de la Ficha Técnica
- get '/api/tree