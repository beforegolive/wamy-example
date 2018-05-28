var g = typeof window !== 'undefined' && window.Math === Math
  ? window : typeof self !== 'undefined' && self.Math === Math ? self : this;

// if (!g.Promise) {
//   // IOS 10.0.1 may cause IOS crash.
//   g.Promise = require('promise-polyfill');
// }
window.regeneratorRuntime = require('./runtime')
var g = window
console.log('========= g:', g)
console.log('====== g.regeneratorRuntime:', g.regeneratorRuntime)
if (!global.regeneratorRuntime) {
  global.regeneratorRuntime = require('./runtime');
	console.log('====== g.regeneratorRuntime:', g.regeneratorRuntime)
}
