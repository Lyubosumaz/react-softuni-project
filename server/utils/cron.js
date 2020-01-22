const cron = require('node-cron');
const models = require('../models');

module.exports = {
    //('0 * * * *') At minute 0 EVERY HOUR
    //('0 */2 * * *') At minute 0 EVERY 2 HOURS
    task: cron.schedule('0 * * * *', () => {
        let target = new Date();
        target.setMinutes(target.getMinutes() - 45);
        console.log(target, `${target}`);
        models.BlacklistToken.find({ createdAt: { $lte: target } })
            .then((result) => {
                if (result.length === 0) { return console.log('***There is Nothing to Remove!***'); }

                return (
                    models.BlacklistToken.deleteMany({ createdAt: { $lte: target } })
                        .then(console.log(`***Database remove script is successfully! Everything before ${target} is removed!***`))
                        .catch((err) => {
                            console.log('***Database remove script is failed! Nothing is removed!***');
                            console.log(err);
                        })
                );
            }).catch((err) => { console.error(err); });
    }),
};
