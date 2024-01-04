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
  var [rows] = await Pool.query("SELECT * FROM Users");
  console.log(rows);
};
