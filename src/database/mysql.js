const mysql2 = require("mysql2");
module.exports = async (env) => {
  const Pool = mysql2
    .createPool({
      host: env.host,
      user: env.user,
      password: env.password,
      database: env.database,
    })
    .promise();
  async function FindUserPass(username) {
    const [rows] = await Pool.query(
      `SELECT Password FROM Users WHERE username = ?`,
      username
    );
    return rows[0].Password;
  }
};
