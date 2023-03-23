export default _sfc_main;
declare namespace _sfc_main {
    const name: string;
    const components: undefined;
    namespace props {
        const optionKey: StringConstructor;
        const optionValue: (ObjectConstructor | ArrayConstructor | BooleanConstructor | DateConstructor | StringConstructor | NumberConstructor)[];
    }
    function setup(): {
        isPrimitive: typeof isPrimitive;
        validateInterpolation: typeof validateInterpolation;
        optionKeyLabels: Record<string, string>;
        updateOption: (key: any, value: any) => any;
        switchInterpolate: (key: any) => any;
    };
}
import { isPrimitive } from "../../../../utils/types";
import { validateInterpolation } from "../../../../utils/interpolation";
