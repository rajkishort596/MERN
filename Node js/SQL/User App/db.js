import mysql from "mysql2";
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    port: "5306",
    database: "user_app",
    password: "rajsql@123",
  })
  .promise();

export const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
};
export const getUser = async (id) => {
  const [row] = await pool.query(`SELECT * FROM users WHERE id = ?`, [id]);
  return row[0];
};
export const createUser = async (username, email, password) => {
  const [result] = await pool.query(
    `INSERT INTO users (username,email,password) VALUES (?,?,?)`,
    [username, email, password]
  );
  return result.insertId;
};

// pool.end((err) => {
//   console.log(err);
// });
