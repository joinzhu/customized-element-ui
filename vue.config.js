const path = require('path')
const { name } = require('./package')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  publicPath: NODE_ENV !== 'development' ? '/uidoc' : '/',
  css: {
    extract: true
  },
  pluginOptions: {
    windicss: {},
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/assets/css/a-client.less')]
    }
  },
  chainWebpack(config) {
    config.module
      .rule('dotmd')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        ...(config.module.rules
          .get('vue')
          .uses.get('vue-loader')
          .get('options') || null)
      })
      .end()
      .use('vue-dotmd-loader')
      .loader('vue-dotmd-loader')
      .options({
        dest: true,
        markdown: {
          options: {
            html: true
          }
        }
      })
      .end()
  },
  configureWebpack: {
    // devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',
    resolve: {
      extensions: ['.md']
    }
  },
  devServer: {
    publicPath: '/',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 8889,
    hot: true,
    open: true,
    proxy: {
      '/services': {
        target: 'http://app.test.eline56-inc.com',
        pathRewrite: { '^/': '' }
      }
    }
  }
}
