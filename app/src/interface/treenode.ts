import Almacenes from "./almacen";

export default interface TreeNode {
    label?: string;
    data?: Almacenes;
    expandedIcon?: string;
    collapsedIcon?: string;
    children?: TreeNode[];
    leaf?: boolean;
    expanded?: boolean;
};
