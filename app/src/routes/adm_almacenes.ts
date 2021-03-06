import { todosAlmacenesArbol } from './../controllers/adm_Almacenes/arbolAdmin.controllers';
import { Router } from "express";
import { NvoRegistro, EditRegistro, DelRegistro, todo } from "../controllers/adm_Almacenes/almacenes.controller";
import { asignaPuesto, puestos } from "../controllers/adm_puesto_producto/admPuestoProducto.controllers";
import { estructuraFT } from "../controllers/adm_puesto_producto/estructuraFT.controllers";

const router = Router();

router.get('/api/estructura', todosAlmacenesArbol);
router.get('/api/estructura/:idGerencia', todosAlmacenesArbol);
router.get('/api/almacenes', todo);
router.get('/api/almacenes/:idGerencia', todo);
router.post('/api/almacenes', NvoRegistro);
router.put('/api/almacenes/:idAlmacenes', EditRegistro);
router.delete('/api/almacenes/:idAlmacenes', DelRegistro);


//asignacion de puestos a productos
router.put('/api/puestoproducto/:idAlmacenes', asignaPuesto);
router.get('/api/tree', estructuraFT);
router.get('/api/puesto', puestos);



export default router;