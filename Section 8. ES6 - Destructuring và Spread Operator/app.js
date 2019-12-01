

var names = ['Khoa','Hung','Hung','Linh','Ha','Hang']

// var name1 = names[0]
// var name2 = names[1]
// var name3 = names[3]

const [ first, second, third ] = names

// var user = {
//     {name}: 'value'
// }


var students = new Map()

students.set('id1', {  name: 'Meo', age: 18 })
students.set('id2', {  name: 'Hung' })
students.set('id3', {  name: 'Hung' })

for ( [id,info] of students  ){
    const {name, age = 7 } = info
    console.log(`${name} is ${age} years old and has id: ${id}`)
}

// for ( student of students  ){
//     const id = student[0]
//     const name = student[1].name 
//     const age = student[1].age || 7
//     console.log(`${name} is ${age} years old and has id: ${id}`)
    
// }



// input -> output function

function sayHi(  ){
    return { 
        en: 'Hello',
        vn: 'Xin Chao',
        cn: 'Chao Xin',
        sp: 'Hola'
    }
}

const { en: english, vn: vietnamese  } = sayHi()

var names = ['Meo','Ngoc','Kim']

function logInfo( [first,second,third] = [] ){
    
    console.log(`Hello ${first} ${second} ${third} `  )
}

logInfo(names)


function ham( {  } ) {
    { }
}

//ham(obj)

// // Spread Operator ... vs ...rest operator
// const iphones = ["iphone4", "iphone5", "iphone6"];
// const macbooks = ["macbook2012", "macbook2013", "macbook2014"];

// // 1. concat array

// // const appleProducts = iphones.concat(macbooks)

// const appleProducts = [...iphones, 'iphone7','iphone7s','mackbook2011',...macbooks, 'macbook2015']

// // 2. spread a string


// // 3. Copy array

// const oldModels = [...iphones]


// oldModels[0] = 'iphone3s'

// 4. trong function

const values = [69,96,1,21,1,12,3]

function sum(){
  var total = 0
  for ( const value of arguments  ){
    total += value
  }
  return total
}


console.log(sum(...values))


// -- ...rest

// 1. parameter of function 
// 2. destructuring

// ...spread -> tach array
// ...rest -> gom lai thanh array

function calculateGPA(math, literature,...rest){

  return ( ( math*2 + literature*2 + sum(...rest) ) / ( rest.length + 4 ) )
}



// console.log(calculateGPA(8,6,5,4,3))


const VietNamTeam = [
  "Nguyen Huu Thang",
  "Nguyen Cong Phuong",
  "Luong Xuan Truong",
  "Nguyen Van Toan",
  "Nguyen Tuan Anh",
  "Phan Van Hau",
  "Ha Duc Chinh"
];

const [coach, captain, ...players] = VietNamTeam





















