module.exports = app => {

  app.router.get('news', '/news', app.controller.news.list)
}