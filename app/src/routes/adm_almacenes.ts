import { Router } from "express";
import { treeNode } from "../controllers/adm_Almacenes/treenode"
import { NvoRegistro, EditRegistro, DelRegistro, todo, todosPorNivel } from "../controllers/adm_Almacenes/almacenes.controller";
import {NvoPuesto, EditPuesto, DelPuesto } from "../controllers/adm_Almacenes/puesto.controller";


import { asignaPuesto } from "../controllers/adm_puesto_producto/admPuestoProducto.controllers";
import { estructuraFt } from "../controllers/adm_puesto_producto/estructuraFT.controllers"

const router = Router();


//adminsitracion tabla almacenes
router.get('/api/estructura', treeNode);


//router.get('/api/estructura', arbol);
router.get('/api/almacenes', todo);
router.get('/api/almacenes/:nivel', todosPorNivel);
router.post('/api/almacenes', NvoRegistro);
router.put('/api/almacenes/:idAlmacenes', EditRegistro);
router.delete('/api/almacenes/:idAlmacenes', DelRegistro);


//adminisracion tabla puestos
router.post('/api/puesto', NvoPuesto);
router.put('/api/puesto/:idAdmPuesto', EditPuesto);
router.delete('/api/puesto/:idAdmPuesto', DelPuesto);


//asignacion de puestos a productos
router.put('/api/puestoproducto/:idAdmPuesto', asignaPuesto);
router.get('/api/tree',estructuraFt );



export default router;