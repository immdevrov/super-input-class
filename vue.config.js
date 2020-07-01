/* eslint-disable @typescript-eslint/no-var-requires */
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        plugins: () => [
          postcssPresetEnv(/* pluginOptions */)
        ]
      }
    }
  }
}
