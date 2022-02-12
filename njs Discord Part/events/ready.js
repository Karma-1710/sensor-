const client = require('../index')
client.on('ready', async (message) => {
    console.log(`${client.user.tag} is now online!`)
    setInterval(() => {
                client.user.setActivity("logs for MUJ 6.0", {type: "WATCHING"})
    }, 5000);
    
})