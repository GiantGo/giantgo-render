import type { ComponentInternalInstance } from '.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core';
import type { Ref } from '@vue/reactivity';
export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const modelValue: ArrayConstructor;
        namespace options {
            export const type: ObjectConstructor;
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
        emit: any;
        props: any;
        data: {
            items: never[];
        };
        state: any;
        rows: Ref<{
            label: string;
            value: string;
        }[]>;
        columns: Ref<{
            label: string;
            value: string;
        }[]>;
        change: (rIndex: any, cIndex: any, value: any) => void;
        setInternal: () => void;
        inject: typeof inject;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        watch: typeof watch;
        useOptions: typeof useOptions;
        cloneDeep: <T>(value: T) => T;
        isArray: typeof isArray;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        emit: any;
        props: any;
        data: {
            items: never[];
        };
        state: any;
        rows: Ref<{
            label: string;
            value: string;
        }[]>;
        columns: Ref<{
            label: string;
            value: string;
        }[]>;
        change: (rIndex: any, cIndex: any, value: any) => void;
        setInternal: () => void;
        inject: typeof inject;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        watch: typeof watch;
        useOptions: typeof useOptions;
        cloneDeep: <T>(value: T) => T;
        isArray: typeof isArray;
    };
}
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { useOptions } from "@giantgo-render/hooks/use-options";
import { isArray } from "@giantgo-render/utils/types";
