const posts = [
    {
      content: "I am richest man in the world",
      likes: 51,
      user: "Bill Gatess",
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
    { username: "Bill Gates", age: 61 },
    { username: "Mark Zuckerbrg", age: 33 },
    { username: "Steve Jobs", age: 56 }
  ];
  
  function findStatusById(id) {
    const post = posts.find(post => post.id === id);
  
    return new Promise((resolve, reject) => {
      if (post) {
        resolve(post);
      } else {
        reject("can not find status with id " + id);
      }
    });
  }
  
  function queryUser(post) {
    const user = users.find(user => user.username === post.user);
  
    return new Promise((resolve, reject) => {
      if (user) {
        post.userDetails = user;
        resolve(post);
      } else {
        reject(
          "can not query user detail associate with post: " + JSON.stringify(post)
        );
      }
    });
  }
  
  // findStatusById(2)
  //   .then(post => queryUser(post))
  //   .then( user => console.log(user)  )
  //   .catch( err => console.log(err))
  
  async function findStatusByIdAsync() {
    try {
      let post = await findStatusById(1).then(); // lay post trong day
      let user = await queryUser(post);
      console.log(post);
    } catch (error) {
      console.log(error)
    }
  
    //  console.log(user)
  }
  
  findStatusByIdAsync();
  