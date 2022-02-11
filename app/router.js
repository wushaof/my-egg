module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/', controller.home.index);
  router.get('index', '/news', controller.news.list);
  router.get('/search', middleware.uppercase() ,controller.search.index);
  router.get('/user/:id/:name', controller.user.info);
  // router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/)
}