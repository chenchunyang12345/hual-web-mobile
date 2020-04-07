const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

module.exports = {
  assetPrefix: './',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/technology': { page: '/technology' },
      '/product': { page: '/product' },
      '/about': { page: '/about' }
    };
  },
  // 目前项目里的路由跳转只兼容开发环境和静态导出页面，不支持next start
  env: {
    path: isProd
      ? {
          nav1: './index.html',
          nav2: './technology.html',
          nav3: './product.html',
          nav4: './about.html'
        }
      : {
          nav1: '/',
          nav2: '/technology',
          nav3: '/product',
          nav4: '/about'
        }
  }
};
