import type { ComponentInternalInstance } from '.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core';
import type { Message } from 'element-plus';
import type { SFCInstallWithContext } from 'element-plus/es/utils';
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
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        data: {
            fileList: never[];
        };
        beforeUpload: (file: any) => boolean;
        handleChange: (res: any, file: any, fileList: any) => void;
        handleError: () => void;
        setInternal: () => void;
        ElMessage: SFCInstallWithContext<Message>;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
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
            fileList: never[];
        };
        beforeUpload: (file: any) => boolean;
        handleChange: (res: any, file: any, fileList: any) => void;
        handleError: () => void;
        setInternal: () => void;
        ElMessage: SFCInstallWithContext<Message>;
        onMounted: (hook: () => any, target?: ComponentInternalInstance | null | undefined) => false | Function | undefined;
        reactive: typeof reactive;
        watch: typeof watch;
        cloneDeep: <T>(value: T) => T;
    };
}
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
