// Prototype Inheritance là gì. Prototype chain là gì?
/**
 * prototype
 */

user = {
    firstname: 'firstname',
    lastname: 'lastname',
    showName: function(){
        console.log(this.firstname + ' ' + this.lastname )
    }
}

meo = {
    firstname:'Meo',
    lastname:'Meo'
}
loan = {
    firstname:'loan'
}
meo.__proto__ = user; //không nên dùng
loan.__proto__=meo;
loan.showName();

var sayHi = function(){
    console.log('Hi');
}
var names = ['meo', 'loan', 'kim'];

//reflection: View/Edit. có thể thay đổi những thuộc tính, phương thức của nó
console.log(Reflect.get(user,'firstname'))
console.log(Reflect.has(user,'firstname'))
Reflect.setPrototypeOf(meo, user);
meo.showName();

/**
 * function constructor
 * new tạo ô nhớ mới
 */
var firstname = 'global'
function User(firstname, lastname){
    console.log(this);
    this.firstname = 'default name';
    this.lastname = 'default name'
    this.showName = function(){
        console.log(this.firstname + ' ' + this.lastname )
    }
    return {name: 'meowing'}
}


meo.showName();
/**
 * sử dụng prototype như thế nào?
 * User.prototype: hàm: thêm thuộc tính vào User, cùng hàng với constuctorr
 * meo._proto_
 * ưu điểm của .prototype: tiếm kiệm bộ nhớ
 * 
 */
meo.__proto__.constructor();
User.prototype.showFullName = function(){
    console.log(this.firstname + ' ' + this.lastname )
}
var meo =  new User();
var meo = new User('Meo', 'Meo'); //function constructor
User.prototype.showVietnamese = function(){
    console.log('Ten cua toi la ' + this.firstname + ' ' + this.lastname)
}

User.prototype.showFullName = function(){
    console.log(this.firstname + ' ' + this.lastname)
}
var meo = Object.create(user) //tạo oject bằng create

var a = 2


// extends

Number.prototype.square = function(){
    return this*this
}

Number.prototype.cube = function(){
    return this.square()*this
}

console.log(a.cube())

var b = 3 
console.log(b.cube())

/**
 *  ES6 tạo object với class
 */

 

class User1{
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
        console.log('I am here');
    }
    showName(){
        return this.firstname + ' ' + this.lastname 
    }

}

// function User(firstname,lastname){
//     this.firstname = firstname
//     this.lastname = lastname
//     
// }


// User.prototype.showName = function(){

// }


// var khoa = new User('meo','meowing')

// class Student extends User1{
//     constructor(firstname, lastname, id){
//         super(firstname,lastname);
//         this.id = id;
//         this.showId = function(){
//             return this.id;
//         }
//     }
//     // showId(){
//     //     return this.id;
//     // }
   
// }
// var meo = new Student('loan','nguyen','123');
// meo.showName();
// meo.showId();

function User1(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
User1.prototype.showId = function(){

};
var Student = new User1();
Student.id = '123456';

console.log(Student.showId())

