module.exports = {
    name: "Register Slash Commands",

    description: "Registers Slash Commands",

    category: "Bot",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "commands",
            "name": "commands",
            "description": "contains a command from: https://autocode.com/tools/discord/command-builder/",
            "types": ["object"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const fs = require('fs')
        const bot = global.bot
        bot.bulkEditCommands(
            this.GetInputValue('commands', cache), 1
        ).then(() => {
            this.RunNextBlock('action', cache)
        })
    }
}