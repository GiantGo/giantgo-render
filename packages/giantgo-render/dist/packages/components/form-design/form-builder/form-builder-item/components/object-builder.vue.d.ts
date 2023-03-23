export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const pUuid: StringConstructor;
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
        setSelected: any;
        updateFormItem: any;
        add: (evt: any) => any;
        dragStart: (evt: any) => any;
        updateItems: (items: any) => any;
        draggable: import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").DefineComponent<{
            list: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            modelValue: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            itemKey: {
                type: (FunctionConstructor | StringConstructor)[];
                required: boolean;
            };
            clone: {
                type: FunctionConstructor;
                default: (original: any) => any;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            move: {
                type: FunctionConstructor;
                default: any;
            };
            componentData: {
                type: ObjectConstructor;
                required: boolean;
                default: any;
            };
        }, unknown, {
            error: boolean;
        }, {
            realList(): any;
            getKey(): any;
        }, {
            getUnderlyingVm(domElement: any): any;
            getUnderlyingPotencialDraggableComponent(htmElement: any): any;
            emitChanges(evt: any): void;
            alterList(onList: any): void;
            spliceList(): void;
            updatePosition(oldIndex: any, newIndex: any): void;
            getRelatedContextFromMoveEvent({ to, related }: {
                to: any;
                related: any;
            }): any;
            getVmIndexFromDomIndex(domIndex: any): any;
            onDragStart(evt: any): void;
            onDragAdd(evt: any): void;
            onDragRemove(evt: any): void;
            onDragUpdate(evt: any): void;
            computeFutureIndex(relatedContext: any, evt: any): any;
            onDragMove(evt: any, originalEvent: any): any;
            onDragEnd(): void;
        }, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, any[], any, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").VNodeProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").AllowedComponentProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentCustomProps, Readonly<{
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        } & {
            itemKey?: string | Function | undefined;
        }>, {
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        }>;
        inject: typeof inject;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        setSelected: any;
        updateFormItem: any;
        add: (evt: any) => any;
        dragStart: (evt: any) => any;
        updateItems: (items: any) => any;
        draggable: import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").DefineComponent<{
            list: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            modelValue: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            itemKey: {
                type: (FunctionConstructor | StringConstructor)[];
                required: boolean;
            };
            clone: {
                type: FunctionConstructor;
                default: (original: any) => any;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            move: {
                type: FunctionConstructor;
                default: any;
            };
            componentData: {
                type: ObjectConstructor;
                required: boolean;
                default: any;
            };
        }, unknown, {
            error: boolean;
        }, {
            realList(): any;
            getKey(): any;
        }, {
            getUnderlyingVm(domElement: any): any;
            getUnderlyingPotencialDraggableComponent(htmElement: any): any;
            emitChanges(evt: any): void;
            alterList(onList: any): void;
            spliceList(): void;
            updatePosition(oldIndex: any, newIndex: any): void;
            getRelatedContextFromMoveEvent({ to, related }: {
                to: any;
                related: any;
            }): any;
            getVmIndexFromDomIndex(domIndex: any): any;
            onDragStart(evt: any): void;
            onDragAdd(evt: any): void;
            onDragRemove(evt: any): void;
            onDragUpdate(evt: any): void;
            computeFutureIndex(relatedContext: any, evt: any): any;
            onDragMove(evt: any, originalEvent: any): any;
            onDragEnd(): void;
        }, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, any[], any, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").VNodeProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").AllowedComponentProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentCustomProps, Readonly<{
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        } & {
            itemKey?: string | Function | undefined;
        }>, {
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        }>;
        inject: typeof inject;
    };
}
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
