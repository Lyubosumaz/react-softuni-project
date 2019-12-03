global.__basedir = __dirname;
const dbConnector = require('./config/database');

dbConnector().then(() => {
    const config = require('./config/constants');
    const app = require('express')();

    require('./config/express')(app);
    require('./routes/routes')(app);

    app.listen(config.port, console.log(`***Server is listening on port ${config.port}! Now its up to you!***`));
}).catch(console.error);