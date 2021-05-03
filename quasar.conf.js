/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli/quasar-conf-js

const { configure } = require('quasar/wrappers');
const path = require('path')

module.exports = configure(function (ctx) {
  return {
    // https://v2.quasar.dev/quasar-cli/supporting-ts
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: false,
          files: './src/**/*.vue'
        }
      }
    },

    // https://v2.quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,


    // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      extendWebpack(cfg) {
        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          vue$: 'vue/dist/vue.esm-bundler.js',
          '@': path.resolve(__dirname, './')
        }
        cfg.resolve.extensions.push('.tsx')
        cfg.module.rules.push({
          test: /\.ts(x?)$/,
          exclude: /(node_modules|quasar)/,
          use: [
            {
              loader: 'babel-loader',
              options: { babelrc: true }
            },
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true

              }
            }
          ]
        })
        cfg.module.rules.push({
          test: /\.tsx$/,
          exclude: /(node_modules|quasar)/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true
              }
            }
          ]
        })
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import stategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: []
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],


    // https://v2.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode
      chainWebpackCustomSW (/* chain */) {
        //
      },

    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

  }
});
