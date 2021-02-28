require("dotenv").config()
const express = require("express")
const path = require("path")
const app = express()
const session = require("express-session")
const flash = require("express-flash")
const handlebars = require("express-handlebars")
const methodOverride = require("method-override")

// setup method-override
app.use(methodOverride("_method"))

// body parser
app.use(express.urlencoded({ extended: true }))

// setup JSON here...


// setup session
app.use(flash())
app.use(session({
  secret: "top-secret",
  saveUninitialized: false,
  resave: false
}))

// funtion path directory
const pathDirectory = (dir) => path.join(__dirname, dir)

// setup view engine handlebars
app.set("view engine", "hbs")
app.engine("hbs", handlebars({
  extname: "hbs",
  partialsDir: pathDirectory("views/partials")
}))

// setup static file
app.use(express.static(pathDirectory("/public")))
app.use("/bootstrap", express.static(pathDirectory("/node_modules/bootstrap/dist")))

// import routes
app.use(require("./routes/index"))

// 404 Page Not Found Middlware
const {pageNotFoundHandler} = require("./middleware/404")
app.use(pageNotFoundHandler)

// server running on PORT
app.listen(process.env.PORT, () => {
  console.log("server running on port: ", process.env.PORT)
})