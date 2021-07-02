/*
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-02 14:31:06
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 16:29:41
 */
module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // 配置 jest 下 @ -> src
  }
}
