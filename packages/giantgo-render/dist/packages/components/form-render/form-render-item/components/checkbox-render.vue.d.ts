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
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        state: any;
        items: import("@vue/reactivity").Ref<{
            label: string;
            value: string;
        }[]>;
        inject: typeof inject;
        useOptions: typeof useOptions;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        state: any;
        items: import("@vue/reactivity").Ref<{
            label: string;
            value: string;
        }[]>;
        inject: typeof inject;
        useOptions: typeof useOptions;
    };
}
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { useOptions } from '../../../../hooks/use-options';
