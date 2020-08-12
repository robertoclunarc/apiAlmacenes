import { Router } from "express";
import { treeNode } from "../controllers/adm_Almacenes/treenode"
import { NvoRegistro, EditRegistro, DelRegistro, todo, todosPorNivel } from "../controllers/adm_Almacenes/almacenes.controller";
import {NvoPuesto, EditPuesto, DelPuesto } from "../controllers/adm_Almacenes/puesto.controller";
import { arbol }  from "../controllers/adm_Almacenes/arbol";

const router = Router();

router.get('/api/estructura', treeNode);
//router.get('/api/estructura', arbol);
router.get('/api/almacenes', todo);
router.get('/api/almacenes/:nivel', todosPorNivel);
router.post('/api/almacenes', NvoRegistro);
router.put('/api/almacenes/:idAlmacenes', EditRegistro);
router.delete('/api/almacenes/:idAlmacenes', DelRegistro);

router.post('/api/puesto', NvoPuesto);
router.put('/api/puesto/:idAdmPuesto', EditPuesto);
router.delete('/api/puesto/:idAdmPuesto', DelPuesto);

export default router;