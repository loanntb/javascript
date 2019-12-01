/**
 * Object có:
 * properties(name-value),
 * method
 * fuction khác
 */
var user = {
    username:'meo meo',
    gender: "female",
    age: 22,
    viewInfo: function(){
        console.log(this.username +" "+ this.gender +" "+ this.age);
    },
    location: {
        city: 'Vinh',
        provice: 'NA'
    }
}
function viewInfo(u){
    console.log(u.username + " "+ u.gender +" "+ u.age);
}
viewInfo(user);
viewInfo({username: 'loan', gender:'male', age: 22})
//thành phần object
user['age'];
var a  = 'username';
console.log(user[a])

//first-class function, function gán vào biến, function là object

var viewFuc = function(u){
    console.log(u.username + " "+ u.gender +" "+ u.age);
    return true;
}//fuction expression
console.log(typeof viewFuc);
viewFuc(user);
console.log(function(){
    console.log('I am a fuction');
})

// Function Declaration và Function Expression(Hosting)
/**
 * Fuction Declaration: hosting ok, hàm để trên khai báo ok
 * Fuction Express: cẩn thận hosting, function có tên hoặc không có tên
 */
