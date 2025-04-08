/**
 * 6 Rules of Thumb for MongoDB Schema Design
 * Source: https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design
 */

// Import Mongoose to work with MongoDB
const mongoose = require("mongoose");

// Destructure Schema constructor from mongoose
const { Schema } = mongoose;

// Connect to MongoDB
main()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// Async function to establish database connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Define schema for the User collection
const userSchema = new Schema({
  // Username of the user (required)
  username: {
    type: String,
    required: true,
  },
  // Email of the user (required)
  email: {
    type: String,
    required: true,
  },
});

// Create User model based on the schema
const User = mongoose.model("User", userSchema);

// Define schema for the Post collection
const postSchema = new Schema({
  // Content of the post (required)
  content: {
    type: String,
    required: true,
  },
  // Reference to the user who created the post
  user: {
    type: Schema.Types.ObjectId,
    ref: User, // Reference to the User model
  },
});

// Create Post model based on the schema
const Post = mongoose.model("Post", postSchema);

// Function to create a new post and associate it with a user
const addData = async () => {
  // Create a new post with some content
  const post = new Post({
    content: "Kaise ho bhai!",
  });

  // Find an existing user by username
  const user = await User.findOne({ username: "_rajkishor.thakur_" });

  // Link the user to the post using their ObjectId
  post.user = user;

  // Save the post to the database
  let createdPost = await post.save();

  // Output the saved post to the console
  console.log(createdPost);
};

addData();

// Function to retrieve all posts from the database
const findPosts = async () => {
  // Fetch all posts populate with username only
  const posts = await Post.find({}).populate("user", "username");
  console.log(posts);
};

findPosts();
