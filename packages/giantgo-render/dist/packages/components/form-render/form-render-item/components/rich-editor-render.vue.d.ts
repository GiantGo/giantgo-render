import type { IEditorConfig, IDomEditor, IToolbarConfig } from '.pnpm/@wangeditor+core@1.1.11_vu3jpz3o6j5tbrd357xpyxme2a/node_modules/@wangeditor/core';
import type { Descendant } from '.pnpm/slate@0.72.8/node_modules/slate';
import type { ComponentInternalInstance, DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from '.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core';
import type { ShallowRef, Ref } from '@vue/reactivity';
export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const modelValue: StringConstructor;
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
        editorRef: ShallowRef<any>;
        handleCreated: (editor: any) => void;
        onBeforeUnmount: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        shallowRef: typeof shallowRef;
        Editor: DefineComponent<{
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultContent: {
                type: PropType<Descendant[]>;
                default: never[];
            };
            defaultHtml: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: PropType<Partial<IEditorConfig>>;
                default: {};
            };
            modelValue: {
                type: StringConstructor;
                default: string;
            };
        }, {
            box: Ref<null>;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
            mode?: unknown;
            defaultContent?: unknown;
            defaultHtml?: unknown;
            defaultConfig?: unknown;
            modelValue?: unknown;
        } & {
            mode: string;
            defaultContent: Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<IEditorConfig>;
            modelValue: string;
        }>, {
            mode: string;
            defaultContent: Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<IEditorConfig>;
            modelValue: string;
        }>;
        Toolbar: DefineComponent<{
            editor: {
                type: PropType<IDomEditor>;
            };
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: PropType<Partial<IToolbarConfig>>;
                default: {};
            };
        }, {
            selector: Ref<null>;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
            editor?: unknown;
            mode?: unknown;
            defaultConfig?: unknown;
        } & {
            mode: string;
            defaultConfig: Partial<IToolbarConfig>;
        } & {
            editor?: IDomEditor | undefined;
        }>, {
            mode: string;
            defaultConfig: Partial<IToolbarConfig>;
        }>;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        editorRef: ShallowRef<any>;
        handleCreated: (editor: any) => void;
        onBeforeUnmount: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        shallowRef: typeof shallowRef;
        Editor: DefineComponent<{
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultContent: {
                type: PropType<Descendant[]>;
                default: never[];
            };
            defaultHtml: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: PropType<Partial<IEditorConfig>>;
                default: {};
            };
            modelValue: {
                type: StringConstructor;
                default: string;
            };
        }, {
            box: Ref<null>;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
            mode?: unknown;
            defaultContent?: unknown;
            defaultHtml?: unknown;
            defaultConfig?: unknown;
            modelValue?: unknown;
        } & {
            mode: string;
            defaultContent: Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<IEditorConfig>;
            modelValue: string;
        }>, {
            mode: string;
            defaultContent: Descendant[];
            defaultHtml: string;
            defaultConfig: Partial<IEditorConfig>;
            modelValue: string;
        }>;
        Toolbar: DefineComponent<{
            editor: {
                type: PropType<IDomEditor>;
            };
            mode: {
                type: StringConstructor;
                default: string;
            };
            defaultConfig: {
                type: PropType<Partial<IToolbarConfig>>;
                default: {};
            };
        }, {
            selector: Ref<null>;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
            editor?: unknown;
            mode?: unknown;
            defaultConfig?: unknown;
        } & {
            mode: string;
            defaultConfig: Partial<IToolbarConfig>;
        } & {
            editor?: IDomEditor | undefined;
        }>, {
            mode: string;
            defaultConfig: Partial<IToolbarConfig>;
        }>;
    };
}
import { shallowRef } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
