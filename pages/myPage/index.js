// import regeneratorRuntime from 'regenerator-runtime/runtime';
// import 'wepy-async-function'
import wamy from 'wamy'
import { connect } from 'wamy-redux'
// var regeneratorRuntime = require('../../lib/runtime')
// console.log('=== regeneratorRuntime:', regeneratorRuntime)


function getPromise() {
  let seconds = 3
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`wait for ${seconds}, and promise ends`)
    }, seconds * 1000)
  })
}

const mapStateToProps = state => {
  return {
    name: !!state.reducer1.switchValue
  }
}

// const mapDispatchToProps = state

// 这种方式的wrapper操作的结果是：给target类创造了一个继承它的子类，并返回对应的实例
// subType ---> target ---> super_target
//
// 注意事项：
// 1. subType实例的构造函数访问到的是subType函数的prototype, 之前target变成了prototype第二层。
// 2. subType的实例包含MyPage中定义的属性。

@connect(mapStateToProps)
export default class MyPage extends wamy.page {
  data = {
    name: 123,
    myName: 'abc'
  }

  logFunction() {
    console.log('===== logFunction:')
  }

  onLoad() {
    console.log('======== MyPage onLoad 事件')
  }

  async asyncLog() {
    console.log('===== asyncLog start')
    const promiseValue = await getPromise()
    console.log('===', promiseValue)
  }

  invokeWrapperMethod() {
    var name = this.getWrapperName()
    console.log('=== invokeWrapperMethod value:', name)
  }
}
