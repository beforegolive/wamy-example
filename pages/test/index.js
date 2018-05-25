// pages/test/index.js

Page({

  data: {
    name: getApp().globalData.name,
    pageName: 'page test'
  },

})

async function abc(){
  console.log('123123123')
}

class A {
  myName(){}
  data=123
}

class B extends A {
  // static data={myName:'abc'}

  async customLoad(){
    console.log('=== customLoad:',)
  }
}
