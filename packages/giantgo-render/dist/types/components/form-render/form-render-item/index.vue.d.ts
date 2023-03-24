declare const _default: import("vue").DefineComponent<{
    path: {
        type: StringConstructor;
        default: string;
    };
    component: StringConstructor;
    modelValue: (StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | DateConstructor)[];
    items: {
        type: ArrayConstructor;
        default(): never[];
    };
    options: {
        type: ObjectConstructor;
        default(): {};
    };
}, void, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    path: {
        type: StringConstructor;
        default: string;
    };
    component: StringConstructor;
    modelValue: (StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | DateConstructor)[];
    items: {
        type: ArrayConstructor;
        default(): never[];
    };
    options: {
        type: ObjectConstructor;
        default(): {};
    };
}>>, {
    path: string;
    options: Record<string, any>;
    items: unknown[];
}>;
export default _default;
