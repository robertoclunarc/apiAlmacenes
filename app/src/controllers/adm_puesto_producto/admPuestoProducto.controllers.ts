import { Request, Response }  from "express";
import  Almacenes from '../../interface/almacen';
import db from "../../database";



export const asignaPuesto = async (req: Request, res: Response) => {
    let id = req.params.idAlmacenes;
    let update : Almacenes = req.body.codigoProducto;
    let consulta = ("UPDATE almacenes SET codigoProducto = ? WHERE idAlmacenes = ?");
    try {
        let val
        val = update;
        if( update === 0){
            val = null;
            const result = await db.querySelect(consulta, [val, id])
            console.log(consulta)
            //return result
            res.status(201).json(result);
        } else {
            const result = await db.querySelect(consulta, [update, id]);
            console.log(consulta);
            res.status(201).json(result);
        }
       
       // res.status(201).json(update);
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
};