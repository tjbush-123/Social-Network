const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }
  // Create array to hold the users
  const users = [
    {
      username: "Paws",
      email: "pawsatwork@gmail.com",
    },
    {
      username: "Tigrr",
      email: "handlrr@yahoo.com",
    },
    {
      username: "Porthos",
      email: "dogdad101@hotmail.com",
    },
    {
      username: "Arc",
      email: "goodboy1@gmail.com",
    },
  ];

  // Add users to the collection and await the results
  const userData = await User.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.info("Seeding complete! 🌱");
  process.exit(0);
});