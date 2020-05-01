export type Weights =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type FontFamilyNameToFontFileURLMapping = {
  [name: string]: string;
};

type WeightToFontFamilyNameMapping = {
  [weight in Weights]: (italic: boolean) => string;
};

type TypefaceNames = "Inter";

type TypefaceConfigs = {
  [typefaceName in TypefaceNames]: {
    weightToFontFamilyNameMapping: WeightToFontFamilyNameMapping;
    fontFamilyNameToFontFileURLMapping: FontFamilyNameToFontFileURLMapping;
  };
};

const host = "https://raw.githubusercontent.com/FiberJW/umiko/master";

export const typefaces: TypefaceConfigs = {
  Inter: {
    weightToFontFamilyNameMapping: {
      normal: (italic) => "Inter" + (italic ? "-Italic" : "-Regular"),
      bold: (italic) => "Inter-Bold" + (italic ? "Italic" : ""),
      "100": (italic) => "Inter-Thin" + (italic ? "Italic" : ""),
      "200": (italic) => "Inter-ExtraLight" + (italic ? "Italic" : ""),
      "300": (italic) => "Inter-Light" + (italic ? "Italic" : ""),
      "400": (italic) => "Inter" + (italic ? "-Italic" : "-Regular"),
      "500": (italic) => "Inter-Medium" + (italic ? "Italic" : ""),
      "600": (italic) => "Inter-SemiBold" + (italic ? "Italic" : ""),
      "700": (italic) => "Inter-Bold" + (italic ? "Italic" : ""),
      "800": (italic) => "Inter-ExtraBold" + (italic ? "Italic" : ""),
      "900": (italic) => "Inter-Black" + (italic ? "Italic" : ""),
    },
    fontFamilyNameToFontFileURLMapping: {
      "Inter-Regular": host + "/typefaces/Inter-3.1.3/Inter-Regular.otf",
      "Inter-Italic": host + "/typefaces/Inter-3.1.3/Inter-Italic.otf",
      "Inter-Bold": host + "/typefaces/Inter-3.1.3/Inter-Bold.otf",
      "Inter-BoldItalic": host + "/typefaces/Inter-3.1.3/Inter-BoldItalic.otf",
      "Inter-Thin": host + "/typefaces/Inter-3.1.3/Inter-Thin.otf",
      "Inter-ThinItalic": host + "/typefaces/Inter-3.1.3/Inter-ThinItalic.otf",
      "Inter-ExtraLight": host + "/typefaces/Inter-3.1.3/Inter-ExtraLight.otf",
      "Inter-ExtraLightItalic":
        host + "/typefaces/Inter-3.1.3/Inter-ExtraLightItalic.otf",
      "Inter-Light": host + "/typefaces/Inter-3.1.3/Inter-Light.otf",
      "Inter-LightItalic":
        host + "/typefaces/Inter-3.1.3/Inter-LightItalic.otf",
      "Inter-Medium": host + "/typefaces/Inter-3.1.3/Inter-Medium.otf",
      "Inter-MediumItalic":
        host + "/typefaces/Inter-3.1.3/Inter-MediumItalic.otf",
      "Inter-SemiBold": host + "/typefaces/Inter-3.1.3/Inter-SemiBold.otf",
      "Inter-SemiBoldItalic":
        host + "/typefaces/Inter-3.1.3/Inter-SemiBoldItalic.otf",
      "Inter-ExtraBold": host + "/typefaces/Inter-3.1.3/Inter-ExtraBold.otf",
      "Inter-ExtraBoldItalic":
        host + "/typefaces/Inter-3.1.3/Inter-ExtraBoldItalic.otf",
      "Inter-Black": host + "/typefaces/Inter-3.1.3/Inter-Black.otf",
      "Inter-BlackItalic":
        host + "/typefaces/Inter-3.1.3/Inter-BlackItalic.otf",
    },
  },
};
