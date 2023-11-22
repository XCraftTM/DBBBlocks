module.exports = {
    name: "Discord Audio Player [Dependency]",

    description: "Starts the Discord Audio Player dependency required for other blocks to work.",

    category: "Dependencies",

    inputs: [],

    options: [],

    outputs: [],

    async init(DBB) {
        if (!DBB.Dependencies.DiscordPlayer)
            DBB.Dependencies.DiscordPlayer = {}

        const { Player } = DBB.Dependencies.DiscordPlayer.module = await DBB.Core.require('discord-player')

        await DBB.Core.require('ffmpeg-static')
        await DBB.Core.require('@discordjs/opus')

        DBB.Dependencies.DiscordPlayer.player = new Player(
            DBB.DiscordJS.client,
            {
                ytdlOptions: {
                    quality: 'highestaudio',
                    highWaterMark: 1 << 25,
                }
            }
        );
    },

    code() {}
}