const System = require('systemic');
const adminRoutes = require('./admin-routes');
const appRoutes = require('./app-routes');

module.exports = new System({ name: 'routes' })
	.add('routes.admin', adminRoutes())
	.dependsOn('config', 'logger', 'app', 'middleware.prepper', 'manifest', 'healthcheck')
	.add('routes.app', appRoutes())
	.dependsOn('app')
	.add('routes')
	.dependsOn('routes.admin', 'routes.app');
