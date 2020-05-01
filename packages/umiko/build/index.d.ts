import React from "react";
import { TextProps } from "react-native";
import { typefaces } from "./typefaces";
declare type UseTypefacesConfig = {
    [typeface in keyof typeof typefaces]?: boolean;
};
export declare function useTypefaces(config: UseTypefacesConfig): boolean;
export declare const Text: React.FC<TextProps>;
export {};
