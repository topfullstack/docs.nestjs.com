const raw = `{
  {
  title: '简介',
  标题：'简介'，
  isOpened: false,
  Isoped:错误，
  path: '/',
  路径：'/'，
  },
  },
  {
  {
  title: '概述',
  标题：'概述'，
  isOpened: true,
  异色：真的，
  children: [
  儿童：[
  { title: 'First steps', path: '/first-steps' },
  {title:'第一步'，路径：'/First steps'}，
  { title: 'Controllers', path: '/controllers' },
  {title:'控制器'，路径：'/Controllers'}，
  { title: 'Providers', path: '/providers' },
  {title:'提供者'，路径：'/Providers'}，
  { title: 'Modules', path: '/modules' },
  {title:'模块'，路径：'/Modules'}，
  { title: 'Middleware', path: '/middleware' },
  {title:'中间件'，路径：'/Middleware'}，
  { title: 'Exception filters', path: '/exception-filters' },
  {title:'异常筛选器'，路径：'/Exception filters'}，
  { title: 'Pipes', path: '/pipes' },
  {title:'管道'，路径：'/Pipes'}，
  { title: 'Guards', path: '/guards' },
  {title:'守卫'，路径：'/Guards'}，
  { title: 'Interceptors', path: '/interceptors' },
  {title:'拦截器'，路径：'/Interceptors'}，
  { title: 'Custom decorators', path: '/custom-decorators' },
  {title:'自定义装饰器'，路径：'/Custom decorators'}，
  ],
  ],
  },
  },
  {
  {
  title: 'Fundamentals',
  title:'基础'，
  isOpened: false,
  Isoped:错误，
  children: [
  儿童：[
  { title: 'Custom providers', path: '/fundamentals/custom-providers' },
  {title:'自定义提供程序'，路径：'/fundamentals/Custom providers'}，
  {
  {
  title: 'Asynchronous providers',
  title:'异步提供程序'，
  path: '/fundamentals/async-providers',
  路径：'/fundamentals/async providers'，
  },
  },
  {
  {
  title: 'Dynamic modules',
  title:'动态模块'，
  path: '/fundamentals/dynamic-modules',
  路径：'/fundamentals/dynamic modules'，
  },
  },
  {
  {
  title: 'Injection scopes',
  title:'注射范围'，
  path: '/fundamentals/injection-scopes',
  路径：'/fundamentals/injection scopes'，
  },
  },
  {
  {
  title: 'Circular dependency',
  title:'循环依赖'，
  path: '/fundamentals/circular-dependency',
  路径：'/fundamentals/circular dependency'，
  },
  },
  {
  {
  title: 'Module reference',
  title:'模块参考'，
  path: '/fundamentals/module-ref',
  路径：'/fundamentals/module ref'，
  },
  },
  {
  {
  title: 'Execution context',
  title:'执行上下文'，
  path: '/fundamentals/execution-context',
  路径：'/fundamentals/execution context'，
  },
  },
  {
  {
  title: 'Lifecycle events',
  title:'生命周期事件'，
  path: '/fundamentals/lifecycle-events',
  路径：'/fundamentals/lifecycle events'，
  },
  },
  {
  {
  title: 'Platform agnosticism',
  title:'平台不可知论'，
  path: '/fundamentals/platform-agnosticism',
  路径：'/基本原理/平台不可知论'，
  },
  },
  { title: 'Testing', path: '/fundamentals/testing' },
  {title:'测试'，路径：'/fundamentals/Testing'}，
  ],
  ],
  },
  },
  {
    {
    title: 'Techniques',
    title:'技术'，
    isOpened: false,
    Isoped:错误，
    children: [
    儿童：[
    { title: 'Authentication', path: '/techniques/authentication' },
    {title:'身份验证'，路径：'/technologies/Authentication'}，
    { title: 'Database', path: '/techniques/database' },
    {title:'数据库'，路径：'/technologies/Database'}，
    { title: 'Mongo', path: '/techniques/mongodb' },
    {title:'Mongo'，路径：'/technologies/mongodb'}，
    { title: 'Configuration', path: '/techniques/configuration' },
    {title:'配置'，路径：'/technologies/Configuration'}，
    { title: 'Validation', path: '/techniques/validation' },
    {title:'验证'，路径：'/technologies/Validation'}，
    { title: 'Caching', path: '/techniques/caching' },
    {title:'缓存'，路径：'/technologies/Caching'}，
    { title: 'Serialization', path: '/techniques/serialization' },
    {title:'序列化'，路径：'/technologies/Serialization'}，
    { title: 'Task scheduling', path: '/techniques/task-scheduling' },
    {title:'任务调度'，路径：'/technologies/Task scheduling'}，
    { title: 'Compression', path: '/techniques/compression' },
    {title:'压缩'，路径：'/technologies/Compression'}，
    { title: 'Security', path: '/techniques/security' },
    {title:'安全'，路径：'/technologies/Security'}，
    { title: 'Queues', path: '/techniques/queues' },
    {title:'队列'，路径：'/technologies/Queues'}，
    { title: 'Logger', path: '/techniques/logger' },
    {title:'Logger'，路径：'/technologies/Logger'}，
    { title: 'File upload', path: '/techniques/file-upload' },
    {title:'文件上传'，路径：'/technologies/File upload'}，
    { title: 'HTTP module', path: '/techniques/http-module' },
    {title:'HTTP module'，路径：'/technologies/HTTP-module'}，
    { title: 'Model-View-Controller', path: '/techniques/mvc' },
    {title:'模型视图控制器'，路径：'/technologies/mvc'}，
    { title: 'Performance (Fastify)', path: '/techniques/performance' },
    {title:'性能（fastfy）”，路径：'/technologies/Performance'}，
    ],
    ],
    },
    },
    {
    {
    title: 'GraphQL',
    title:'GraphQL'，
    isOpened: false,
    Isoped:错误，
    children: [
    儿童：[
    { title: 'Quick start', path: '/graphql/quick-start' },
    {title:'快速入门'，路径：'/graphql/Quick start'}，
    { title: 'Resolvers', path: '/graphql/resolvers' },
    {title:'解析器'，路径：'/graphql/Resolvers'}，
    { title: 'Mutations', path: '/graphql/mutations' },
    {title:'突变'，路径：'/graphql/variations'}，
    { title: 'Subscriptions', path: '/graphql/subscriptions' },
    {title:'订阅'，路径：'/graphql/Subscriptions'}，
    { title: 'Scalars', path: '/graphql/scalars' },
    {/graphql''Scalars'/title:'标量'，
    { title: 'Directives', path: '/graphql/directives' },
    {title:'指令'，路径：'/graphql/Directives'}，
    { title: 'Plugins', path: '/graphql/plugins' },
    {title:'插件'，路径：'/graphql/Plugins'}，
    { title: 'Interfaces', path: '/graphql/interfaces' },
    {title:'接口'，路径：'/graphql/Interfaces'}，
    { title: 'Unions', path: '/graphql/unions' },
    {title:'联合'，路径：'/graphql/Unions'}，
    { title: 'Enums', path: '/graphql/enums' },
    {title:'枚举'，路径：'/graphql/Enums'}，
    { title: 'Mapped types', path: '/graphql/mapped-types' },
    {title:'映射类型'，路径：'/graphql/Mapped types'}，
    { title: 'Complexity', path: '/graphql/complexity' },
    {title:'复杂性'，路径：'/graphql/Complexity'}，
    { title: 'Extensions', path: '/graphql/extensions' },
    {title:'扩展'，路径：'/graphql/Extensions'}，
    { title: 'CLI Plugin', path: '/graphql/cli-plugin' },
    {title:'CLI-Plugin'，路径：'/graphql/CLI Plugin'}，
    { title: 'Generating SDL', path: '/graphql/generating-sdl' },
    {title:'生成SDL'，路径：'/graphql/Generating-SDL'}，
    {
    {
    title: 'Other features',
    title:'其他功能'，
    path: '/graphql/other-features',
    路径：'/graphql/other features'，
    },
    },
    { title: 'Federation', path: '/graphql/federation' },
    {title:'联合体'，路径：'/graphql/Federation'}，
    ],
    ],
    },
    },
    {
    {
    title: 'WebSockets',
    title:'WebSockets'，
    isOpened: false,
    Isoped:错误，
    children: [
    儿童：[
    { title: 'Gateways', path: '/websockets/gateways' },
    {title:'网关'，路径：'/websockets/Gateways'}，
    { title: 'Exception filters', path: '/websockets/exception-filters' },
    {title:'异常筛选器'，路径：'/websockets/Exception filters'}，
    { title: 'Pipes', path: '/websockets/pipes' },
    {title:'管道'，路径：'/websockets/Pipes'}，
    { title: 'Guards', path: '/websockets/guards' },
    {title:'守卫'，路径：'/websockets/Guards'}，
    { title: 'Interceptors', path: '/websockets/interceptors' },
    {title:'拦截器'，路径：'/websockets/Interceptors'}，
    { title: 'Adapters', path: '/websockets/adapter' },
    {title:'适配器'，路径：'/websockets/adapter'}，
    ],
    ],
    },
    },
    {
    {
    title: 'Microservices',
    title:'微服务'，
    isOpened: false,
    Isoped:错误，
    children: [
    儿童：[
    { title: 'Overview', path: '/microservices/basics' },
    {title:'概述'，路径：'/microservices/basics'}，
    { title: 'Redis', path: '/microservices/redis' },
    {title:'Redis'，路径：'/microservices/Redis'}，
    { title: 'MQTT', path: '/microservices/mqtt' },
    {title:'MQTT'，路径：'/microservices/MQTT'}，
    { title: 'NATS', path: '/microservices/nats' },
    {title:'NATS'，路径：'/microservices/NATS'}，
    { title: 'RabbitMQ', path: '/microservices/rabbitmq' },
    {title:'RabbitMQ'，路径：'/microservices/RabbitMQ'}，
    { title: 'Kafka', path: '/microservices/kafka' },
    {title:'Kafka'，路径：'/microservices/Kafka'}，
    { title: 'gRPC', path: '/microservices/grpc' },
    {title:'gRPC'，路径：'/microservices/gRPC'}，
    {
    {
    title: 'Exception filters',
    title:'异常过滤器'，
    path: '/microservices/exception-filters',
    路径：'/microservices/exception filters'，
    },
    },
    { title: 'Pipes', path: '/microservices/pipes' },
    {title:'管道'，路径：'/microservices/Pipes'}，
    { title: 'Guards', path: '/microservices/guards' },
    {title:'守卫'，路径：'/microservices/Guards'}，
    { title: 'Interceptors', path: '/microservices/interceptors' },
    {title:'拦截器'，路径：'/microservices/Interceptors'}，
    ],
    ],
    },
    },
    {
    {
    title: 'Standalone apps',
    title:'独立应用'，
    isOpened: false,
    Isoped:错误，
    path: '/application-context',
    路径：'/application context'，
    },
    },
    {
    {
    title: 'CLI',
    title:'命令行'，
    isOpened: false,
    Isoped:错误，
    children: [
    儿童：[
    { title: 'Overview', path: '/cli/overview' },
    {title:'概述'，路径：'/cli/Overview'}，
    { title: 'Workspaces', path: '/cli/monorepo' },
    {title:'工作区'，路径：'/cli/monorepo'}，
    { title: 'Libraries', path: '/cli/libraries' },
    {title:'库'，路径：'/cli/Libraries'}，
    { title: 'Usage', path: '/cli/usages' },
    {title:'用法'，路径：'/cli/usages'}，
    { title: 'Scripts', path: '/cli/scripts' },
    {title:'脚本'，路径：'/cli/Scripts'}，
    ],
    ],
    },
    },
    {
    {
    title: 'OpenAPI',
    title:'OpenAPI'，
    isOpened: false,
    Isoped:错误，
    children: [
    儿童：[
    { title: 'Introduction', path: '/openapi/introduction' },
    {title:'简介'，路径：'/openapi/Introduction'}，
    {
    {
    title: 'Types and Parameters',
    title:'类型和参数'，
    path: '/openapi/types-and-parameters',
    路径：'/openapi/types and parameters'，
    },
    },
    { title: 'Operations', path: '/openapi/operations' },
    {title:'操作'，路径：'/openapi/Operations'}，
    { title: 'Security', path: '/openapi/security' },
    {title:'安全'，路径：'/openapi/Security'}，
    { title: 'Mapped Types', path: '/openapi/mapped-types' },
    {title:'映射类型'，路径：'/openapi/Mapped Types'}，
    { title: 'Decorators', path: '/openapi/decorators' },
    {title:'Decorators'，路径：'/openapi/Decorators'}，
    { title: 'CLI Plugin', path: '/openapi/cli-plugin' },
    {title:'CLI-Plugin'，路径：'/openapi/CLI-Plugin'}，
    { title: 'Other features', path: '/openapi/other-features' },
    {title:'其他功能'，路径：'/openapi/Other features'}，
    { title: 'Migration guide', path: '/openapi/migration-guide' },
    {title:'迁移指南'，路径：'/openapi/Migration-guide'}，
    ],
    ],
    },
    },
    {
      {
      title: 'Recipes',
      title:'配方'，
      isOpened: false,
      Isoped:错误，
      children: [
      儿童：[
      { title: 'TypeORM', path: '/recipes/sql-typeorm' },
      {title:'TypeORM'，路径：'/recipes/sql TypeORM'}，
      { title: 'Mongoose', path: '/recipes/mongodb' },
      {title:'Mongoose'，路径：'/recipes/mongodb'}，
      { title: 'Sequelize', path: '/recipes/sql-sequelize' },
      {title:'Sequelize'，路径：'/recipes/sql Sequelize'}，
      { title: 'OpenAPI (Swagger)', path: '/recipes/swagger' },
      {title:'OpenAPI（Swagger）'，路径：'/recipes/Swagger'}，
      { title: 'CQRS', path: '/recipes/cqrs' },
      {title:'CQRS'，路径：'/recipes/CQRS'}，
      { title: 'Prisma', path: '/recipes/prisma' },
      {title:'Prisma'，路径：'/recipes/Prisma'}，
      { title: 'Health checks (Terminus)', path: '/recipes/terminus' },
      {title:'健康检查（Terminus）”，路径：'/recipes/Terminus'}，
      { title: 'Documentation', path: '/recipes/documentation' },
      {title:'文档'，路径：'/recipes/Documentation'}，
      { title: 'Hot reload', path: '/recipes/hot-reload' },
      {title:'热重新加载'，路径：'/recipes/Hot reload'}，
      { title: 'Serve static', path: '/recipes/serve-static' },
      {title:'服务静态'，路径：'/recipes/Serve static'}，
      ],
      ],
      },
      },
      {
      {
      title: 'FAQ',
      title:'常见问题'，
      isOpened: false,
      Isoped:错误，
      children: [
      儿童：[
      { title: 'HTTP adapter', path: '/faq/http-adapter' },
      {title:'HTTP适配器'，路径：'/faq/HTTP adapter'}，
      { title: 'Global path prefix', path: '/faq/global-prefix' },
      {title:'全局路径前缀'，路径：'/faq/Global prefix'}，
      { title: 'Hybrid application', path: '/faq/hybrid-application' },
      {title:'混合应用程序'，路径：'/faq/Hybrid application'}，
      { title: 'HTTPS &amp; multiple servers', path: '/faq/multiple-servers' },
      {title:'HTTPS&amp;multiple servers'，路径：'/faq/multiple-servers'}，
      { title: 'Request lifecycle', path: '/faq/request-lifecycle' },
      {title:'请求生命周期'，路径：'/faq/Request lifecycle'}，
      {
      {
      title: 'Examples',
      title:'示例'，
      externalUrl: 'https://github.com/nestjs/nest/tree/master/sample',
      外部URL:'https://github.com/nestjs/nest/tree/master/sample',
      },
      },
      ],
      ],
      },
      },
      {
      {
      title: 'Migration guide',
      title:'迁移指南'，
      isOpened: false,
      Isoped:错误，
      path: '/migration-guide',
      路径：'/migration guide'，
      },
      },
      {
      {
      title: 'Official courses',
      title:'官方课程'，
      externalUrl: 'https://courses.nestjs.com/',
      外部URL:'https://courses.nestjs.com/',
      },
      },
      {
      {
      title: 'Discover',
      title:'发现'，
      isOpened: false,
      Isoped:错误，
      children: [{ title: 'Who is using Nest?', path: '/discover/companies' }],
      children:[{title:'谁在使用Nest？'，路径：'/discover/companies'}]，
      },
      },
      {
      {
      title: 'T-Shirts and Hoodies',
      title:'T恤和连帽衫'，
      externalUrl: 'https://nestjs.threadless.com/',
      外部URL:'https.js.com无线程/',
      },
      },
      {
      {
      title: 'Support us',
      title:'支持我们'，
      isOpened: false,
      Isoped:错误，
      path: '/support',
      路径：'/support'，
      },
      },`


const lines = raw.split('\n')
for (let i = 0; i < lines.length - 2; i += 2) {
  let en = lines[i]
  const cn = lines[i + 1]
  if (en.includes('title')) {
    const title = (cn.match(/(title|标题)[:：]\s*\'(.+?)\'/) || []).pop()
    en = en.replace(/title:\s*\'(.+?)\'/, `title:'${title}'`)
  }
  lines[i] = en
  // console.log({i, en})
}
const out = lines.slice(0, 1000).filter((v, i) => i % 2 === 0)
console.log(out.join('\n'))