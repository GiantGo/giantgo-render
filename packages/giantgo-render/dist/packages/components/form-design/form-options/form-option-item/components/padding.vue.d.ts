import type { ComponentInternalInstance } from '.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core';
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
        data: {
            top: number;
            right: number;
            down: number;
            left: number;
        };
        emitChange: () => void;
        setInternal: () => void;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        watch: typeof watch;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        data: {
            top: number;
            right: number;
            down: number;
            left: number;
        };
        emitChange: () => void;
        setInternal: () => void;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        watch: typeof watch;
    };
}
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
