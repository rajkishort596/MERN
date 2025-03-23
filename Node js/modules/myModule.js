// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
function myFunction1() {
  console.log("Hello from myFunction!");
}
function myFunction2() {
  console.log("Hello from myFunction2!");
}
module.exports = {
  foo: "bar",
  myFunction1: myFunction1,
  myFunction2: myFunction2,
};
