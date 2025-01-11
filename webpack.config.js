const path = require('path');

module.exports = {
  mode: 'development',  // Bisa diubah ke 'production' jika Anda ingin build untuk produksi
  entry: './src/index.js',  // Titik masuk (entry point) untuk Webpack
  output: {
    filename: 'bundle.js',  // Nama file output
    path: path.resolve(__dirname, 'dist'),  // Folder output
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Menangani file JavaScript
        exclude: /node_modules/,  // Mengabaikan node_modules
        use: {
          loader: 'babel-loader',  // Menggunakan Babel untuk transpilasi
        },
      },
    ],
  },
};
