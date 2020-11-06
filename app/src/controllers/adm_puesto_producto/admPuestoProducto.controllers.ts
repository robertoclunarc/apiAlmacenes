import { Request, Response }  from "express";
import db from "../../database";

export const asignaPuesto = async (req: Request, res: Response) => {
    let id = req.params.idAlmacenes;
    let update: string = req.body;
    let consulta = ("UPDATE adm_almacenes SET codigoProducto = ? WHERE idAlmacenes = ?");
    try {
        console.log(update);
        const result = await db.querySelect(consulta, [update, id]);
        res.status(201).json(update);
    
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
};