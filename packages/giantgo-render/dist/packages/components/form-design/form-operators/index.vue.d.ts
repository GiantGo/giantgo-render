export default _sfc_main;
declare namespace _sfc_main {
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        formRenderRef: import("vue").Ref<null>;
        previewDialog: import("vue").Ref<boolean>;
        jsonDialog: {
            title: string;
            isShow: boolean;
            code: string;
        };
        resultDialog: {
            title: string;
            isShow: boolean;
            code: string;
        };
        state: any;
        clear: any;
        revoke: any;
        forward: any;
        init: any;
        cached: import("vue").ComputedRef<any>;
        current: import("vue").ComputedRef<any>;
        preview: () => void;
        submit: (result: any) => void;
        editJson: () => void;
        saveJson: () => import("element-plus").MessageHandler | undefined;
        ref: typeof ref;
        nextTick: typeof nextTick;
        inject: typeof inject;
        reactive: typeof reactive;
        computed: typeof import("@vue/reactivity").computed;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        cloneDeep: <T>(value: T) => T;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        formRenderRef: import("vue").Ref<null>;
        previewDialog: import("vue").Ref<boolean>;
        jsonDialog: {
            title: string;
            isShow: boolean;
            code: string;
        };
        resultDialog: {
            title: string;
            isShow: boolean;
            code: string;
        };
        state: any;
        clear: any;
        revoke: any;
        forward: any;
        init: any;
        cached: import("vue").ComputedRef<any>;
        current: import("vue").ComputedRef<any>;
        preview: () => void;
        submit: (result: any) => void;
        editJson: () => void;
        saveJson: () => import("element-plus").MessageHandler | undefined;
        ref: typeof ref;
        nextTick: typeof nextTick;
        inject: typeof inject;
        reactive: typeof reactive;
        computed: typeof import("@vue/reactivity").computed;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        cloneDeep: <T>(value: T) => T;
    };
}
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { nextTick } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
