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
        code: Ref<string>;
        codeDialog: Ref<boolean>;
        editData: () => void;
        setData: () => MessageHandler | undefined;
        ElMessage: SFCInstallWithContext<Message>;
        ref: typeof ref;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        code: Ref<string>;
        codeDialog: Ref<boolean>;
        editData: () => void;
        setData: () => MessageHandler | undefined;
        ElMessage: SFCInstallWithContext<Message>;
        ref: typeof ref;
    };
}
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
