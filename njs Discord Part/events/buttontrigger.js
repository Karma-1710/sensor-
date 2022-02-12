const {
    MessageActionRow,
    MessageButton,
    Discord
} = require('discord.js');
const {
    MessageEmbed
} = require('discord.js')
const client = require('../index')

client.on("interactionCreate", async (interaction) => {

    // await interaction.deferUpdate();
    if (interaction.isButton()) {
        const bt = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('unr')
                    .setLabel('Unrecognized?')
                    .setStyle('DANGER'),

            );
        if (interaction.customId === 'fp1') {

            interaction.reply({ content: `Simulation has been successfully completed!`, ephemeral: true });

            let startLogChannel = interaction.guild.channels.cache.find(channel => channel.name === "engine-start");
            let startLogEmbed = new MessageEmbed()
                .setTitle("Engine Start log")
                .addField("Vehicle Description:", `Vehicle Model: **Generic Motors**\nVehicle No. Plate: **GJ06-AB-1234**\nVehicle Type: **Electric**`)
                .addField("Fingerprint ID:", `*FG75SH56HN*`)
                .addField("User Details: ", `${interaction.user} with ID: ${interaction.user.id}`)
                .addField("Event ID:", `**3454536783**`)
                .setFooter("Whitelisted",
                    interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp(`${interaction.createdAt}`)
            startLogChannel.send({
                embeds: [startLogEmbed],
                components: [bt]
            })

        }
        if (interaction.customId === 'fp2') {

            interaction.reply({ content: `Simulation has been successfully completed!`, ephemeral: true });

            let startLogChannel = interaction.guild.channels.cache.find(channel => channel.name === "engine-start");
            let startLogEmbed = new MessageEmbed()
                .setTitle("Engine Start log")
                .addField("Vehicle Description:", `Vehicle Model: **Generic Motors**\nVehicle No. Plate: **GJ06-AB-1234**\nVehicle Type: **Electric**`)
                .addField("Fingerprint ID:", `*QJ21SH29HK*`)
                .addField("User Details: ", `${interaction.user} with ID: ${interaction.user.id}`)
                .addField("Event ID:", `**3454536783**`)
                .setFooter("Whitelisted",
                    interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp(`${interaction.createdAt}`)
            startLogChannel.send({
                embeds: [startLogEmbed],
                components: [bt]
            })

        }
        if (interaction.customId === 'fp3') {

            interaction.reply({ content: `Simulation has been successfully completed!`, ephemeral: true });

            let startLogChannel = interaction.guild.channels.cache.find(channel => channel.name === "engine-start");
            let startLogEmbed = new MessageEmbed()
                .setTitle("Engine Start log")
                .addField("Vehicle Description:", `Vehicle Model: **Generic Motors**\nVehicle No. Plate: **GJ06-AB-1234**\nVehicle Type: **Electric**`)
                .addField("Fingerprint ID:", `*AK51BN21HO*`)
                .addField("User Details: ", `${interaction.user} with ID: ${interaction.user.id}`)
                .addField("Event ID:", `**3454536783**`)
                .setFooter("Whitelisted",
                    interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp(`${interaction.createdAt}`)
            startLogChannel.send({
                embeds: [startLogEmbed],
                components: [bt]
            })

        }
        if (interaction.customId === 'est') {

            interaction.reply({ content: `Simulation has been successfully completed!`, ephemeral: true });

            let offLogChannel = interaction.guild.channels.cache.find(channel => channel.name === "engine-off");
            let offLogEmbed = new MessageEmbed()
                .setTitle("Engine Off log")
                .addField("Vehicle Description:", `Vehicle Model: **Generic Motors**\nVehicle No. Plate: **GJ06-AB-1234**\nVehicle Type: **Electric**`)
                .addField("Session Fingerprint ID:", `*FG75SH56HN*`)
                .addField("User Details: ", `${interaction.user} with ID: ${interaction.user.id}`)
                .setFooter("Whitelisted",
                    interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp(`${interaction.createdAt}`)
            offLogChannel.send({ embeds: [offLogEmbed] })

        }
        if (interaction.customId === 'odlp') {

            interaction.reply({ content: `Fetching image from the dashcam...`, ephemeral: true });
            await new Promise(resolve => setTimeout(resolve, 3000))
            interaction.followUp({ content: `https://media.discordapp.net/attachments/941801235676282940/941802011391844462/unknown.png?width=651&height=313`, ephemeral: true });

        }
        if (interaction.customId === 'idlp') {

            interaction.reply({ content: `Fetching image from the dashcam...`, ephemeral: true });
            await new Promise(resolve => setTimeout(resolve, 3000))
            interaction.followUp({ content: `https://media.discordapp.net/attachments/941801235676282940/941802891210010704/InisdeFacingCamera.jpg?width=1280&height=630`, ephemeral: true });

        }
        if (interaction.customId === 'dldc') {
            interaction.reply({ content: `Fetching DL from the DB...`, ephemeral: true });
            await new Promise(resolve => setTimeout(resolve, 3000))
            return interaction.followUp({ content: `https://cdn.discordapp.com/attachments/941801235676282940/942004881739354151/aadhar_stock.jpg`, ephemeral: true });
        }
        if (interaction.customId === 'unr') {

            interaction.reply({ content: `Fetching session details..`, ephemeral: true });
            await new Promise(resolve => setTimeout(resolve, 3000))
            interaction.editReply({ content: `Check your DMs for detailed info.`, ephemeral: true })
            const dmembed = new MessageEmbed()
                .setTitle(`Unrecognized Session Info`)
                .setDescription(`You're recieving this DM as you didn't recognize the event with id *3454536783*`)
                .addField("Vehicle Description:", `Vehicle Model: **Generic Motors**\nVehicle No. Plate: **GJ06-AB-1234**\nVehicle Type: **Electric**`)
                .addField("Session Fingerprint ID:", `*FG75SH56HN*`)
                .addField("Session Event ID:", `**3454536783**`)
                .setFooter("Dashcam Images attached.",
                    interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp(`${interaction.createdAt}`)

            interaction.user.send({ embeds: [dmembed] });
            interaction.user.send({ content: `Outside Dashcam Live Pic \n https://media.discordapp.net/attachments/941801235676282940/941802011391844462/unknown.png?width=651&height=313` });
            interaction.user.send({ content: `Inside Dashcam Live Pic \n https://media.discordapp.net/attachments/941801235676282940/941802891210010704/InisdeFacingCamera.jpg?width=1280&height=630` });

        }
    }
})