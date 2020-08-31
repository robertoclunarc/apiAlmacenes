import { Request, Response } from "express";
import db from "../../database";
import TreeNode from "../../interface/estructuraFt";
import Almacenes from "../../interface/almacen";
import adm_almacen_puesto from "../../interface/puesto";

let result: Almacenes[] = [];
let puesto: adm_almacen_puesto[] = [];
//let idMapping: any[];

let root: any[];
let tree: TreeNode[];
let nodo: TreeNode;
let nodos: any[];
let parentEl: TreeNode;



export const estructuraFt = async (req: Request, res: Response) => {
    
    let consulta = "SELECT * FROM almacenes"; 
    let consulta2 = "SELECT * FROM adm_almacen_puesto";
    

    try {
        result = await db.querySelect(consulta);
        //puesto = await db.querySelect(consulta2);
    
         mapeado(result);
        res.status(201).json(nodos);
    } catch(error) {
        console.log(error);
        res.json({'error:': error});
    }
}

function mapeado(data: Almacenes[]) {
    let resultado: Almacenes[]
    
    resultado = data;
   nodo = {};
    nodos = [];
    try {
         resultado.forEach(e => {
            resultado.map((res => {
                
             resultado.forEach(resul => {
                 nodo = {data: e, children: []}
                 
               
                }); 
            })); nodos.push(nodo);
           
        }); //console.log(nodos);
        buildTree()
    } catch(error) {
        console.log(error);
        //res.json({'error:': error});
    }
}


function buildTree() {
    parentEl = {};
    root = [];
    result.forEach(data => {
  // Handle the root element
  if (data.idPadre === null) {
    root.push([{data}]);
     
    //return(root);
  }
   // Use our mapping to locate the parent element in our data array
  
  root.forEach(ElementoPadre=>{
      result.forEach(nodoSimple=>{
        if(ElementoPadre.idAlmacenes == nodoSimple.idPadre){
            //parentEl.data = {ElementoPadre}
            parentEl.children?.push({data: nodoSimple})
        }
        console.log(parentEl.children);
      }); nodos.push(parentEl);
      return(nodos);
  });
   
  // Add our current el to its parent's `children` array
 // parentEl.children = [...(parentEl.children || []), el]; 
});
}