
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      'react-native-reanimated/plugin',
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
      }],
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            assets: "./src/assets",
            common: "./src/common",
            navigators: "./src/navigators",
            redux: "./src/redux",
            screens: "./src/screens",
            theme: "./src/theme",
            untils: "./src/untils",
            components: "./src/components",
            api: "./src/api"
          },
        },
      ],
    ],
  }
}