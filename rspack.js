const { VueLoaderPlugin } = require('vue-rsloader')
const { createCompiler } = require('@rspack/core')
const { RspackDevServer } = require('@rspack/dev-server')

const isDev = process.env.NODE_ENV === 'development' || process.argv[2] !== 'build'

const compiler = createCompiler({
  entry: {
    main: './src/main.ts',
  },
  mode: isDev ? 'development' : 'production',
  resolve: {
    alias: {
      '~': './src',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
      },
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
  devServer: {
    hot: true,
  },
  builtins: {
    define: {
      'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false,
    },
    html: [{
      template: './index.html',
    }],
    copy: {
      patterns: ['./public'],
    },
  },
  experiments: {
    incrementalRebuild: true,
  },
})

if (!isDev) {
  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    // eslint-disable-next-line no-console
    console.log(stats?.toString({ colors: true }))
  })
}
else {
  const server = new RspackDevServer({
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  }, compiler)
  server.start()
}
