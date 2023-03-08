// 似乎 @rspack/cli 有些问题

const { VueLoaderPlugin } = require('vue-rsloader')

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/main.ts',
  },
  resolve: {
    alias: {
      '~': './src',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: require.resolve('vue-rsloader'),
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  builtins: {
    define: {
    },
    treeShaking: true,
    html: [{
      template: './index.html',
    }],
    copy: {
      patterns: ['./public'],
    },
  },
  experiments: {
    incrementalRebuild: false,
  },
}

module.exports = config
