import type { FormDesign } from '@giantgo-render/tokens';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            fields: unknown[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            fields: {
                type: ArrayConstructor;
                default(): never[];
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "fields">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            fields: {
                type: ArrayConstructor;
                default(): never[];
            };
        }>>, {
            init: (config?: FormDesign) => void;
            register: (name?: string, components?: Array<FormDesign>, order?: number) => void;
            getJson: () => {
                name: string;
                component: string;
                uuid: string;
                options: {
                    [x: string]: any;
                    activeColor?: string | undefined;
                    activeText?: string | undefined;
                    allowHalf?: boolean | undefined;
                    backgroundColor?: string | undefined;
                    border?: boolean | undefined;
                    buttonText?: string | undefined;
                    clearable?: boolean | undefined;
                    collapseTags?: boolean | undefined;
                    content?: string | undefined;
                    defaultValue?: any;
                    disabled?: boolean | undefined;
                    expandTrigger?: string | undefined;
                    fileSuffix?: string[] | undefined;
                    filterable?: boolean | undefined;
                    format?: string | undefined;
                    gutter?: number | undefined;
                    height?: string | undefined;
                    hidden?: boolean | undefined;
                    hideRequiredAsterisk?: boolean | undefined;
                    imageSuffix?: string[] | undefined;
                    inactiveColor?: string | undefined;
                    inactiveText?: string | undefined;
                    inline?: boolean | undefined;
                    key?: string | undefined;
                    labelPosition?: "left" | "right" | "top" | undefined;
                    labelWidth?: string | undefined;
                    label?: string | undefined;
                    limit?: number | undefined;
                    lineHeight?: string | undefined;
                    max?: number | undefined;
                    maxlength?: number | undefined;
                    min?: number | undefined;
                    multipleLimit?: number | undefined;
                    multiple?: boolean | undefined;
                    noDataText?: string | undefined;
                    noMatchText?: string | undefined;
                    options?: {
                        type: string;
                        remote: string;
                        items: {
                            label: string;
                            value: string;
                        }[];
                    } | undefined;
                    padding?: string | undefined;
                    penColor?: string | undefined;
                    placeholder?: string | undefined;
                    prefixIcon?: string | undefined;
                    remotes?: Record<string, import("@giantgo-render/tokens").Remote> | undefined;
                    richContent?: string | undefined;
                    rows?: number | undefined;
                    rules?: [required: {
                        required: boolean;
                        message: string;
                        trigger: string;
                    }, ...prop: {
                        pattern: string;
                        message: string;
                        trigger: string;
                    }[]] | undefined;
                    shadow?: string | undefined;
                    showAlpha?: boolean | undefined;
                    showFileList?: boolean | undefined;
                    showInput?: boolean | undefined;
                    showPassword?: boolean | undefined;
                    showStops?: boolean | undefined;
                    showToolTip?: boolean | undefined;
                    showWordLimit?: boolean | undefined;
                    size?: "" | "small" | "default" | "large" | undefined;
                    statusIcon?: boolean | undefined;
                    step?: number | undefined;
                    suffixIcon?: string | undefined;
                    tabPosition?: string | undefined;
                    tabType?: string | undefined;
                    tip?: string | undefined;
                    uploadData?: any;
                    uploadHeaders?: Record<string, string> | undefined;
                    uploadName?: string | undefined;
                    uploadSize?: string | undefined;
                    uploadUrl?: string | undefined;
                    width?: string | undefined;
                };
                items?: any[] | undefined;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            fields: unknown[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        fields: {
            type: ArrayConstructor;
            default(): never[];
        };
    }>> & import("vue").ShallowUnwrapRef<{
        init: (config?: FormDesign) => void;
        register: (name?: string, components?: Array<FormDesign>, order?: number) => void;
        getJson: () => {
            name: string;
            component: string;
            uuid: string;
            options: {
                [x: string]: any;
                activeColor?: string | undefined;
                activeText?: string | undefined;
                allowHalf?: boolean | undefined;
                backgroundColor?: string | undefined;
                border?: boolean | undefined;
                buttonText?: string | undefined;
                clearable?: boolean | undefined;
                collapseTags?: boolean | undefined;
                content?: string | undefined;
                defaultValue?: any;
                disabled?: boolean | undefined;
                expandTrigger?: string | undefined;
                fileSuffix?: string[] | undefined;
                filterable?: boolean | undefined;
                format?: string | undefined;
                gutter?: number | undefined;
                height?: string | undefined;
                hidden?: boolean | undefined;
                hideRequiredAsterisk?: boolean | undefined;
                imageSuffix?: string[] | undefined;
                inactiveColor?: string | undefined;
                inactiveText?: string | undefined;
                inline?: boolean | undefined;
                key?: string | undefined;
                labelPosition?: "left" | "right" | "top" | undefined;
                labelWidth?: string | undefined;
                label?: string | undefined;
                limit?: number | undefined;
                lineHeight?: string | undefined;
                max?: number | undefined;
                maxlength?: number | undefined;
                min?: number | undefined;
                multipleLimit?: number | undefined;
                multiple?: boolean | undefined;
                noDataText?: string | undefined;
                noMatchText?: string | undefined;
                options?: {
                    type: string;
                    remote: string;
                    items: {
                        label: string;
                        value: string;
                    }[];
                } | undefined;
                padding?: string | undefined;
                penColor?: string | undefined;
                placeholder?: string | undefined;
                prefixIcon?: string | undefined;
                remotes?: Record<string, import("@giantgo-render/tokens").Remote> | undefined;
                richContent?: string | undefined;
                rows?: number | undefined;
                rules?: [required: {
                    required: boolean;
                    message: string;
                    trigger: string;
                }, ...prop: {
                    pattern: string;
                    message: string;
                    trigger: string;
                }[]] | undefined;
                shadow?: string | undefined;
                showAlpha?: boolean | undefined;
                showFileList?: boolean | undefined;
                showInput?: boolean | undefined;
                showPassword?: boolean | undefined;
                showStops?: boolean | undefined;
                showToolTip?: boolean | undefined;
                showWordLimit?: boolean | undefined;
                size?: "" | "small" | "default" | "large" | undefined;
                statusIcon?: boolean | undefined;
                step?: number | undefined;
                suffixIcon?: string | undefined;
                tabPosition?: string | undefined;
                tabType?: string | undefined;
                tip?: string | undefined;
                uploadData?: any;
                uploadHeaders?: Record<string, string> | undefined;
                uploadName?: string | undefined;
                uploadSize?: string | undefined;
                uploadUrl?: string | undefined;
                width?: string | undefined;
            };
            items?: any[] | undefined;
        };
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    fields: {
        type: ArrayConstructor;
        default(): never[];
    };
}>>, {
    init: (config?: FormDesign) => void;
    register: (name?: string, components?: Array<FormDesign>, order?: number) => void;
    getJson: () => {
        name: string;
        component: string;
        uuid: string;
        options: {
            [x: string]: any;
            activeColor?: string | undefined;
            activeText?: string | undefined;
            allowHalf?: boolean | undefined;
            backgroundColor?: string | undefined;
            border?: boolean | undefined;
            buttonText?: string | undefined;
            clearable?: boolean | undefined;
            collapseTags?: boolean | undefined;
            content?: string | undefined;
            defaultValue?: any;
            disabled?: boolean | undefined;
            expandTrigger?: string | undefined;
            fileSuffix?: string[] | undefined;
            filterable?: boolean | undefined;
            format?: string | undefined;
            gutter?: number | undefined;
            height?: string | undefined;
            hidden?: boolean | undefined;
            hideRequiredAsterisk?: boolean | undefined;
            imageSuffix?: string[] | undefined;
            inactiveColor?: string | undefined;
            inactiveText?: string | undefined;
            inline?: boolean | undefined;
            key?: string | undefined;
            labelPosition?: "left" | "right" | "top" | undefined;
            labelWidth?: string | undefined;
            label?: string | undefined;
            limit?: number | undefined;
            lineHeight?: string | undefined;
            max?: number | undefined;
            maxlength?: number | undefined;
            min?: number | undefined;
            multipleLimit?: number | undefined;
            multiple?: boolean | undefined;
            noDataText?: string | undefined;
            noMatchText?: string | undefined;
            options?: {
                type: string;
                remote: string;
                items: {
                    label: string;
                    value: string;
                }[];
            } | undefined;
            padding?: string | undefined;
            penColor?: string | undefined;
            placeholder?: string | undefined;
            prefixIcon?: string | undefined;
            remotes?: Record<string, import("@giantgo-render/tokens").Remote> | undefined;
            richContent?: string | undefined;
            rows?: number | undefined;
            rules?: [required: {
                required: boolean;
                message: string;
                trigger: string;
            }, ...prop: {
                pattern: string;
                message: string;
                trigger: string;
            }[]] | undefined;
            shadow?: string | undefined;
            showAlpha?: boolean | undefined;
            showFileList?: boolean | undefined;
            showInput?: boolean | undefined;
            showPassword?: boolean | undefined;
            showStops?: boolean | undefined;
            showToolTip?: boolean | undefined;
            showWordLimit?: boolean | undefined;
            size?: "" | "small" | "default" | "large" | undefined;
            statusIcon?: boolean | undefined;
            step?: number | undefined;
            suffixIcon?: string | undefined;
            tabPosition?: string | undefined;
            tabType?: string | undefined;
            tip?: string | undefined;
            uploadData?: any;
            uploadHeaders?: Record<string, string> | undefined;
            uploadName?: string | undefined;
            uploadSize?: string | undefined;
            uploadUrl?: string | undefined;
            width?: string | undefined;
        };
        items?: any[] | undefined;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    fields: unknown[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
