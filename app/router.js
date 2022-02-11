module.exports = app => {
  const { router, controller, middleware } = app;
  require('./router/news')(app);

  router.get('/', controller.home.index);
  router.get('/search', middleware.uppercase() ,controller.search.index);
  router.get('/user/:id/:name', controller.user.info);
  // router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/)
}