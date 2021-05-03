/* eslint-env node */

module.exports = (api) => {
  return {
    plugins: ['@vue/babel-plugin-jsx', 'import-directory',
      'babel-plugin-import-dir',
      [
        'wildcard',
        {
          exts: ['js', 'ts']
        }
      ]
    ],
    presets: [
      '@babel/env',
      [
        '@quasar/babel-preset-app',
        api.caller((caller) => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {}
      ]
    ]
  }
}
