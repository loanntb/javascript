//1--this in a fuction
function sayHello(){
    console.log(this);
}
sayHello();

//2. User this
function login(){
    let username = 'meo';
    this.welcome(username)
}
function welcome(username){
    console.log('Hi, '+ this)
}
login();

//3. calll stack  and call-site
/**
 * call-site: is in the global scope
 * call-stack
 */
function login(){
    console.log("login");
    welcome(); // call-site for welcome
}
function welcome(){
    console.log("welcome");
    like();
}
function like(){
    debugger;
    console.log("like")
}
login();