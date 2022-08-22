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
        data: {
            type: string;
            remote: string;
            items: never[];
        };
        code: import("vue").Ref<string>;
        codeDialog: import("vue").Ref<boolean>;
        state: any;
        emitChange: () => void;
        update: (index: any, key: any, value: any) => void;
        addOption: () => void;
        removeOption: (index: any) => void;
        editOptions: () => void;
        setOptions: () => import("element-plus").MessageHandler | undefined;
        setInternal: () => void;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        reactive: typeof reactive;
        ref: typeof ref;
        watch: typeof watch;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        inject: typeof inject;
        cloneDeep: <T>(value: T) => T;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        data: {
            type: string;
            remote: string;
            items: never[];
        };
        code: import("vue").Ref<string>;
        codeDialog: import("vue").Ref<boolean>;
        state: any;
        emitChange: () => void;
        update: (index: any, key: any, value: any) => void;
        addOption: () => void;
        removeOption: (index: any) => void;
        editOptions: () => void;
        setOptions: () => import("element-plus").MessageHandler | undefined;
        setInternal: () => void;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        reactive: typeof reactive;
        ref: typeof ref;
        watch: typeof watch;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        inject: typeof inject;
        cloneDeep: <T>(value: T) => T;
    };
}
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
