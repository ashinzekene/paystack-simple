const path = require('path');

module.exports = {
  entry: './paystack.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'paystack.js',
    library: 'Paystack',
    libraryTarget: 'umd',
  },
  mode: 'production',
};
