import type { ComputedRef } from 'vue';
export default _sfc_main;
declare namespace _sfc_main {
    const name: string;
    const components: undefined;
    namespace props {
        const path: StringConstructor;
        const component: StringConstructor;
        const pUuid: StringConstructor;
        const uuid: StringConstructor;
        const defaultValue: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor | DateConstructor | ArrayConstructor)[];
        namespace items {
            export const type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        namespace options {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {};
            export { _default as default };
        }
    }
    function setup(props: any): {
        select: () => any;
        mouseenter: () => any;
        mouseleave: () => any;
        copy: () => any;
        remove: () => any;
        isSelected: ComputedRef<boolean>;
        isHover: ComputedRef<boolean>;
    };
}
