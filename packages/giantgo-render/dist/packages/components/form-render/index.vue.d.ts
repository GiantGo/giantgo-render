import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { FormDesign } from '../../tokens';
type FormData = {
    [propName: string]: any;
};
declare const _sfc_main: DefineComponent<{}, {
    init: (formDesign?: FormDesign, data?: object) => void;
    submit: () => Promise<unknown>;
    reset: () => void;
    getData(): FormData;
    setData: (key: string, value: any) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "field-change"[], "field-change", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>> & {
    "onField-change"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
