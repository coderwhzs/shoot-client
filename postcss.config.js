/*
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-01 15:48:55
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 15:53:52
 */
// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: [
//     './src/**/*.html',
//     './src/**/*.html',
//     './src/**/*.html',
//   ],
//   defaultExtractor: content => content.match(/[\w-/:\\.]+(?<!:)/g) || []
// })

module.exports = {
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss'), require('autoprefixer')]
}
