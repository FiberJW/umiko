"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var host = "https://github.com/FiberJW/umiko/raw/master";
exports.typefaces = {
    Inter: {
        weightToFontFamilyNameMapping: {
            normal: function (italic) { return "Inter" + (italic ? "-Italic" : "-Regular"); },
            bold: function (italic) { return "Inter-Bold" + (italic ? "Italic" : ""); },
            "100": function (italic) { return "Inter-Thin" + (italic ? "Italic" : ""); },
            "200": function (italic) { return "Inter-ExtraLight" + (italic ? "Italic" : ""); },
            "300": function (italic) { return "Inter-Light" + (italic ? "Italic" : ""); },
            "400": function (italic) { return "Inter" + (italic ? "-Italic" : "-Regular"); },
            "500": function (italic) { return "Inter-Medium" + (italic ? "Italic" : ""); },
            "600": function (italic) { return "Inter-SemiBold" + (italic ? "Italic" : ""); },
            "700": function (italic) { return "Inter-Bold" + (italic ? "Italic" : ""); },
            "800": function (italic) { return "Inter-ExtraBold" + (italic ? "Italic" : ""); },
            "900": function (italic) { return "Inter-Black" + (italic ? "Italic" : ""); },
        },
        fontFamilyNameToFontFileURLMapping: {
            "Inter-Regular": host + "/typefaces/Inter-3.1.3/Inter-Regular.otf",
            "Inter-Italic": host + "/typefaces/Inter-3.1.3/Inter-Italic.otf",
            "Inter-Bold": host + "/typefaces/Inter-3.1.3/Inter-Bold.otf",
            "Inter-BoldItalic": host + "/typefaces/Inter-3.1.3/Inter-BoldItalic.otf",
            "Inter-Thin": host + "/typefaces/Inter-3.1.3/Inter-Thin.otf",
            "Inter-ThinItalic": host + "/typefaces/Inter-3.1.3/Inter-ThinItalic.otf",
            "Inter-ExtraLight": host + "/typefaces/Inter-3.1.3/Inter-ExtraLight.otf",
            "Inter-ExtraLightItalic": host + "/typefaces/Inter-3.1.3/Inter-ExtraLightItalic.otf",
            "Inter-Light": host + "/typefaces/Inter-3.1.3/Inter-Light.otf",
            "Inter-LightItalic": host + "/typefaces/Inter-3.1.3/Inter-LightItalic.otf",
            "Inter-Medium": host + "/typefaces/Inter-3.1.3/Inter-Medium.otf",
            "Inter-MediumItalic": host + "/typefaces/Inter-3.1.3/Inter-MediumItalic.otf",
            "Inter-SemiBold": host + "/typefaces/Inter-3.1.3/Inter-SemiBold.otf",
            "Inter-SemiBoldItalic": host + "/typefaces/Inter-3.1.3/Inter-SemiBoldItalic.otf",
            "Inter-ExtraBold": host + "/typefaces/Inter-3.1.3/Inter-ExtraBold.otf",
            "Inter-ExtraBoldItalic": host + "/typefaces/Inter-3.1.3/Inter-ExtraBoldItalic.otf",
            "Inter-Black": host + "/typefaces/Inter-3.1.3/Inter-Black.otf",
            "Inter-BlackItalic": host + "/typefaces/Inter-3.1.3/Inter-BlackItalic.otf",
        },
    },
};
