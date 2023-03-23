import type { Ref } from '@vue/reactivity';
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
        setInternal: () => void;
        inject: typeof inject;
        reactive: typeof reactive;
        watch: typeof watch;
        useOptions: typeof useOptions;
        cloneDeep: <T>(value: T) => T;
        isArray: typeof isArray;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
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
        setInternal: () => void;
        inject: typeof inject;
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
