const {
    Client,
    Message,
    MessageEmbed,
    MessageButton,
    MessageActionRow
} = require('discord.js');

module.exports = {
    name: 'buttonpanel',
    aliases: ['bp'],
    description: 'Shows bot\'s latency.',
    usage: '',
    permission: 'SEND_MESSAGES',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.guild.name, message.guild.iconURL({
                dynamic: true
            }))
            .setDescription(
                "Click any of the buttons to simulate a **engine start** event."
            )
            .setTitle('Touch Simulator')

        const embed2 = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.guild.name, message.guild.iconURL({
                dynamic: true
            }))
            .setDescription(
                "Click any of the buttons to simulate the corresponding event."
            )
            .setTitle('Actions Simulator')


        const bt = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('fp1')
                    .setLabel('FingerPrint 1')
                    .setStyle('PRIMARY'),

                new MessageButton()
                    .setCustomId('fp2')
                    .setLabel('FingerPrint2')
                    .setStyle('PRIMARY'),

                new MessageButton()
                    .setCustomId('fp3')
                    .setLabel('FingerPrint3')
                    .setStyle('PRIMARY'),
            );

        const bt2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('est')
                    .setLabel('Engine Stop Trigger')
                    .setStyle('PRIMARY'),

                new MessageButton()
                    .setCustomId('odlp')
                    .setLabel('Outside Dashcam Live Pic')
                    .setStyle('PRIMARY'),
                
                new MessageButton()
                    .setCustomId('idlp')
                    .setLabel('Inside Dashcam Live Pic')
                    .setStyle('PRIMARY'),

                new MessageButton()
                    .setCustomId('dldc')
                    .setLabel('Driver\'s License Digital Copy')
                    .setStyle('PRIMARY'),
            );

        message.channel.send({
            embeds: [embed],
            components: [bt]
        });

        message.channel.send({
            embeds: [embed2],
            components: [bt2]
        });
    }
}