import { Request, Response }  from "express";
import  Almacenes from '../../interface/almacen';
import db from "../../database";



export const asignaPuesto = async (req: Request, res: Response) => {
    let id = req.params.idAlmacenes;
    let update: string = req.body;
    let consulta = ("UPDATE almacenes SET codigoProducto = ? WHERE idAlmacenes = ?");
    try {
       // let val
       // val = update;
        //if(update === 0){
          //  val = null;
           // const result = await db.querySelect(consulta, [val, id])
        
            //return result
      //      res.status(201).json(result);
       // } else {
           console.log(update);
            const result = await db.querySelect(consulta, [update, id]);
    
            res.status(201).json(update);
       // }
       
       // res.status(201).json(update);
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
};