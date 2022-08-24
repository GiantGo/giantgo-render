export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const modelValue: ObjectConstructor;
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
        tabsValue: import("vue").Ref<string>;
        emitter: any;
        update: (key: any, value: any) => void;
        inject: typeof inject;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        ref: typeof ref;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        tabsValue: import("vue").Ref<string>;
        emitter: any;
        update: (key: any, value: any) => void;
        inject: typeof inject;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        ref: typeof ref;
    };
}
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
