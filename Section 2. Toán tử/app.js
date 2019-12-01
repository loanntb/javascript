//dynamic typing: không cần khai báo kiểu dữ liệu

var isLogin = false;
var age = 22;
console.log(typeof isLogin);
console.log(typeof age);

//primite type: không phải object và phương thức (methods). underfines, null, boolean, string, number, symbol
var count = null;
let result = count + 2; // khi chưa biết giá trị của biến never gán underfined
console.log(typeof count);

//toán tử và thứ tự ưu tiên

var a  = 2 + 3;
// a+b; a/b; a++
console.log(a);

//coercion: ép kiểu

var total = 1 + '2'; // "12" string. Number + String = String
//boolean 1 số là true. Boolean 0 : false
//Tại sao không nên dùng so sánh === 
var number1 = "2", number2 = 2;

if(number1 == number2){
    console.log(typeof number1)
    console.log(typeof number2)
    console.log('bang')
}
///=== cùng kiểu, cùng đối tượng

//toán tử || &&
console.log(undefined || 5)
Boolean(undefined) //false
Boolean(null) //false
Boolean(NaN) //false
Boolean('') //false
/*ứng dụng giá  trị do người dùng nhập or tải từ web serviece */
function sayHello(name){
    name = name || 'meo meo';
    console.log("Hi", name)
}
sayHello();