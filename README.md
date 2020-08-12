## Descripcición del modulo
Modulo para implementar el backend en la administración de Almacenes.

## Compliar
npm run build

## Ejecutar
npm run start

## Mostrar la data Estructurada
- get "/api/estructura"

## Trae la Data de la tabla Almacenes
- get '/api/almacenes'

## Muestra los nodos por nivel
- los niveles van del 0 al 5

- get '/api/almacenes/:nivel'

## Operaciones básica de la tabla Almacenes
- post '/api/almacenes'
- put '/api/almacenes/:idAlmacenes'
- delete '/api/almacenes/:idAlmacenes'

## Operaciones básicas para la  Adminstración de la tabla adm_almacen_puesto
- post '/api/puesto'
- put '/api/puesto/:idAdmPuesto'
- delete '/api/puesto/:idAdmPuesto'

