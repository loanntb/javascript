//fuction arguments
/**
 * parameters: function a(name1, nam2): tham số  định nghĩa hàm
 * arguments: a('meo', 'meo'): đối số truyền vào
 */

 function sayHi(name){
     console.log(arguments);
     console.log(typeof arguments);
 }
 sayHi('meo','meo', 5);

 //fuction overloading: chạy hàm trên định nghĩa, dưới có sayHi bỏ cái bên trên
 function sayHi(first, last){
     console.log('Hi', first + '' + midde + '' +last);
     console.log(3);
 }
//  function sayHi(first, last){
//      console.log('Hi', first + '' + last);
//      console.log(2);
//  }
 sayHi('Meo', 'Meo');
 sayHi('Meo', 'Meo', 'Meo');
//dùng argument thay thế
 function sayHi(first, last){
     let midde =  arguments[2] || '';
     console.log('Hi, ' + first + ' ' + midde + ' ' +last);
 }
 // default arguments gán giá trị khi khai báo hàm, giá trị mặc định

function pay(total, tips = 0, tax = 0){

    // tips = tips || 0

    // if (tips === undefined ){
    //     tips = 0
    // }

    return total + tips + tax*0.2
}

console.log(pay(100,null,5))

//Function declaration(statment) vs Function Expressions

function sayHi(name){
    console.log('in the function ne')
}

function sayHi2(name){
    console.log('in the function ne 2')
}
sayHi
// var hi = function(name){
//     console.log(name)
//     return true
// }('Meo') //chạy ngay luôn :D

(function(){
    var name = 'Loan'
    console.log(name)
    console.log(this)
}())

var name = 'Loan'
//closure

function talkTo(people){
    var age = 18
    return function send(message){
       // debugger
        console.log('Hi, '+ people + ' ' + message + age ) 
    }
}

var hi = talkTo('Khoa')

console.log(hi)

hi('meo meo')


//closure return object

function getUserId(){
    var id = 69
    return {
        getId: function(){
            return 'id: ' + id
        },
        setId: function(newId){
            id = newId
            return 'id: ' + id
        }
    }
}

var userId = getUserId()

console.log(userId)

console.log(userId.getId())

userId.setId(96)

console.log(userId.getId())

//closure return array var : 3, let: 0 1 2

function functionCreator(){
    var arrays = []
    
    for (let i = 0; i < 3; i++ ){
         arrays[i] = function(){
             console.log(i)
         }
    }
    
    return arrays // array of functions
}

var showNumbers = functionCreator()

// console.log(showNumbers[0])

showNumbers[0]()
showNumbers[1]()
showNumbers[2]()

//call back bỏ B vào A, B xong thì nhớ chạy A

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function downloadAvatar(url, onSuccess ){
  
      console.log('start downloading avatar')
      // tai avatar
  
      await sleep(3000)
  
      // tai xong thi update avatar 
  
      console.log('finish downloading avatar')
      onSuccess()
  }
  
  // downloadAvatar('url', function(){
  //     console.log('updated avatar')
  // })
  
  setTimeout( function(){
      alert('HI')
  }, 3000   ) 
  
  //bind, call and apply
  /**
   * bind
   * apply: a means array
   * call:  chạy hàm luôn
   */
  var meo = {
    firstname: 'meo',
    lastname: 'meo',
    showName: function(){
        console.log(this.firstname +  ' '  + this.lastname)
    }
}
// function borrowing

var linh = {
    firstname: 'Linh',
    lastname: 'Nguyen'
}

// meo.showName.call(linh)
// var sayIntro = displayName.bind(meo)
var sayIntro = displayName.bind(meo, 22, 'NA')
//var sayIntro = displayName.apply(meo,[22,'NA'])
// sayIntro(22,'NA')
// IEFE
meo.showName.bind(linh)()// phải auto chạy hàm -> okay

function displayName(age,address){
     console.log(this.firstname +  ' '  + this.lastname)
     console.log(age + ' ' + address )
     return true
}











