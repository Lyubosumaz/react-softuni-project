const GameItems = require('../models/GameItem');

function seedGameItems() {
    GameItems.find()
        .then((result) => {
            if (result.length > 0) { return; }
            console.log('***Initiate Seed for Items!***');
            return (
                GameItems.insertMany(
                    [{
                        itemName: 'Tabula Rasa',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/8/8c/Tabula_Rasa_inventory_icon.png?version=07ff8a06d71e2fa01cdb6912110cb64b',
                        strength: '2',
                        agility: '2',
                        intelligence: '2',
                        price: '4',
                        ownedBy: []
                    }, {
                        itemName: 'Daresso\'s Passion',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/1/1f/Daresso%27s_Passion_inventory_icon.png?version=42fef4bef48dae21093910934357cd8c',
                        strength: '9',
                        agility: '1',
                        intelligence: '1',
                        price: '12',
                        ownedBy: []
                    }, {
                        itemName: 'Lioneye\'s Remorse',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/9/95/Lioneye%27s_Remorse_inventory_icon.png?version=dab52d352ea66dc560fc18e3334fb2fe',
                        strength: '5',
                        agility: '2',
                        intelligence: '1',
                        price: '9',
                        ownedBy: []
                    }, {
                        itemName: 'Chains of Command',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/5/5d/Chains_of_Command_inventory_icon.png?version=8839dafbe15c7b840682f3cdcc4217af',
                        strength: '3',
                        agility: '3',
                        intelligence: '10',
                        price: '17',
                        ownedBy: []
                    }, {
                        itemName: 'The Bringer of Rain',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/8/89/The_Bringer_of_Rain_inventory_icon.png?version=5c28cd58b5b2702a5845ce9c986c9f26',
                        strength: '9',
                        agility: '9',
                        intelligence: '1',
                        price: '20',
                        ownedBy: []
                    }, {
                        itemName: 'Devoto\'s Devotion',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/a/a0/Devoto%27s_Devotion_inventory_icon.png?version=97878c23d897ebd84610cb4d803a2fbd',
                        strength: '8',
                        agility: '8',
                        intelligence: '2',
                        price: '18',
                        ownedBy: []
                    }, {
                        itemName: 'Dance of the Offered',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/0/0c/Dance_of_the_Offered_inventory_icon.png?version=59ef4f69510a97415ec2ddf2bd02ed19',
                        strength: '3',
                        agility: '3',
                        intelligence: '3',
                        price: '10',
                        ownedBy: []
                    }, {
                        itemName: 'Shavronne\'s Wrappings',
                        imageUrl: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/6/62/Shavronne%27s_Wrappings_inventory_icon.png?version=8a0039907ba9325199fc7f89630cfeb1',
                        strength: '1',
                        agility: '6',
                        intelligence: '9',
                        price: '20',
                        ownedBy: []
                    }])
                    .then(console.log('***Items Successfully loaded in database!***'))
                    .catch((err) => { console.error(err); })
            );
        });
};

module.exports = {
    seedGameItems,
};