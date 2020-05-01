import React, { useState, useEffect, forwardRef } from "react";
import { Text as RNText, TextProps, TextStyle } from "react-native";
import { loadAsync } from "expo-font";

import { typefaces } from "./typefaces";

type UseTypefacesConfig = { [typeface in keyof typeof typefaces]?: boolean };

export function useTypefaces(config: UseTypefacesConfig) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function didMount() {
    async function run() {
      // load fonts using expo-font
      for (const t in config) {
        if (config[t as keyof typeof typefaces])
          await loadAsync(
            typefaces[t as keyof typeof typefaces]
              .fontFamilyNameToFontFileURLMapping
          );
      }

      setIsLoaded(true);
    }
    run();
  }, []);

  return isLoaded;
}

function genCustomStyles(style?: TextStyle) {
  if (style) {
    const { fontWeight, fontFamily, fontStyle } = style as TextStyle;

    if (fontFamily) {
      delete style.fontWeight;
      delete style.fontStyle;
      return {
        ...style,
        fontFamily: Object.keys(typefaces).includes(fontFamily)
          ? typefaces[
              fontFamily as keyof typeof typefaces
            ].weightToFontFamilyNameMapping[fontWeight ?? "normal"](
              (fontStyle ?? "normal") === "italic"
            )
          : undefined,
      };
    } else {
      return style;
    }
  }
  return {};
}

export const Text: React.FC<TextProps> = forwardRef<RNText, TextProps>(
  function Text({ style, ...rest }: TextProps, ref) {
    const styles = (Array.isArray(style) ? style : [style]).map((x) =>
      genCustomStyles(x as TextStyle)
    );

    return <RNText ref={ref} style={styles} {...rest} />;
  }
);
