const pool = require("../config/database.config")

module.exports = {
  getAll: (callback) => {
    pool.query("SELECT * FROM registration", (err, results, field) => {
      if (err) console.log(err.sqlMessage)
      else callback(results)
    })
  }
}