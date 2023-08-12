module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@src": "./src",
          "@assets": "./src/assets",
          "@commons": "./src/commons",
          "@configs": "./src/configs",
          "@constants": "./src/constants",
          "@helpers": "./src/helpers",
          "@navigation": "./src/navigation",
          "@core-ui": "./src/core-ui",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
