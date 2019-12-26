const System = require('systemic');
const adminRoutes = require('./admin-routes');
const appRoutes = require('./app-routes');
const apiRoutes = require('./api-routes');

module.exports = new System({ name: 'routes' })
	.add('routes.admin', adminRoutes())
	.dependsOn('config', 'logger', 'app', 'middleware.prepper', 'manifest', 'healthcheck')
	.add('routes.api', apiRoutes())
	.dependsOn('app', 'config')
	.add('routes.app', appRoutes())
	.dependsOn('app')
	.add('routes')
	.dependsOn('routes.admin', 'routes.api', 'routes.app');
