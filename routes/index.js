const router = require('koa-router')(),
      controller = require('../controllers/Home');

router.get('/', controller.index);
router.get('/list/:kw?', controller.list);
router.get('/error', controller.error);
//未匹配到的路由也直接跳到error页面
router.get('*', controller.error);

module.exports = router;