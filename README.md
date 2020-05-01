<p align="center">
  <img alt="banner" src="./banner.gif">
</p>

<h3 align="center" style="font-weight:600">

`umiko`

</h3>

<p align="center">
  Use popular fonts in Expo apps the way you would on the Web.
</p>

---

<div align="center">

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff)](https://github.com/expo/expo)

</div>

This library was inspired by the realization that `expo-fonts` can load fonts from remote URLs and that when you set up fonts in your Expo/RN app, you have to do more ceremony than you have to do on the web.

In RN, you have to specify a different `fontFamily` for different weights of the same typeface rather than just being able to specify a `fontWeight` and resolve to the right file as you are able to do on the web with `@font-face` in CSS.

The initial version of the library will support `'Inter'` and `'Manrope'`, but hopefully it's simple enough for you to be able to PR in other typefaces that you want to use this way easily.

Check out the [demo](./packages/demo/App.tsx) to learn more about how to use it.
