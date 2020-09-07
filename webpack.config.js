const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

module.exports = {
  entry: {
  	main: './src/index.js',
  	project: './src/projects.js'
  }
};

