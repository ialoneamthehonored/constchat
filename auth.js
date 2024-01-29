const mineflayer = require('mineflayer');
let bot = mineflayer.createBot({
    host: 'constantiam.net',
    auth: 'microsoft',
    username: 'TheH0n0redOne'
})

bot.on('kicked', console.log)
bot.on('error', console.log)
bot.on('messagestr', (message) => {
    console.log(message.toString());
});

bot.on('messagestr', (message) => {
    // Message bullshit
});