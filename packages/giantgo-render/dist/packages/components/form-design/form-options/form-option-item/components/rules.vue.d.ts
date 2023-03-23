import type { ComponentInternalInstance } from '.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core';
import type { SFCInstallWithContext } from 'element-plus/es/utils';
import type { MessageHandler, Message } from 'element-plus';
import type { Ref } from '@vue/reactivity';
export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const modelValue: ArrayConstructor;
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        data: {
            required: {
                required: boolean;
                message: string;
                trigger: string;
            };
            patterns: never[];
        };
        code: Ref<string>;
        codeDialog: Ref<boolean>;
        emitChange: () => void;
        update: (index: any, key: any, value: any) => void;
        addRule: () => void;
        removeRule: (index: any) => void;
        editRules: () => void;
        setRules: () => MessageHandler | undefined;
        setInternal: () => void;
        ElMessage: SFCInstallWithContext<Message>;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        ref: typeof ref;
        watch: typeof watch;
        cloneDeep: <T>(value: T) => T;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        data: {
            required: {
                required: boolean;
                message: string;
                trigger: string;
            };
            patterns: never[];
        };
        code: Ref<string>;
        codeDialog: Ref<boolean>;
        emitChange: () => void;
        update: (index: any, key: any, value: any) => void;
        addRule: () => void;
        removeRule: (index: any) => void;
        editRules: () => void;
        setRules: () => MessageHandler | undefined;
        setInternal: () => void;
        ElMessage: SFCInstallWithContext<Message>;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        ref: typeof ref;
        watch: typeof watch;
        cloneDeep: <T>(value: T) => T;
    };
}
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
