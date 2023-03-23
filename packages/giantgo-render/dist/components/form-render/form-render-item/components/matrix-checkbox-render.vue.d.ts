import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
export default _sfc_main;
declare const _sfc_main: DefineComponent<{
    path: StringConstructor;
    modelValue: ArrayConstructor;
    options: {
        type: ObjectConstructor;
        default(): {};
    };
}, {}, any, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    path: StringConstructor;
    modelValue: ArrayConstructor;
    options: {
        type: ObjectConstructor;
        default(): {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    options: Record<string, any>;
}>;
