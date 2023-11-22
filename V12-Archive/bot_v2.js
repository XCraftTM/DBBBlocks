module.exports = {
    name: "Bot v2",

    description: "like the old bot butt better",

    category: "Bot",
    
    auto_execute: true,

    inputs: [],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "bot",
            "name": "Bot",
            "description": "Type: Object\n\nDescription: contains the Bot object",
            "types": ["object"]
        }
    ],

    code(cache) {
        const { Client } = require("eris");
        const fs = require('fs')
        const token = fs.readFileSync('./data/token.txt').toString()

        const bot = new Client(token, {
            intents: [
                "allNonPrivileged",
                // "allPrivileged"
            ]
        },
            {
                description: "Bot V2 made with Eris",
                owner: ""
            });

        bot.on("ready", () => {
            console.log(`Logged in as: ${bot.user.username}`);
            this.StoreOutputValue(bot, "bot", cache);
            global.bot = bot;
            this.RunNextBlock('action', cache);
        });

        bot.on("error", (err, id) => {
            console.error(err, id);
        });

        bot.connect();
    }
}