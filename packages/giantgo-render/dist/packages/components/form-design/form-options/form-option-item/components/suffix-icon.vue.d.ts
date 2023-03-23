import type { Ref } from '@vue/reactivity';
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
        emit: any;
        drawer: Ref<boolean>;
        pickIcon: (icon: any) => void;
        ElementPlusIconsVue: typeof ElementPlusIconsVue;
        ref: typeof ref;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        emit: any;
        drawer: Ref<boolean>;
        pickIcon: (icon: any) => void;
        ElementPlusIconsVue: typeof ElementPlusIconsVue;
        ref: typeof ref;
    };
}
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
