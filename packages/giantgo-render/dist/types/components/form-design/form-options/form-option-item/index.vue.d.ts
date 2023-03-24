declare const _default: import("vue").DefineComponent<{
    optionKey: StringConstructor;
    optionValue: (StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | DateConstructor)[];
}, {
    isPrimitive: typeof isPrimitive;
    validateInterpolation: typeof validateInterpolation;
    optionKeyLabels: Record<string, string>;
    updateOption: (key: any, value: any) => any;
    switchInterpolate: (key: any) => any;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    optionKey: StringConstructor;
    optionValue: (StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | DateConstructor)[];
}>>, {}>;
export default _default;
import { isPrimitive } from "../../../../utils/types";
import { validateInterpolation } from "../../../../utils/interpolation";
