interface AreaTreeNode {
    value: string;
    label: string;
    children?: Array<AreaTreeNode>;
}
declare const areaTree: Array<AreaTreeNode>;
export { areaTree };
