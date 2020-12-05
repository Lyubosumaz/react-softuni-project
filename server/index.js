global.__basedir = __dirname;
const DELETE_BLACKLIST_TOKENS_SCRIPT = require('./utils');
const dbConnector = require('./config/database');

dbConnector()
    .then(() => {
        const config = require('./config/constants');
        const app = require('express')();

        require('./config/express')(app);
        require('./routes/routes')(app);

        //EVERY 1 HOUR DROPS LAST 45 MINUTES OF BLACKLIST
        DELETE_BLACKLIST_TOKENS_SCRIPT.cron.task.start();

        app.listen(config.port, console.log(`***Server is listening on port ${config.port}! Now its up to you!***`));
    })
    .catch(console.error);
