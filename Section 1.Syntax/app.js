//Lexical đặt biến ở đâu, trong hàm nào
hello();
function hello(){
    let name = 'loan';
    function hi(){
        let age = '22';
    }
    console.log(name);
}

//execution context thứ tự thực hiện, cái nào trước, cái nào sau, tạo bộ nhớ như thế nào
function eat(){
    let meo = "ate";
    function sleep(){
        let meo = "not yet"
    }
}
eat();
//Name -  value pair, object: chứa nhiều name - value lồng nhau
//Global Object: tùy theo môi trường chạy thì global object khác nhau. Những cái không có trong function là global, bên trong hàm không phải là gobal
console.log(this); // môi trường windowwn
var hello = "loan";
function sayHi(){
    console.log('sayHi');
    var helloAgain = 'Meo';
}
/*Note: Execution Context: Global Oject + this + Outer Enviroment */ 

//Hosting: Khởi tạo và run. Tạo bộ nhớ trước trong giai đoạn khởi tạo của Execution
sayHi();
console.log(hello);
/*Note: chuẩn bị bộ nhớ cho hàm và biến -> hosting */ 

//Execution stack 
function b(){
    let myVar //underfined
}
function a(){
    b() //invoke hàm
    let myVar = 1; //1
}
console.log(myVar) //underfined hosting
var myVar = 0;
console.log(myVar) //0
a(); //invoke hàm

var text = 'outside';
function show(){
  //  console.log(text); //lấy text phía dưới  nhưng vì hosting chỉ khỏi tạo chứ chưa gán
    let text = 'inside';
    console.log(text)
}
show();

//scope chain
function meomeo(){
  console.log(sound)
  function outMeoMeo(){
    
  }
}
function gaugau(){
   let sound = ' in meo meo'
    meomeo();
}
var sound = 'in gloal';
gaugau();
//outer: code nằm ở đâu thì outer ở đó. Không có biến ở hàm thì nó sẽ tìm ở gloal. chain là mối liên kết