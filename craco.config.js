const cracoAlias = require('craco-alias')

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ]
}