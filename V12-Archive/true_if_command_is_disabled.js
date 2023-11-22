module.exports = {
    name: "Get Disabled Commands",

    description: "Sends a true boolean if the command is disabled",

    category: ".Panso",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
        },

        {
            "id": "server",
            "name": "Server",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: If there is no server then it will be globally",
            "types": ["object", "text", "unspecified"],
            "required": true
        },
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "disable",
            "name": "Disable",
            "description": "Acceptable Types: Boolean, unspecified\n\nDescription: If true, the command will be disiabled. If false the command will be enambled",
            "types": ["list", "unspecified"],
        }
    ],

    code(cache) {
        const server = this.GetInputValue("server", cache)
        const list = this.getData("disiabled_commands", typeof server == "object" ? server.id : server, "server") || []

        this.StoreOutputValue(list, "disable", cache)
        this.RunNextBlock("action", cache)

    }
}