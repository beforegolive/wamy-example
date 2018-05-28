// pages/test/index.js
// require('wepy-async-function')
// require('../../lib/global')
// import regeneratorRuntime from 'regenerator-runtime/runtime';
// console.log('========== this', this)
// console.log('========== self', self)
// console.log('========== window', window)
// // window.regeneratorRuntime = ()=>{ console.log('!!!!!!!!!!!!!!!!!!!!')}
// console.log('=== regeneratorRuntime:', regeneratorRuntime)

// var regeneratorRuntime = require('../../lib/runtime')
// console.log('=== regeneratorRuntime:', regeneratorRuntime)

Page({

  data: {
    name: getApp().globalData.name,
    pageName: 'page test'
  },

})

// async function abc(){
//   console.log('123123123')
// }

class A {
  myName(){}
  data=123
}

class B extends A {
  // static data={myName:'abc'}

  // async customLoad(){
  //   console.log('=== customLoad:',)
  // }
}
