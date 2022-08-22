export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const uuid: StringConstructor;
        namespace options {
            export const type: ObjectConstructor;
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        editorRef: import("vue").ShallowRef<any>;
        handleCreated: (editor: any) => void;
        onBeforeUnmount: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        shallowRef: typeof shallowRef;
        Editor: import("vue").DefineComponent<{
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultContent: {
                type: import("vue").PropType<import(".pnpm/slate@0.72.8/node_modules/slate").Descendant[]>;
                default: never[];
            };
            defaultHtml: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: import("vue").PropType<Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IEditorConfig>>;
                default: {};
            };
            modelValue: {
                type: StringConstructor;
                default: string;
            };
        }, {
            box: import("vue").Ref<null>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            mode?: unknown;
            defaultContent?: unknown;
            defaultHtml?: unknown;
            defaultConfig?: unknown;
            modelValue?: unknown;
        } & {
            mode: string;
            defaultContent: import(".pnpm/slate@0.72.8/node_modules/slate").Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IEditorConfig>;
            modelValue: string;
        }>, {
            mode: string;
            defaultContent: import(".pnpm/slate@0.72.8/node_modules/slate").Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IEditorConfig>;
            modelValue: string;
        }>;
        Toolbar: import("vue").DefineComponent<{
            editor: {
                type: import("vue").PropType<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IDomEditor>;
            };
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: import("vue").PropType<Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IToolbarConfig>>;
                default: {};
            };
        }, {
            selector: import("vue").Ref<null>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            editor?: unknown;
            mode?: unknown;
            defaultConfig?: unknown;
        } & {
            mode: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IToolbarConfig>;
        } & {
            editor?: import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IDomEditor | undefined;
        }>, {
            mode: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IToolbarConfig>;
        }>;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        editorRef: import("vue").ShallowRef<any>;
        handleCreated: (editor: any) => void;
        onBeforeUnmount: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        shallowRef: typeof shallowRef;
        Editor: import("vue").DefineComponent<{
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultContent: {
                type: import("vue").PropType<import(".pnpm/slate@0.72.8/node_modules/slate").Descendant[]>;
                default: never[];
            };
            defaultHtml: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: import("vue").PropType<Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IEditorConfig>>;
                default: {};
            };
            modelValue: {
                type: StringConstructor;
                default: string;
            };
        }, {
            box: import("vue").Ref<null>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            mode?: unknown;
            defaultContent?: unknown;
            defaultHtml?: unknown;
            defaultConfig?: unknown;
            modelValue?: unknown;
        } & {
            mode: string;
            defaultContent: import(".pnpm/slate@0.72.8/node_modules/slate").Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IEditorConfig>;
            modelValue: string;
        }>, {
            mode: string;
            defaultContent: import(".pnpm/slate@0.72.8/node_modules/slate").Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IEditorConfig>;
            modelValue: string;
        }>;
        Toolbar: import("vue").DefineComponent<{
            editor: {
                type: import("vue").PropType<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IDomEditor>;
            };
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: import("vue").PropType<Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IToolbarConfig>>;
                default: {};
            };
        }, {
            selector: import("vue").Ref<null>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            editor?: unknown;
            mode?: unknown;
            defaultConfig?: unknown;
        } & {
            mode: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IToolbarConfig>;
        } & {
            editor?: import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IDomEditor | undefined;
        }>, {
            mode: string;
            defaultConfig: Partial<import(".pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core").IToolbarConfig>;
        }>;
    };
}
import { shallowRef } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
