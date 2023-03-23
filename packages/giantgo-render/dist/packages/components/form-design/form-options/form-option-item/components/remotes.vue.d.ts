import type { Message } from 'element-plus';
import type { SFCInstallWithContext } from 'element-plus/es/utils';
import type { Ref } from '@vue/reactivity';
export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const modelValue: ObjectConstructor;
    }
    const emits: string;
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        form: {
            remotes: {};
            remoteTabs: {};
            remoteCollapses: {};
            remoteResults: {};
            loading: boolean;
        };
        formRef: Ref<null>;
        remoteTabsValue: Ref<string>;
        remoteDialog: Ref<boolean>;
        showRemote: () => void;
        saveRemote: () => void;
        editRemote: (target: any, action: any) => void;
        addKeyValue: (uuid: any, attr: any) => void;
        removeKeyValue: (uuid: any, attr: any, targetIndex: any) => void;
        testRequest: () => void;
        reactive: typeof reactive;
        ref: typeof ref;
        ElMessage: SFCInstallWithContext<Message>;
        cloneDeep: <T>(value: T) => T;
        isEmpty: (value?: any) => boolean;
        createRequest: typeof createRequest;
        makeId: typeof makeId;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        emit: any;
        form: {
            remotes: {};
            remoteTabs: {};
            remoteCollapses: {};
            remoteResults: {};
            loading: boolean;
        };
        formRef: Ref<null>;
        remoteTabsValue: Ref<string>;
        remoteDialog: Ref<boolean>;
        showRemote: () => void;
        saveRemote: () => void;
        editRemote: (target: any, action: any) => void;
        addKeyValue: (uuid: any, attr: any) => void;
        removeKeyValue: (uuid: any, attr: any, targetIndex: any) => void;
        testRequest: () => void;
        reactive: typeof reactive;
        ref: typeof ref;
        ElMessage: SFCInstallWithContext<Message>;
        cloneDeep: <T>(value: T) => T;
        isEmpty: (value?: any) => boolean;
        createRequest: typeof createRequest;
        makeId: typeof makeId;
    };
}
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { createRequest } from "@giantgo-render/utils/request";
import { uuid as makeId } from "@giantgo-render/utils/uuid";
