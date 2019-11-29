const System = require('systemic');
const adminRoutes = require('./admin-routes');
const contentRoutes = require('./content-routes');

module.exports = new System({ name: 'routes' })
	.add('routes.admin', adminRoutes())
	.dependsOn(
		'config',
		'logger',
		'app',
		'middleware.prepper',
		'manifest',
		'healthcheck',
	)
	.add('routes.content', contentRoutes())
	.dependsOn('app')
	.add('routes')
	.dependsOn('routes.admin', 'routes.content');
