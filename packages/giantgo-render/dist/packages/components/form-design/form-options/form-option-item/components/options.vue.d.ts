import type { ComponentInternalInstance } from '.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core';
import type { SFCInstallWithContext } from 'element-plus/es/utils';
import type { MessageHandler, Message } from 'element-plus';
import type { Ref } from '@vue/reactivity';
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
        code: Ref<string>;
        codeDialog: Ref<boolean>;
        state: any;
        emitChange: () => void;
        update: (index: any, key: any, value: any) => void;
        addOption: () => void;
        removeOption: (index: any) => void;
        editOptions: () => void;
        setOptions: () => MessageHandler | undefined;
        setInternal: () => void;
        ElMessage: SFCInstallWithContext<Message>;
        inject: typeof inject;
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
            type: string;
            remote: string;
            items: never[];
        };
        code: Ref<string>;
        codeDialog: Ref<boolean>;
        state: any;
        emitChange: () => void;
        update: (index: any, key: any, value: any) => void;
        addOption: () => void;
        removeOption: (index: any) => void;
        editOptions: () => void;
        setOptions: () => MessageHandler | undefined;
        setInternal: () => void;
        ElMessage: SFCInstallWithContext<Message>;
        inject: typeof inject;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        ref: typeof ref;
        watch: typeof watch;
        cloneDeep: <T>(value: T) => T;
    };
}
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
