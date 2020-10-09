import { todosAlmacenesArbol } from './../controllers/adm_Almacenes/arbolAdmin.controllers';
import { Router } from "express";
import { NvoRegistro, EditRegistro, DelRegistro, todo, todosPorNivel } from "../controllers/adm_Almacenes/almacenes.controller";



import { asignaPuesto } from "../controllers/adm_puesto_producto/admPuestoProducto.controllers";
import { estructuraFT } from "../controllers/adm_puesto_producto/estructuraFT.controllers";

const router = Router();


router.get('/api/estructura', todosAlmacenesArbol);

router.get('/api/almacenes', todo);
router.get('/api/almacenes/:nivel', todosPorNivel); // ruta en desuso, eliminar
router.post('/api/almacenes', NvoRegistro);
router.put('/api/almacenes/:idAlmacenes', EditRegistro);
router.delete('/api/almacenes/:idAlmacenes', DelRegistro);


//asignacion de puestos a productos
router.put('/api/puestoproducto/:idAlmacenes', asignaPuesto);
router.get('/api/tree', estructuraFT);



export default router;