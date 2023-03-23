export default _sfc_main;
declare const _sfc_main: import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").DefineComponent<{
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
}, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, string[], string, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").VNodeProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").AllowedComponentProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentCustomProps, Readonly<import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ExtractPropTypes<{
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
    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
}, {
    theme: string;
    readonly: boolean;
    wrap: boolean;
    printMargin: number | boolean;
    lang: string;
}>;
