// ESM - 브라우저에서 동작할 때 사용
// CommonJS - node.js 환경에서 동작할 때 사용

//import autoprefixer from 'autoprefixer'
// const autoprefixer = require("autoprefixer");

//export {
//   plugins: [autoprefixer],
// };
// module.exports = {
//   plugins: [autoprefixer],
// };

module.exports = {
  plugins: [require("autoprefixer")],
};
