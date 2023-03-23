export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const modelValue: ObjectConstructor;
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        code: import("@vue/reactivity").Ref<string>;
        codeDialog: import("@vue/reactivity").Ref<boolean>;
        editData: () => void;
        setData: () => import("element-plus").MessageHandler | undefined;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        ref: typeof ref;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        code: import("@vue/reactivity").Ref<string>;
        codeDialog: import("@vue/reactivity").Ref<boolean>;
        editData: () => void;
        setData: () => import("element-plus").MessageHandler | undefined;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        ref: typeof ref;
    };
}
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
