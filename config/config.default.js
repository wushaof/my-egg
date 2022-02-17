exports.keys = 'hgjkgogoahghmklpepnmglah'

// 插件一般会包含自己的默认配置，应用开发者可以在 config.default.js 覆盖对应的配置：

// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  },
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

exports.middleware = [
  'robot'
]

exports.robot = {
  ua: [
    /Baiduspider/i
  ]
}