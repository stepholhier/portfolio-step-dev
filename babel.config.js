module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@components': './src/components',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
    '@emotion',
  ],
};
