const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hollo world'
  }
}

module.exports = HomeController