import { Request, Response } from "express";
import db from "../../database";
import TreeNode from "../../interface/treenode";
import Almacenes from "../../interface/almacen";
import adm_almacen_puesto from "../../interface/puesto";

let result: Almacenes[] = [];
let puesto: adm_almacen_puesto[] = [];

let root: any[];
let tree: TreeNode[];
let nodo: TreeNode;
let nodos: any[];



export const arbol = async (req: Request, res: Response) => {
    
    let consulta = "SELECT * FROM almacenes"; 
    let consulta2 = "SELECT * FROM adm_almacen_puesto";
    

    try {
        result = await db.querySelect(consulta);
        puesto = await db.querySelect(consulta2);
    
         format(result);
        res.status(201).json(root);
    } catch(error) {
        console.log(error);
        res.json({"error:": error});
    }
}

async function format (result: any[]) {
    let resultado: any[] = result;
   nodo = {};
    nodos = [];

    

    try {
         resultado.forEach(e => {
            resultado.map((res => {
                
             resultado.forEach(resul => {
                 nodo = {data: e, children: []}
                 
               
                }); 
            })); nodos.push(nodo);
        });
        
        root = [];
        nodos.forEach((raiz) =>{
            if(raiz.data.nivel == 0){
               root.push(raiz);
           }
          
           //console.log('root', nodos);
          // construir(root);
        }); 
         
        root.forEach((raiz)=>{
            nodos.forEach((node, index)=>{
                if(node.data.idPadre == raiz.data.idAlmacenes){
                    raiz.children.push(node);
                }
            })
        }); 
        tree = root;
        RecorrerArbol()
        return(root); 

    }catch(error) {
        console.log(error);
        }
}

function RecorrerArbol(){
  
        tree.forEach(item =>{
            nodos.forEach(node =>{
                if(node.data.idPadre == item.data.idAlmacenes){
                   root.push(node);
                   
                } console.log(tree);
            })
            
        });

    
}