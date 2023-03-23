export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const modelValue: StringConstructor;
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        tips: import("@vue/reactivity").Ref<{
            value: string;
            label: string;
        }[]>;
        querySearch: (queryString: any, cb: any) => void;
        getInterpolation: typeof getInterpolation;
        ref: typeof ref;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        tips: import("@vue/reactivity").Ref<{
            value: string;
            label: string;
        }[]>;
        querySearch: (queryString: any, cb: any) => void;
        getInterpolation: typeof getInterpolation;
        ref: typeof ref;
    };
}
import { getInterpolation } from '../../../../utils/interpolation';
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
