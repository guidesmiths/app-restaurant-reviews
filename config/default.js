module.exports = {
	server: {
		host: '0.0.0.0',
		port: process.env.PORT || 5000,
	},
	routes: {
		admin: {
			swaggerOptions: {
				swaggerDefinition: {
					info: {
						description: 'Documentation for app-restaurant-reviews',
						title: 'app-restaurant-reviews',
						version: '1.0.0',
					},
					host: process.env.SERVICE_ENV || 'localhost:4000',
					basePath: '/v1',
					produces: ['application/json'],
					schemes: ['http'],
					securityDefinitions: {
						JWT: {
							type: 'apiKey',
							in: 'header',
							name: 'Authorization',
							description: '',
						},
					},
				},
			},
		},
		api: {
			url: process.env.API_URL || 'http://0.0.0.0:4000',
			torralpoll_create_url: process.env.TORRALPOLL_CREATE_URL || 'https://torralbot-back.herokuapp.com/create',
			slack: process.env.SLACK_WEBHOOK_URL,
		},
	},
	metrics: {
		key: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
		internalLogging: false,
		context: {
			tags: {
				'ai.cloud.role': process.env.npm_package_name,
				'ai.cloud.roleInstance': process.env.HOSTNAME || 'local',
			},
		},
		autoCollect: {
			requests: true,
			performance: true,
			exceptions: true,
			dependencies: true,
			console: false,
		},
	},
	logger: {
		transport: 'console',
		include: [
			'tracer',
			'timestamp',
			'level',
			'message',
			'error.message',
			'error.code',
			'error.stack',
			'request.url',
			'request.headers',
			'request.params',
			'request.method',
			'response.statusCode',
			'response.headers',
			'response.time',
			'process',
			'system',
			'package.name',
			'service',
		],
		exclude: ['password', 'secret', 'token', 'request.headers.cookie', 'dependencies', 'devDependencies'],
	},
};
