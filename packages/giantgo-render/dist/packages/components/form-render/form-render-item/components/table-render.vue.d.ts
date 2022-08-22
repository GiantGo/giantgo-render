export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const modelValue: ArrayConstructor;
        namespace items {
            export const type: ArrayConstructor;
            function _default(): never[];
            function _default(): never[];
            export { _default as default };
        }
        namespace options {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        state: any;
        data: {
            items: never[];
        };
        formRenderRef: import("vue").Ref<null>;
        formDialog: {
            title: string;
            isShow: boolean;
            index: number;
        };
        add: () => void;
        edit: (index: any, item: any) => void;
        remove: (index: any) => void;
        save: (result: any) => void;
        setInternal: () => void;
        reactive: typeof reactive;
        ref: typeof ref;
        watch: typeof watch;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        nextTick: typeof nextTick;
        inject: typeof inject;
        cloneDeep: <T>(value: T) => T;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        state: any;
        data: {
            items: never[];
        };
        formRenderRef: import("vue").Ref<null>;
        formDialog: {
            title: string;
            isShow: boolean;
            index: number;
        };
        add: () => void;
        edit: (index: any, item: any) => void;
        remove: (index: any) => void;
        save: (result: any) => void;
        setInternal: () => void;
        reactive: typeof reactive;
        ref: typeof ref;
        watch: typeof watch;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        nextTick: typeof nextTick;
        inject: typeof inject;
        cloneDeep: <T>(value: T) => T;
    };
}
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { nextTick } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
