import type { Ref } from 'vue';
import type { FormDesign, Options } from '../../tokens';
export declare function useOptions(props: any, key: string, formDesign: FormDesign): {
    items: Ref<{
        label: string;
        value: string;
    }[]>;
    requestItems: (options: Options) => void;
};
