export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const uuid: StringConstructor;
        namespace options {
            export const type: ObjectConstructor;
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        region: {
            value: string;
            label: string;
            children?: any[] | undefined;
        }[];
        reactive: typeof reactive;
        areaTree: import('../../../../../utils').AreaTreeNode[];
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        region: {
            value: string;
            label: string;
            children?: any[] | undefined;
        }[];
        reactive: typeof reactive;
        areaTree: import('../../../../../utils').AreaTreeNode[];
    };
}
import { reactive } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
