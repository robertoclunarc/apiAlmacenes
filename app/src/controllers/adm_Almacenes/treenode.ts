import { Request, Response } from "express";
import db from "../../database";
import TreeNode from "../../interface/treenode";
import Almacenes from "../../interface/almacen";
import adm_almacen_puesto from "../../interface/puesto";


let nodo: TreeNode;

let arbol: any[];

let nodos: TreeNode[]; 
let almacenes: TreeNode[];
let piso: TreeNode[];
let pasillo:TreeNode[];
let estante:TreeNode[];
let nivel: TreeNode[];
let puesto: adm_almacen_puesto[];
let result: Almacenes[];


export const treeNode = async (req: Request, res: Response) => {
    
    let consulta = "SELECT * FROM almacenes"; 
    let consulta2 = "SELECT * FROM adm_almacen_puesto";

    try {
        result = [];
        puesto = [];
        result = await db.querySelect(consulta);
        puesto = await db.querySelect(consulta2);
        /*result.forEach(e => {
            result.map((res => {
                
             result.forEach(resul => {
                 nodo = {data: e, children: []}
                 
               
                }); 
            })); nodos.push(nodo);
        
       // comparar(nodos);
        
        });
         */
        //console.log('puesto', puesto);
         format(result);
        res.status(201).json(arbol);
    } catch(error) {
        console.log(error);
        res.json({"error:": error});
    }
}

async function format (result: any[]) {
    let resultado: any[] = result
    
    try {
        nodos = [];
         resultado.forEach(e => {
            resultado.map((res => {
                
             resultado.forEach(resul => {
                 nodo = {data: e, children: []}
                 
               
                }); 
            })); nodos.push(nodo);
         

           
            //console.log('root', nodos);
           // construir(root);
         }); /*  return(nodos); */
         whois(nodos);
    }catch(error) {
        console.log(error);
        }
}

function whois(nodos: TreeNode[]) {
    almacenes = [];
    estante = [];
    piso = [];
    nivel = [];
    pasillo = [];

    let AuxNodos: TreeNode[] = nodos;
    try {
     AuxNodos.forEach(Anodo=>{
            if(Anodo.data.nivel == 0 || Anodo.data.nivel == null ){
                almacenes.push(Anodo);
            }
            if(Anodo.data.nivel == 1) {
                piso.push(Anodo);
            }if(Anodo.data.nivel == 2) {
                pasillo.push(Anodo);
            }if(Anodo.data.nivel == 3) {
                estante.push(Anodo);
            }if(Anodo.data.nivel == 4) {
                nivel.push(Anodo);
                //console.log(nivel);
            }

            //console.log('almacenes', almacenes);
          
        });setTree()
        //return(almacenes);
    } catch(error) {
        console.log(error);
        }
}

async function setTree(){
    arbol = [];
    
    try {

     await  almacenes.forEach(almacen=>{
            arbol.push(almacen);
            arbol.forEach(root =>{
                piso.forEach(floor=>{
                    if(almacen.data.idAlmacenes ==  floor.data.idPadre){
                        //arbol.push({{[data:[almacen], children: [floor]]}})
                        almacen.children = [floor];
                    pasillo.forEach(hallway=>{
                        if(floor.data.idAlmacenes == hallway.data.idPadre){
                            floor.children = [hallway];
                        estante.forEach(shelf=>{
                            if(hallway.data.idAlmacenes == shelf.data.idPadre){
                                hallway.children = [shelf];
                            nivel.forEach(level=>{
                                if(shelf.data.idAlmacenes == level.data.idPadre){
                                    shelf.children = [level];
                                    puesto.forEach(spot=>{

                                    let puestoTree: TreeNode
                                    puestoTree = {data: {
                                                    idAlmacenes: spot.idAdmPuesto, 
                                                    idPadre: spot.idAdmNivelEstante,
                                                    nivel: 5,
                                                     ...spot}, children: [], leaf: true}
                                        
                                        if(level.data.idAlmacenes == spot.idAdmNivelEstante){
                                           level.children?.push (puestoTree) ;
                                           }
                                    
                                        
                                    });
                                }
                            });
                            }
                        });
                        }

                    });
                    }
                });
                }
            );
                
        });
       //console.log(arbol);
        return(arbol);

    }catch(error) {
        console.log(error);
        };
}
/* async function comparar(result: any) { 
     let resultado: Almacenes[] = result;
     console.log('comparison')

try {


await resultado.forEach(e => {
    resultado.map((res => {
        resultado.forEach(resul => {
        nodo = {data: resul, children: []}
        console.log(nodo);
        root.push(nodo);
       
        });
        
        

        
        
       
    }));
    console.log('root', root);
});  return(root);
} catch(error) {
    console.log(error);
    }

} */

/*async function comparar(result: any) { 
    let resultado: Almacenes[] = result;
    console.log('comparison')


//resultado.map((res => {
   //console.log(res)
   //dataq
   //return(dataq)
 //})) 

await resultado.forEach(e => {
   resultado.map((res => {
       
    resultado.forEach(resul => {
        nodo = {data: e, children: []}
        
      
       }); 
   })); nodos.push(nodo);

   console.log('root', nodos);
  // construir(root);
});  return(nodos);


}*/

/* function construir (root: any[]) {
 let auxiliar = root;

 auxiliar.forEach(element => {
     if(element.id)
     
 });

} */

