module.exports = {
  pageNotFoundHandler: (req, res, next) => {
    res.status(404).render("error/404")
  }
}