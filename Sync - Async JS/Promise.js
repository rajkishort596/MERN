/*---------------!A Promise is a javascript object that represents the eventual
         completion / failure of an asynchronous operation and its resulting value--------------*/
// !A promise is in one of these states:
// * pending: initial state, neither fulfilled nor rejected.
// * fulfilled: meaning that the operation completed successfully.
// * rejected: meaning that the operation failed.
// * settled: meaning that the operation has completed, either fulfilled or rejected.

/*---------------Instagram real example--------------*/
function getUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let netspeed = Math.floor(Math.random() * 10);
      if (netspeed > 5) {
        console.log(username + " was found\n");
        resolve("Success"); // * Resolving the promise if the condition is met
      }
      reject("failure"); // ! Rejecting the promise if condition fails
    }, 1000);
  });
}
function getUserPosts(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let netspeed = Math.floor(Math.random() * 10);
      if (netspeed > 5) {
        console.log(username + " have" + " 80 posts\n");
        resolve("Success");
      }
      reject("failure");
    }, 1000);
  });
}
function getUserPostsLikes(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let netspeed = Math.floor(Math.random() * 10);
      if (netspeed > 5) {
        console.log("100 people liked " + username + " post about holy\n");
        resolve("Success");
      }
      reject("failure");
    }, 1000);
  });
}
//Promise chaining
getUser("_rajkishor.thakur_", 123456)
  .then(() => {
    return getUserPosts("_rajkishor.thakur_");
  })
  .then(() => {
    return getUserPostsLikes("_rajkishor.thakur_");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("This code always runs");
  });
