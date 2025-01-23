declare const _default: import("vue").DefineComponent<{
    path: StringConstructor;
    component: StringConstructor;
    pUuid: StringConstructor;
    uuid: StringConstructor;
    defaultValue: (StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | DateConstructor)[];
    items: {
        type: ArrayConstructor;
        default(): never[];
    };
    options: {
        type: ObjectConstructor;
        default(): {};
    };
}, {
    select: () => any;
    mouseenter: () => any;
    mouseleave: () => any;
    copy: () => any;
    remove: () => any;
    isSelected: import("vue").ComputedRef<boolean>;
    isHover: import("vue").ComputedRef<boolean>;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    path: StringConstructor;
    component: StringConstructor;
    pUuid: StringConstructor;
    uuid: StringConstructor;
    defaultValue: (StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | DateConstructor)[];
    items: {
        type: ArrayConstructor;
        default(): never[];
    };
    options: {
        type: ObjectConstructor;
        default(): {};
    };
}>>, {
    options: Record<string, any>;
    items: unknown[];
}>;
export default _default;
