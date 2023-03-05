// /**
//  * Question 1
//  */

//  var name = 'window'

//  var person1 = {
//    name: 'person1',
//    show1: function () {
//      console.log(this.name)
//    },
//    show2: () => console.log(this.name),
//    show3: function () {
//      return function () {
//        console.log(this.name)
//      }
//    },
//    show4: function () {
//      return () => console.log(this.name)
//    }
//  }
//  var person2 = { name: 'person2' }

//  person1.show1()
//  person1.show1.call(person2)

//  person1.show2() //show2方法中的箭头函数this指向定义时的上下文，此处为全局上下文对象，即window（非严格模式下）
//  person1.show2.call(person2)

//  person1.show3()()
//  person1.show3().call(person2)
//  person1.show3.call(person2)()

//  person1.show4()()
//  person1.show4().call(person2)
//  person1.show4.call(person2)()


/**
 * Question 2
 */
var name = 'window'

function Person(name) {
    this.name = name;
    this.show1 = function () {
        console.log(this.name)
    }
    this.show2 = () => console.log(this.name)
    this.show3 = function () {
        return function () {
            console.log(this.name)
        }
    }
    this.show4 = function () {
        return () => console.log(this.name)
    }
}

var personA = new Person('personA')
var personB = new Person('personB')

personA.show1()
personA.show1.call(personB)

personA.show2()//在new的时候，会将方法中的this指向实例，所以此处箭头函数在调用时内部的this就是personA
personA.show2.call(personB)

personA.show3()()
personA.show3().call(personB)
personA.show3.call(personB)()

personA.show4()()
personA.show4().call(personB)
personA.show4.call(personB)()