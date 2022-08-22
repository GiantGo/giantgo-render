export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const uuid: StringConstructor;
        namespace items {
            export const type: ArrayConstructor;
            function _default(): never[];
            function _default(): never[];
            export { _default as default };
        }
        namespace options {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        updateFormItem: any;
        updateFormOption: any;
        tabsValue: import("vue").Ref<string>;
        tabDialog: {
            title: string;
            isShow: boolean;
        };
        formRef: import("vue").Ref<null>;
        rules: {
            label: {
                required: boolean;
                message: string;
                trigger: string;
            }[];
            key: {
                required: boolean;
                message: string;
                trigger: string;
            }[];
        };
        tabForm: {
            uuid: string;
            label: string;
            key: string;
        };
        addTab: () => void;
        editTab: () => void;
        removeTab: () => void;
        saveTab: () => void;
        ref: typeof ref;
        inject: typeof inject;
        reactive: typeof reactive;
        nextTick: typeof nextTick;
        objectLayout: import("@giantgo-render/tokens").FormDesign;
        cloneDeep: <T>(value: T) => T;
        uuid: typeof uuid;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        updateFormItem: any;
        updateFormOption: any;
        tabsValue: import("vue").Ref<string>;
        tabDialog: {
            title: string;
            isShow: boolean;
        };
        formRef: import("vue").Ref<null>;
        rules: {
            label: {
                required: boolean;
                message: string;
                trigger: string;
            }[];
            key: {
                required: boolean;
                message: string;
                trigger: string;
            }[];
        };
        tabForm: {
            uuid: string;
            label: string;
            key: string;
        };
        addTab: () => void;
        editTab: () => void;
        removeTab: () => void;
        saveTab: () => void;
        ref: typeof ref;
        inject: typeof inject;
        reactive: typeof reactive;
        nextTick: typeof nextTick;
        objectLayout: import("@giantgo-render/tokens").FormDesign;
        cloneDeep: <T>(value: T) => T;
        uuid: typeof uuid;
    };
}
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { nextTick } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { uuid as uuid_1 } from "@giantgo-render/utils/uuid";
