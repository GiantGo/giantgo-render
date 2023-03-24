declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    options: ObjectConstructor;
    placeholder: StringConstructor;
    readonly: BooleanConstructor;
    wrap: BooleanConstructor;
    printMargin: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    minLines: NumberConstructor;
    maxLines: NumberConstructor;
}, any, any, {}, {
    focus(): void;
    blur(): void;
    selectAll(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    options: ObjectConstructor;
    placeholder: StringConstructor;
    readonly: BooleanConstructor;
    wrap: BooleanConstructor;
    printMargin: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    minLines: NumberConstructor;
    maxLines: NumberConstructor;
}>> & {
    [x: `on${string}`]: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    theme: string;
    wrap: boolean;
    printMargin: number | boolean;
    lang: string;
}>;
export default _default;
