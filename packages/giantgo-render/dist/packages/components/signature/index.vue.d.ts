export default _sfc_main;
declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    customStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
    images: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, any, {
    signaturePad: {};
    cacheImages: never[];
    signatureData: {
        src: string;
        x: number;
        y: number;
    };
    onResizeHandler: null;
}, {
    propsImagesAndCustomImages(): any[];
}, {
    resizeCanvas(): void;
    saveSignature(type: string | undefined, encoderOptions: any): {
        isEmpty: boolean;
        data: undefined;
    } | {
        data: {
            src: string;
            x: number;
            y: number;
        };
        isEmpty: boolean;
    };
    undoSignature(): any;
    fromDataURL(data: any, options: {} | undefined, callback: any): any;
    fromData(data: any): any;
    toData(): any;
    lockSignaturePad(): any;
    openSignaturePad(): any;
    isEmpty(): any;
    getPropImagesAndCacheImages(): any[];
    clearCacheImages(): never[];
    clearSignature(): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    customStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
    images: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>>, {
    options: Record<string, any>;
    height: string;
    width: string;
    customStyle: Record<string, any>;
    images: unknown[];
}>;
