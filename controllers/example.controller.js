const {getAll} = require("../models/example.model")

module.exports = {
  index: (req, res) => {
    res.render("index", {
      title: "Express MVC",
      message: "Welcome to Express !"
    })
  },
  // show: (req, res) => {
  //   getAll((data) => {
  //     res.render("index", {
  //       title: "Express MVC",
  //       users: data
  //     })
  //   })
  // }
}