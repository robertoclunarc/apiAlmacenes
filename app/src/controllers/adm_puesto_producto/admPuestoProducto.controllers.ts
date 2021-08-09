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

export const puestos = async (req: Request, res: Response) => {
    
    let consulta = "SELECT * FROM adm_almacen_puesto"; 
    let idPuesto = req.params.idPuesto;
    if (idPuesto) { consulta +=` WHERE idAdmPuesto = ${idPuesto}`}

    try {
        const result = await db.querySelect(consulta);
    
        res.status(201).json(result);
    } catch(error) {
        console.log(error);
        res.json({"Error": error});
    };
};