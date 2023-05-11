module.exports = {
    name: "Discord Audio Player [Dependency]",

    description: "Starts the Discord Audio Player dependency required for other blocks to work.",

    category: "Dependencies",

    inputs: [],

    options: [],

    outputs: [],

    async init(DBB) {
        const fs = require("fs");

        if (!DBB.Dependencies.DiscordPlayer)
            DBB.Dependencies.DiscordPlayer = {}

        await DBB.Core.require("discord-player")

        const { Player } = require("discord-player");
        DBB.Dependencies.DiscordPlayer.module = require("discord-player")

        if (process.platform === "win32") {
            await DBB.Core.require("ffmpeg-static")
            if (require('os').arch() !== 'x64') {
                console.log("\x1b[33mwarning\x1b[0m You may have problems installing \x1b[33m@discordjs/opus\x1b[0m, cause your NodeJS Version is 32x. \n\x1b[33mwarning\x1b[0m Please install the 64x Version of NodeJS to fix any issues!")
            }
        }

        await DBB.Core.require('@discordjs/opus')
        await DBB.Core.require('play-dl')

        if(!fs.existsSync(".env")) {
            fs.writeFileSync(".env", "DP_FORCE_YTDL_MOD=\"play-dl\"");
            console.log("\x1b[36mnotice \x1b[33m.env \x1b[0mFile was created in Bot Folder!")
        }

        DBB.Dependencies.DiscordPlayer.player = new Player(DBB.DiscordJS.client, {
            ytdlOptions: {
                quality: "highestaudio",
                filter: "audioonly"
            }
        });
        await DBB.Dependencies.DiscordPlayer.player.extractors.loadDefault();
    },

    code() { }
}