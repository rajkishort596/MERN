/*---------------Instagram real example--------------*/

// * Function to simulate fetching a user from the database
function getUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let netspeed = Math.floor(Math.random() * 10); // ? Simulating network speed
      if (netspeed > 5) {
        console.log(username + " was found\n");
        resolve("Success"); // * Resolving the promise if the condition is met
      } else {
        reject("User fetch failed due to slow internet"); // ! Rejecting the promise if condition fails
      }
    }, 1000);
  });
}

// * Function to simulate fetching user posts
function getUserPosts(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let netspeed = Math.floor(Math.random() * 10); // ? Simulating network speed
      if (netspeed > 5) {
        console.log(username + " has 80 posts\n");
        resolve("Success"); // * Resolving the promise
      } else {
        reject("Failed to fetch user posts"); // ! Rejecting the promise
      }
    }, 1000);
  });
}

// * Function to simulate fetching likes on user posts
function getUserPostsLikes(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let netspeed = Math.floor(Math.random() * 10); // ? Simulating network speed
      if (netspeed > 5) {
        console.log("100 people liked " + username + "'s post about holy\n");
        resolve("Success"); // * Resolving the promise
      } else {
        reject("Failed to fetch post likes"); // ! Rejecting the promise
      }
    }, 1000);
  });
}

// * Using an immediately invoked async function to fetch user details
(async function getUserDetails() {
  try {
    console.log("Fetching user from db................");

    // @ Waiting for user data
    await getUser("_rajkishor.thakur_", 123456);

    console.log("Fetching user posts................");

    // @ Waiting for user posts
    await getUserPosts("_rajkishor.thakur_");

    console.log("Fetching post likes................");

    // @ Waiting for post likes
    await getUserPostsLikes("_rajkishor.thakur_");
  } catch (error) {
    console.log("Error:", error); // ! Handling errors if any promise rejects
  }
})();
