module.exports = {
    name: "Create Slash Command (Advanced)",

    description: "Creates a slash command and adds it to a slash commands list if provided! (By @T-45)",

    category: "Slash Commands Builder",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "name",
            "name": "Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: Name of the slash command.\n\nThis is how its going to look like in discord if you put \"help\": /help\n\n(Required)",
            "types": ["text", "unspecified"],
        },
        {
            "id": "desc",
            "name": "Description",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The description of the slash command.\n\n(Required)",
            "types": ["text", "unspecified"],
        },
        {
            "id": "options",
            "name": "Options",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The options list. (Optional)",
            "types": ["list", "unspecified"]
        },
        {
            "id": "commands",
            "name": "Slash Commands",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The slash commands list to update. (Optional)\n\nThis option is made to make it to you dont need to use the lists blocks, so instead of using them you can just use the slash commands input to add this slash command to the list.",
            "types": ["list", "unspecified"]
        }
    ],

    options: [
        {
            "id": "namee",
            "name": "Name",
            "description": "Description: Name of the slash command.\n\nThis is how its going to look like in discord if you put \"help\": /help\n\n(Required)",
            "type": "TEXT",
        },
        {
            "id": "descc",
            "name": "Description",
            "description": "Description: The description of the slash command.\n\n(Required)",
            "type": "TEXT",
        },
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "slash_cmds",
            "name": "Slash Command(s)",
            "description": "Type: List\n\nDescription: The updated slash commands list.\n\nCan be connected directly with the \"Register Slash Commands (Input)\" block or with another \"Create Slash Command\" block to create a list with multiple slash commands!",
            "types": ["list"]
        },

    ],

    code(cache) {
        let name = this.GetInputValue("name", cache) || this.GetOptionValue("namee", cache);
        const desc = this.GetInputValue("desc", cache) || this.GetOptionValue("descc", cache);
        const options = this.GetInputValue("options", cache);
        let slcslist = this.GetInputValue("commands", cache);

        const cmd = {
            "name": name.toLowerCase(),
            "description": desc,
            "options": options
        }

        if (!slcslist) slcslist = [cmd]; else slcslist.push(cmd)

        this.StoreOutputValue(slcslist, "slash_cmds", cache)
        this.RunNextBlock("action", cache);
    }
}