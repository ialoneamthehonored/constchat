const mineflayer = require('mineflayer');

var bot;

const botArgs = {
    host: 'constantiam.net',
    auth: 'microsoft',
    username: 'TheH0n0redOne'
};

function createBot() {
    bot = mineflayer.createBot(botArgs);

    bot.on('messagestr', (message) => {
        console.log(message.toString());
    });

    bot.on('kicked', (e) => {
        bot = undefined;
        console.warn('Kicked: ', e);
    });

    bot.on('end', (e) => {
        bot = undefined;
        console.warn('End: ', e);
    });

    bot.on('error', (e) => {
        bot = undefined;
        console.error(e);
    });
}

setInterval(() => {
    if (!bot) createBot();
}, 15000, 15000);

createBot();
