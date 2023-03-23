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
        submit: () => void;
        reset: () => void;
        fieldChange: ({ key, value }: {
            key: any;
            value: any;
        }) => void;
        editJson: () => void;
        saveJson: () => import("element-plus").MessageHandler | undefined;
        computed: typeof import("@vue/reactivity").computed;
        inject: typeof inject;
        nextTick: typeof nextTick;
        reactive: typeof reactive;
        ref: typeof ref;
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
        submit: () => void;
        reset: () => void;
        fieldChange: ({ key, value }: {
            key: any;
            value: any;
        }) => void;
        editJson: () => void;
        saveJson: () => import("element-plus").MessageHandler | undefined;
        computed: typeof import("@vue/reactivity").computed;
        inject: typeof inject;
        nextTick: typeof nextTick;
        reactive: typeof reactive;
        ref: typeof ref;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        cloneDeep: <T>(value: T) => T;
    };
}
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { nextTick } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
