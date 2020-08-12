##Administración de Almacenes

### Descripcición del modulo
Modulo para implementar el backend en la administración de Almacenes.

## Compliar
npm run build

## Ejecutar
npm run start

## Mostrar la data Estructurada
get("/api/estructura")

## Trae la Data de la tabla Almacenes
get('/api/almacenes', todo)

## Muestra los nodos por nivel
(los niveles van del 0 al 5);
get('/api/almacenes/:nivel', todosPorNivel)

## Operaciones básica de la tabla Almacenes
post('/api/almacenes', NvoRegistro);
put('/api/almacenes/:idAlmacenes', EditRegistro);
delete('/api/almacenes/:idAlmacenes', DelRegistro);

## Operaciones básicas para la  Adminstración de la tabla adm_almacen_puesto
router.post('/api/puesto', NvoPuesto);
router.put('/api/puesto/:idAdmPuesto', EditPuesto);
router.delete('/api/puesto/:idAdmPuesto', DelPuesto);

