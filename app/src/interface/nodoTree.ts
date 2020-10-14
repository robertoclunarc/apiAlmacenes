export interface Almacen {
    idAlmacenes?: number;
    nombre?: string;
    codigo?: string;
    descripcion?: string;
    idPadre ? : number;
    nivel?: number;
    permiso_cargo?: boolean;
    permiso_descargo?: boolean;
    esLogico?: boolean;
    codigoProducto?: string;
}

export interface NodoTree {
    data?: Almacen;
    children?: NodoTree[]
}

export interface DataNode {
    data?: NodoTree[]
}