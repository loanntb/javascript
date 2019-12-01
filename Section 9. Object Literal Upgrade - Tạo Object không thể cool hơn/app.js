/**
 * Oject literals Upgrade
 * Property value shorthand - cùng tên bỏ được
 */
// Object Literals Upgrade
// Property value shorthand - Cùng tên bỏ được

var first = "Khoa";
var last = "Nguyen";

var user = {
  firstName: first,
  last,
  age: 18
};

function logInfo({ address }) {
  console.log(address);
}

let address = "HCM"; // download from web service

var user1 = {
  address
};

logInfo(user1);
//Method definition shorthand - hàm ngắn gọn
var user = {
    age:18,
    showName(name){
        console.log(this);
        console.log(name);
    },//arrow function this là gloabl
    showAddress(address){
        console.log(address);
    }
}
user.showName('Meo');

//Computed property keys : dùng một biến làm key cho object

let objKey = 'name'
// abb = abbreviate = viết tắt
var country = {
  [objKey]: 'Vietnam',
  [objKey+'abb']: 'VN'
}