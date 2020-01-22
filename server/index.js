global.__basedir = __dirname;
const corn = require('./utils/cron');
const dbConnector = require('./config/database');

dbConnector().then(() => {
    const config = require('./config/constants');
    const app = require('express')();

    require('./config/express')(app);
    require('./routes/routes')(app);

    //DELETE_TOKENS_SCRIP EVERY 1 HOUR DROPS LAST 45 MINUTES OF BLACKLIST TOKENS
    corn.task.start();

    app.listen(config.port, console.log(`***Server is listening on port ${config.port}! Now its up to you!***`));
}).catch(console.error);