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
        formRef: import("vue").Ref<null>;
        remoteTabsValue: import("vue").Ref<string>;
        remoteDialog: import("vue").Ref<boolean>;
        showRemote: () => void;
        saveRemote: () => void;
        editRemote: (target: any, action: any) => void;
        addKeyValue: (uuid: any, attr: any) => void;
        removeKeyValue: (uuid: any, attr: any, targetIndex: any) => void;
        testRequest: () => void;
        ref: typeof ref;
        reactive: typeof reactive;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        cloneDeep: <T>(value: T) => T;
        isEmpty: (value?: any) => boolean;
        uuid: typeof uuid;
        createRequest: typeof createRequest;
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
        formRef: import("vue").Ref<null>;
        remoteTabsValue: import("vue").Ref<string>;
        remoteDialog: import("vue").Ref<boolean>;
        showRemote: () => void;
        saveRemote: () => void;
        editRemote: (target: any, action: any) => void;
        addKeyValue: (uuid: any, attr: any) => void;
        removeKeyValue: (uuid: any, attr: any, targetIndex: any) => void;
        testRequest: () => void;
        ref: typeof ref;
        reactive: typeof reactive;
        ElMessage: import("element-plus/es/utils").SFCInstallWithContext<import("element-plus").Message>;
        cloneDeep: <T>(value: T) => T;
        isEmpty: (value?: any) => boolean;
        uuid: typeof uuid;
        createRequest: typeof createRequest;
    };
}
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { uuid } from "@giantgo-render/utils/uuid";
import { createRequest } from "@giantgo-render/utils/request";
