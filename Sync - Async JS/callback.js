/*------------A callback is a function that is passed 
               as an argument to the other function------------------*/

/*---------------Simple example--------------*/
// function getdata(id, delay, gettingNextData) {
//   setTimeout(() => {
//     console.log("data" + id);
//     if (gettingNextData) {
//       gettingNextData();
//     }
//   }, delay);
// }
/*---------This may lead to callback Hell (nested callbacks)-----------*/
// console.log("getting data1......");
// getdata(1, 1000, () => {
//   console.log("getting data2......");
//   getdata(2, 1000, () => {
//     console.log("getting data3......");
//     getdata(3, 1000);
//   });
// });

/*---------------Instagram real example--------------*/
function getUser(username, password, callback) {
  setTimeout(() => {
    console.log(username + " was found\n");
    callback();
  }, 1000);
}
function getUserPosts(username, callback) {
  setTimeout(() => {
    console.log(username + " have" + " 80 posts\n");
    callback();
  }, 2000);
}
function getUserPostsLikes(username) {
  setTimeout(() => {
    console.log("100 people liked " + username + " post about holy\n");
  }, 2000);
}
/*---------This may lead to callback Hell (nested callbacks)-----------*/
console.log("Fetching user from db................");
getUser("_rajkishor.thakur_", 123456, () => {
  console.log("Fetching user posts................");
  getUserPosts("_rajkishor.thakur_", () => {
    console.log("Fetching post likes................");
    getUserPostsLikes("_rajkishor.thakur_");
  });
});
