import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Remote, FormDesign } from '../../tokens';
declare const _sfc_main: DefineComponent<{
    fields: {
        type: ArrayConstructor;
        default(): never[];
    };
}, {
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
            remotes?: Record<string, Remote> | undefined;
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
            size?: "" | "default" | "small" | "large" | undefined;
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
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    fields: {
        type: ArrayConstructor;
        default(): never[];
    };
}>>, {
    fields: unknown[];
}>;
export default _sfc_main;
