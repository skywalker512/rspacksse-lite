import { VueLoaderPlugin } from 'vue-rsloader'
import rehypeHighlight from 'rehype-highlight'
import emoji from 'remark-emoji'
import images from 'remark-images'

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
  // vue source map not work (webpack work well)
  // and devtool will change hmr file range ??
  devtool: false,
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {
              providerImportSource: '@mdx-js/vue',
              jsx: true,
              rehypePlugins: [rehypeHighlight],
              remarkPlugins: [emoji, images],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-rsloader',
            /** @type {import('vue-rsloader').VueLoaderOptions} */
            options: {
              reactivityTransform: true,
            },
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
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  builtins: {
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    },
    html: [{
      template: './index.html',
    }],
    copy: {
      patterns: ['./public'],
    },
  },
}

export default config
