/* // Simulating a synchronous function that fetches user data
function fetchUserDataSync() {
    console.log("Fetching user data...");
    const userData = { id: 1, name: "John Doe" }; // Simulating fetched data
    return userData;
  }
  
  function fetchUserPostsSync(userId) {
    console.log("Fetching posts...");
    const posts = [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
    ]; // Simulating fetched posts
    return posts;
  }
  
  function fetchUserCommentsSync(postId) {
    console.log("Fetching comments...");
    const comments = [
      { postId: 1, comment: "Great post!" },
      { postId: 2, comment: "Nice work!" },
    ]; // Simulating fetched comments
    return comments;
  }
  
  // Calling synchronous functions one after the other
  console.log("Start");
  const user = fetchUserDataSync();
  console.log("User Data:", user);
  
  const posts = fetchUserPostsSync(user.id);
  console.log("User Posts:", posts);
  
  const comments = fetchUserCommentsSync(posts[0].id);
  console.log("User Comments:", comments);
  console.log("End"); */




  // Simulating an asynchronous function using Promises
function fetchUserDataAsync() {
    console.log("Fetching user data...");
    return new Promise(resolve => {
      setTimeout(() => {
        const userData = { id: 1, name: "John Doe" }; // Simulating fetched data
        resolve(userData);
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  function fetchUserPostsAsync(userId) {
    console.log("Fetching posts...");
    return new Promise(resolve => {
      setTimeout(() => {
        const posts = [
          { id: 1, title: "First Post" },
          { id: 2, title: "Second Post" },
        ]; // Simulating fetched posts
        resolve(posts);
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  function fetchUserCommentsAsync(postId) {
    console.log("Fetching comments...");
    return new Promise(resolve => {
      setTimeout(() => {
        const comments = [
          { postId: 1, comment: "Great post!" },
          { postId: 2, comment: "Nice work!" },
        ]; // Simulating fetched comments
        resolve(comments);
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  // Calling asynchronous functions using Promises
  console.log("Start");
  fetchUserDataAsync()
    .then(user => {
      console.log("User Data:", user);
      return fetchUserPostsAsync(user.id);
    })
    .then(posts => {
      console.log("User Posts:", posts);
      return fetchUserCommentsAsync(posts[0].id);
    })
    .then(comments => {
      console.log("User Comments:", comments);
      console.log("End");
    });