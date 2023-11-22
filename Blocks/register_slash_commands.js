module.exports = {
    name: "Register Slash Commands",

    description: "Registers Slash Commands (by @XCraftTM)",

    category: ".MOD",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "text",
            "name": "Commands",
            "description": "Description: The Commands you want to register!.",
            "type": "TEXT"
        }
    ],

    outputs: [],

    async init(DBB) {
        const { readFileSync } = require("fs");
        try {
            const commands = JSON.parse(readFileSync(DBB.File.paths.workspaces)).map((item) => { return item.blocks.filter(x => x.name == 'register_slash_commands') }).filter(x => x[0]).map(x => x.map(x => JSON.parse("[" + x.options.text + "]")).flat()).flat();
            if (JSON.parse(readFileSync(DBB.File.paths.workspaces)).map((item) => { return item.blocks.filter(x => x.name == 'register_slash_commands') }).filter(x => x[0]).length > 0) {
                DBB.DiscordJS.client.application.commands.set(commands)
                    .then(DBB.Core.console("INFO", "Successfully reloaded " + commands.length + " application (/) commands."))
                    .catch((e) => console.log(e));
            }
        } catch (e) {
            console.log(e)
        }

    },

    async code(cache) {
    }
}