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

        await DBB.Core.require("discord-player@latest")

        const { Player } = require("discord-player");
        DBB.Dependencies.DiscordPlayer.module = require("discord-player")

        await DBB.Core.require('ffmpeg-static')
        await DBB.Core.require('@discordjs/opus')
        await DBB.Core.require("play-dl")

        DBB.Dependencies.DiscordPlayer.player = new Player(DBB.DiscordJS.client);
    },

    code() { }
}