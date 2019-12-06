const bcrypt = require('bcrypt');
const User = require('../models/User');
const GameItems = require('../models/GameItem');
const { constant } = require('../app-config');

// seedAdminUser = async function () {
//     try {
//         let users = await User.find();
//         if (users.length > 0) { return; };
//         // const salt = await bcrypt.genSalt(parseInt(parseInt(saltRounds)));
//         // const password = await bcrypt.hash('123', salt);
//         return User.create({
//             username: 'admin',
//             email: 'admin@admin.admin',
//             password: 'admin',
//         });
//     } catch (err) { console.log(err); }
// }

seedGameItems = function () {
    GameItems.find()
        .then((result) => {
            if (result.length > 0) { return; }
            console.log('***Initiate Seed for Game Items...***');
            return (
                GameItems.insertMany(
                    [{
                        itemName: 'Sandals of the Saint',
                        imageUrl: 'https://heroes.thelazy.net/images/7/78/Artifact_Sandals_of_the_Saint.gif',
                        strength: '2',
                        agility: '2',
                        intelligence: '2',
                        ownedBy: []
                    }, {
                        itemName: 'Sword of Hellfire',
                        imageUrl: 'https://heroes.thelazy.net/images/5/53/Artifact_Sword_of_Hellfire.gif',
                        strength: '6',
                        agility: '1',
                        intelligence: '1',
                        ownedBy: []
                    }, {
                        itemName: 'Quiet Eye of the Dragon',
                        imageUrl: 'https://heroes.thelazy.net/images/8/86/Artifact_Quiet_Eye_of_the_Dragon.gif',
                        strength: '1',
                        agility: '1',
                        intelligence: '1',
                        ownedBy: []
                    }, {
                        itemName: 'Armor of Wonder',
                        imageUrl: 'https://heroes.thelazy.net/images/a/ab/Artifact_Armor_of_Wonder.gif',
                        strength: '3',
                        agility: '3',
                        intelligence: '3',
                        ownedBy: []
                    }, {
                        itemName: 'Charm of Mana',
                        imageUrl: 'https://heroes.thelazy.net/images/0/04/Artifact_Charm_of_Mana.gif',
                        strength: '1',
                        agility: '2',
                        intelligence: '3',
                        ownedBy: []
                    }, {
                        itemName: 'Clover of Fortune',
                        imageUrl: 'https://heroes.thelazy.net/images/5/5f/Artifact_Clover_of_Fortune.gif',
                        strength: '1',
                        agility: '1',
                        intelligence: '5',
                        ownedBy: []
                    }, {
                        itemName: 'Buckler of the Gnoll King',
                        imageUrl: 'https://heroes.thelazy.net/images/e/eb/Artifact_Buckler_of_the_Gnoll_King.gif',
                        strength: '2',
                        agility: '2',
                        intelligence: '1',
                        ownedBy: []
                    }, {
                        itemName: 'Helm of Heavenly Enlightenment',
                        imageUrl: 'https://heroes.thelazy.net/images/a/a2/Artifact_Helm_of_Heavenly_Enlightenment.gif',
                        strength: '6',
                        agility: '6',
                        intelligence: '6',
                        ownedBy: []
                    }]
                ).then(console.log('***All Game Items are successfully loaded in the database!***'))
            );
        });
};

module.exports = {
    seedGameItems,
};