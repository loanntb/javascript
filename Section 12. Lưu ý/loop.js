const companies = ["FPT", "VNG", "Viettel", "Intel", "Apple", "Facebook"];

// 1 truyen thong, break or continue ok

// for (let i = 0; i < companies.length; i++){
//   if ( companies[i] === 'VNG'  ){
//     // continue;
//     break;
//   }
//   console.log(companies[i])
// }

// 2. Functional , không dùng được break và continue

// companies.forEach(company => {
  
//   console.log(company);
// });

// 3. For ... in 

// Array.prototype.deleteAll = function(){
//   console.log('deleteAll feature here')
// }
// Array.prototype.deleteAll2 = function() {
//   console.log("deleteAll2 feature here");
// };

// for (const index in companies  ){
//   // console.log(typeof index)
//   // console.log(index)
  
//   console.log(`cong ty ${companies[index]} co STT: ${Number(index) + 1}`);
// }

// 4. For ... of 

// for (const [index,company] of companies.entries()){
//   console.log(`cong ty ${company} co STT: ${index + 1}`);
// }

var website = 'abc.com'

// for (const char in website){
//   console.log(char)
// }

// function sum(){
//   var total = 0
//   console.log(typeof arguments)
//   for (const element of arguments){
//     total += element
//   }
//   console.log(total)
// }

// sum(12,1,231,23,123,2)

const companyObj = {
  fpt: {
    name: "fpt"
  },
  vng: {
    name: "vng"
  },
  viettel: {
    name: 'viettel'
  },
  apple: {
    name: 'apple'
  },
};

// for (var key in companyObj) {
//   if (companyObj.hasOwnProperty(key)) {
//     var element = companyObj[key];
//     console.log(element);
//   }
//   console.log(key)
// }

for ( var prop of Object.keys(companyObj) ){
  console.log(companyObj[prop])
}
