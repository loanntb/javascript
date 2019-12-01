//fetch: return promise
// console.log("start downloading pokemons");

// const pokemonPromise = fetch(
//   "http://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200"
// );

// console.log(typeof pokemonPromise);

// console.log(pokemonPromise)

// pokemonPromise
//   .then(response => {
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// console.log("finish downloading pokemons");
/**
 * 3 trạng thái của promise
 * Promise chains
 * 
 */

const posts = [
    {
      content: "I am richest man in the world",
      likes: 51,
      user: "Bill Gates",
      id: 1
    },
    {
      content: "I dropped out of Harvard",
      likes: 5991,
      user: "Mark Zuckerberg",
      id: 2
    },
    { content: "Macbook is so cool!", likes: 391, user: "Steve Jobs", id: 3 }
  ];
  
  const users = [
    { username: "Bill Gates", age: 61 , userId: 111 },
    { username: "Mark Zuckerberg", age: 33 },
    { username: "Steve Jobs", age: 56 }
  ];
  
  function findPostById(id) {
    const post = posts.find(post => post.id === id);
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        if (post) {
          resolve(post);
        } else {
          reject("can not find post with id: " + id);
        }
      }, 2000);
    });
  }
  
  function queryUserDetail(post){
    const user = users.find( user => user.username === post.user  )
    return new Promise( (resolve,reject) => {
      setTimeout(function() {
        if (user) {
          post.userDetails = user;
          resolve(post);
        } else {
          reject("can not find user of post: " + post);
        }
      }, 2000);
    }  )
    
  }
  
  // queryImage 
  
  // queryFollow
  
  // Promise chains >< callback
  findPostById(2)
    .then(post =>  queryUserDetail(post)   )
    .then( data => console.log(data)   )
    .catch(err => console.log(err));
  //Promise vs PromissAll
  
const avatarPromise = new Promise( (resolve) => {
  setTimeout( function(){
    const result = { 
      url: "http://facebook.com/user/image12314",
      status: 'OK'
   };
    resolve(result)
  } , 2000 )
})
const coverImagePromise = new Promise(resolve => {
  setTimeout(function() {
    resolve("http://facebook.com/user/cover/image1");
  }, 1000);
});

const coverImagePromise2 = new Promise(resolve => {
  setTimeout(function() {
    resolve("http://facebook.com/user/cover/image2");
  }, 3000);
});

const coverImagePromise3 = new Promise(resolve => {
  setTimeout(function() {
    resolve("http://facebook.com/user/cover/image3");
  }, 2500);
});

// then( data1 ). then( data ).then( )

Promise.all([
  coverImagePromise,
  coverImagePromise3,
  avatarPromise,
  coverImagePromise2
]).then(responses => console.log(responses));


const evolutionChainPromise = fetch(
    "http://pokeapi.co/api/v2/evolution-chain/?limit=200&offset=100"
  );
  const typePromise = fetch("http://pokeapi.co/api/v2/type/3/");
  
  Promise.all([evolutionChainPromise, typePromise])
    .then(responses => {
      return responses.map( element => element.json()  )
    } )
    .then( data => console.log(data) )
    .catch( err => console.log(err)  )