import { Request, Response } from "express";
import db from "../../database";
import TreeNode from "../../interface/treenode";
import Almacenes from "../../interface/almacen";
import { DataNode } from "../../interface/treenode";

const resultLimpio = (arbol: TreeNode[]) => {
    return arbol.map((dato) => {
        !dato.children && delete (dato.children);
        dato.children && resultLimpio(dato.children);
        if (!dato.children) {
            dato.leaf = true;
            dato.expanded = dato.data?.codigoProducto ? true : false;
            dato.collapsedIcon = "fas fa-check-circle";
            dato.expandedIcon = "fas fa-map-marker-alt";
        }
        return dato
    });
}

export const estructuraFT = async (req: Request, resp: Response) => {

    let consulta = "SELECT * FROM adm_almacenes ORDER BY idPadre, idAlmacenes";
    const todosBD: Almacenes[] = await db.querySelect(consulta);

    const padres: Almacenes[] = todosBD.filter((nodo) => nodo.idPadre == 0);
    const ramasYhojas: Almacenes[] = todosBD.filter((nodo) => nodo.idPadre != 0);

    let resultado: DataNode = { "data": [] };
    let newNodoTree: TreeNode = {};

    padres.forEach((raiz) => {
        newNodoTree.label = raiz.nombre;
        newNodoTree.expanded = false;
        newNodoTree.leaf = false;
        newNodoTree.data = raiz;
        newNodoTree.children = (<TreeNode[]>childNodos(raiz, ramasYhojas));
        resultado.data?.push(newNodoTree);
        newNodoTree = {};
    });
    return resp.status(201).json({ data: resultLimpio(<TreeNode[]>resultado.data) });
}

const childNodos = (nodo: Almacenes, todos: Almacenes[]) => {
    const hijos = todos.filter((dato) => dato.idPadre == nodo.idAlmacenes);

    if (hijos.length == 0) return null

    let newNodo: TreeNode = {};
    let nodos: TreeNode[] = [];

    hijos.forEach((hijo) => {
        newNodo.label = hijo.nombre
        newNodo.data = hijo;
        newNodo.leaf = false;
        newNodo.expanded = false;
        newNodo.collapsedIcon = "icon";
        newNodo.expandedIcon = "icon";
        newNodo.children = <TreeNode[]>childNodos(hijo, todos);
        nodos.push(newNodo);
        newNodo = {};
    });
    return nodos;
}
