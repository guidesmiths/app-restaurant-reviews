const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'app-matteoaffinity' }).bootstrap(join(__dirname, 'components'));
