
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
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
            components: "./src/components"
          },
        },
      ],
    ],
  }
}