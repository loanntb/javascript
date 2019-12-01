/**
 * let var const
 * var có thể khai báo chồng lên nhau. Ex
 * var id =  123; var id = 123
 * let a = 5
 * a = 6 //ok
 * const a = 5
 * a = 6 //no
 * when?
 * 
 */

var arrays = []

for ( let i = 0 ; i < 5; i++  ){
    arrays[i] = function(){
        console.log(i)
    }
    //không nên xài var
}

if (true){
     // let/const
}


// console.log('i = ' + i)
arrays[0]()
arrays[1]()
arrays[2]()
arrays[3]()
arrays[4]()
//var 5



// Arrow Function
/**
 * 
 */

var hi = function(){
   // console.log('Hi')
   console.log(this);
}
var sayHello = ()=>{
    console.log(this);
}
hi();
sayHello();
  //var hello =  name  => console.log('Hi ' + name) 1 tham số
  var hello = (name, message) =>{
    console.log('Hi ' + name + '' + message)
  }
  
  hello('meo', 'say hi')
  
  
  var numbers = [1,2,3,13,12]
  
  numbers.forEach( i => console.log(i) )
//   numbers.forEach(function(i){
//       console.log(i)
//   })

/**
 * fuction thường: this là cái cha là user
 * arrow: bên ngoài ngang hàng với cha là user
 */

var user = {
    firstname: 'meo',
  showName: function(){
    console.log(this)
  },
  logName: () => {
    console.log(this)
  }
}
user.showName();
user.logName();



function User(firstname){
    this.firstname = 'Khoa'
  }
  
  
  User.prototype.showName = function(){
      console.log(this)
      console.log(this.firstname)
  }
//   User.prototype.showName = () => {
//     console.log(this)
//     console.log(this.firstname)
// } => underfined
  
  var meo = new User()
  
  meo.showName()
  
  
  
  
  
  