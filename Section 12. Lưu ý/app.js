/**
 * use strict: kiểm soát lỗi , không có strict  delete ->lỗi
 * debugg
 * makes eval
 * var
 * delete
 */

 // "use strict"

// eval('var age = 28')

// console.log(age)
"use strict"
var hi = {
    name: 'meo',
    lastname:'meo',
    name: 'Nguyen'
  }
  hi = undefined
  
  console.log(this.hi)
  // delete hi
  
  // function sayHi() {
  //   "use strict";
  //   age = 16;
  //   console.log(age);
  // }
  
  // sayHi();
  