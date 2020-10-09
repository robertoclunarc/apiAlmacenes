import { Request, Response } from "express";
import db from "../../database";
import TreeNode from "../../interface/treenode";
import Almacenes from "../../interface/almacen";


export const estructuraFT = async (req: Request, resp: Response) => {

    let consulta = "SELECT * FROM almacenes ORDER BY idPadre, idAlmacenes";
    const todosBD: Almacenes[] = await db.querySelect(consulta);
    
    const padres: Almacenes[] = todosBD.filter((nodo) => nodo.idPadre == 0);
    const ramasYhojas: Almacenes[] =  todosBD.filter((nodo) => nodo.idPadre != 0);

    let resultado: any = { "data": [] };
    let newNodoTree: TreeNode = {};

    padres.forEach((raiz) => {
        newNodoTree.label = raiz.nombre
        newNodoTree.data = raiz;
        newNodoTree.children = (<TreeNode[]>childNodos(raiz, ramasYhojas));
        resultado.data?.push(newNodoTree);
        newNodoTree = {};

    })
    return resp.status(201).json(resultado);
    
}

const childNodos = (nodo: Almacenes, todos: Almacenes[]) => {
    const hijos = todos.filter((dato) => dato.idPadre == nodo.idAlmacenes);
    

    let newNodo: TreeNode = {};
    let nodos: TreeNode[] = [];

    if (hijos.length == 0) {
        return null;
    }

    hijos.forEach((hijo) => {
        newNodo.label = hijo.nombre
        newNodo.data = hijo;
        newNodo.children = <TreeNode[]>childNodos(hijo, todos);
        nodos.push(newNodo);
        newNodo = {};
        
    });
    return nodos;
}