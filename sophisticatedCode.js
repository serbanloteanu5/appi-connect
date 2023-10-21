/* sophisticatedCode.js */

// This code demonstrates a complex implementation of a social media feed with user interaction and customization features.

// Define an array of users
const users = [
  {
    name: "John Doe",
    username: "@john123",
    posts: []
  },
  {
    name: "Jane Smith",
    username: "@janes",
    posts: []
  }
];

// Create a User class
class User {
  constructor(name, username) {
    this.name = name;
    this.username = username;
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }
}

// Create a Post class
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Create users from the array
for (let i = 0; i < users.length; i++) {
  const { name, username } = users[i];
  users[i] = new User(name, username);
}

// Add posts to users
users[0].addPost(new Post("Hello, world!"));
users[0].addPost(new Post("I love coding!"));

users[1].addPost(new Post("Just came back from vacation!"));
users[1].addPost(new Post("New recipe discovered!"));

// Simulate user interaction
users[0].posts[0].like();
users[0].posts[0].addComment("Nice post!");
users[0].posts[1].like();
users[0].posts[1].addComment("Keep it up!");

users[1].posts[0].like();
users[1].posts[0].addComment("Welcome back!");
users[1].posts[1].like();
users[1].posts[1].addComment("Post the recipe!");

// Output user feed
for (let i = 0; i < users.length; i++) {
  console.log(`User: ${users[i].name}`);
  console.log("Posts:");

  for (let j = 0; j < users[i].posts.length; j++) {
    console.log(` - ${users[i].posts[j].content}`);
    console.log(`   Likes: ${users[i].posts[j].likes}`);
    console.log("   Comments:");

    for (let k = 0; k < users[i].posts[j].comments.length; k++) {
      console.log(`     - ${users[i].posts[j].comments[k]}`);
    }
  }

  console.log("\n");
}