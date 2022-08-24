export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const modelValue: StringConstructor;
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        size: import("vue").Ref<number>;
        unit: import("vue").Ref<string>;
        setInternal: () => void;
        update: () => void;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        ref: typeof ref;
        watch: typeof watch;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        size: import("vue").Ref<number>;
        unit: import("vue").Ref<string>;
        setInternal: () => void;
        update: () => void;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        ref: typeof ref;
        watch: typeof watch;
    };
}
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
