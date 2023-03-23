import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
export default _sfc_main;
declare const _sfc_main: DefineComponent<{
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
}, ComponentOptionsMixin, ComponentOptionsMixin, string[], string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    theme: string;
    readonly: boolean;
    wrap: boolean;
    printMargin: number | boolean;
    lang: string;
}>;
