import { Request, Response} from "express";
import db from "../../database";
import adm_almacen_puesto from "../../interface/puesto";

export const NvoPuesto = async (req: Request, res: Response) => {
    let nuevoPuesto: adm_almacen_puesto = req.body;
    let consulta = "INSERT INTO adm_almacen_puesto SET ?";
    try {
        const result = await db.querySelect(consulta, [nuevoPuesto]);
        nuevoPuesto.idAdmPuesto = result.insertId;
        res.status(201).json(nuevoPuesto);
    } catch(error) {
        console.log(error);
        res.json({"Error": error});
    };
};

export const EditPuesto = async (req: Request, res: Response) => {
    let id = req.params.idAdmPuesto;
    let update: adm_almacen_puesto = req.body;
    let consulta = ("UPDATE adm_almacen_puesto SET ? WHERE idAdmPuesto = ?");
    try {
        const result = await db.querySelect(consulta, [update, id]);
        res.status(201).json(update);
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
};

export const DelPuesto = async (req: Request, res: Response) => {
    let id = req.params.idAdmPuesto;
    let consulta = "DELETE FROM adm_almacen_puesto WHERE idAdmPuesto = ?";
    try {
        const result = await db.querySelect(consulta, [id]);
        res.json({ message:'deleted'});
    } catch (error) {
        console.log(error);
        res.json({"Error": error});
    };
}