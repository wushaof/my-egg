// 框架会把 app/extend/application.js 中定义的对象与 Koa Application 的 prototype 对象进行合并，
// 在应用启动时会基于扩展后的 prototype 生成 app 对象

// 框架会把 app/extend/context.js 中定义的对象与 Koa Context 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 ctx 对象。

// 框架会把 app/extend/request.js 中定义的对象与内置 request 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 request 对象。

// 另外，还可以根据环境进行有选择的扩展，例如，只在 unittest 环境中提供 mockXX() 方法以便进行 mock 方便测试

// app/extend/application.unittest.js, 这个文件只会在 unittest 环境加载。
module.exports = {
  mockXX(k, v) {},
};
// 同理，对于 Application，Context，Request，Response，Helper 都可以使用这种方式针对某个环境进行扩展，更多参见运行环境。