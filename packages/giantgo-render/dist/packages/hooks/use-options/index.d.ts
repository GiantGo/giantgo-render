import type { Ref } from '@vue/reactivity';
import type { FormDesign, Options } from '@giantgo-render/tokens';
export declare function useOptions(props: any, key: string, formDesign: FormDesign): {
    items: Ref<{
        label: string;
        value: string;
    }[]>;
    requestItems: (options: Options) => void;
};
