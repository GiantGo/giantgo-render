import type { FormDesign, Options } from '@giantgo-render/tokens';
export declare function useOptions(props: any, key: string, formDesign: FormDesign): {
    items: import("vue").Ref<{
        label: string;
        value: string;
    }[]>;
    requestItems: (options: Options) => void;
};
