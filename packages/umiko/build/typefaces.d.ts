export declare type Weights = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
declare type FontFamilyNameToFontFileURLMapping = {
    [name: string]: string;
};
declare type WeightToFontFamilyNameMapping = {
    [weight in Weights]: (italic: boolean) => string;
};
declare type TypefaceNames = "Inter";
declare type TypefaceConfigs = {
    [typefaceName in TypefaceNames]: {
        weightToFontFamilyNameMapping: WeightToFontFamilyNameMapping;
        fontFamilyNameToFontFileURLMapping: FontFamilyNameToFontFileURLMapping;
    };
};
export declare const typefaces: TypefaceConfigs;
export {};
