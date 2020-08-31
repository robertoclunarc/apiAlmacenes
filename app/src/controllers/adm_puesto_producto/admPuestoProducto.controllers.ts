import { Request, Response }  from "express";
import  adm_almacen_puesto from "../../interface/puesto";
import db from "../../database";



export const asignaPuesto = async (req: Request, res: Response) => {
    let id = req.params.idAdmPuesto;
    let update : adm_almacen_puesto = req.body.idAdmProducto;
    let consulta = ("UPDATE adm_almacen_puesto SET idAdmProducto = ? WHERE idAdmPuesto = ?");
    try {
        let val
        val = update;
        if( update === 0){
            val = null;
            const result = await db.querySelect(consulta, [val, id]);
        } else {
            const result = await db.querySelect(consulta, [update, id]);
            console.log(result);
        }
       
        res.status(201).json(update);
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
};