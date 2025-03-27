// CJS
const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bloodbank",
  port: 5306, //must be specified if using other posrt than default 3306
  password: "rajsql@123",
});

//simple query to show tables
try {
  connection.query("SHOW TABLES", (err, results) => {
    if (err) throw err;
    else {
      console.log(results); // results contains rows returned by server
    }
  });
} catch (err) {
  console.log(err);
}
connection.end();
const createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};
// console.log(createRandomUser());
