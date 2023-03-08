const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo principal de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardarán los archivos de salida
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      // Reglas para procesar diferentes tipos de archivos
      // Ejemplo para procesar archivos JS con Babel:
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  // Otras configuraciones opcionales
};
