import { Request, Response } from "express";
import db from "../../database";
import Almacenes from "../../interface/almacen";

export const todo = async (req: Request, res: Response) => {
    
    let consulta = "SELECT * FROM adm_almacenes";
    try {
        const result = await db.querySelect(consulta);
    
        res.status(201).json(result);
    } catch(error) {
        console.log(error);
        res.json({"Error": error});
    };
};

export const NvoRegistro = async (req: Request, res: Response) => {
    let nuevoAlmacen: Almacenes = req.body;
    let consulta = "INSERT INTO adm_almacenes SET ?";
    try {
        const result = await db.querySelect(consulta, [nuevoAlmacen]);
        nuevoAlmacen.idAlmacenes = result.insertId;
        res.status(201).json(nuevoAlmacen);
    } catch(error) {
        console.log(error);
        res.json({"Error": error});
    };
};

export const EditRegistro = async (req: Request, res: Response) => {
    let id = req.params.idAlmacenes;
    let update: Almacenes = req.body;
    let consulta = ("UPDATE adm_almacenes SET ? WHERE idAlmacenes = ?");
    console.log(update);
    
    try {
        const result = await db.querySelect(consulta, [update, id]);
        res.status(201).json(update);
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
};

export const DelRegistro = async (req: Request, res: Response) => {
    let id = req.params.idAlmacenes;
    let consulta = "DELETE FROM adm_almacenes WHERE idAlmacenes = ?";
    try {
        const result = await db.querySelect(consulta, [id]);
        res.json({ message:'deleted'});
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
}