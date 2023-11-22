module.exports = {
    name: "Get Command Alias",

    description: "Lets you enamble or disiable a command",

    category: ".Panso",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
        },
        {
            "id": "name",
            "name": "Command Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name of the data.",
            "types": ["text", "unspecified"],
            "required": true
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
            "id": "alias",
            "name": "Alias",
            "description": "Acceptable Types: list, unspecified\n\nDescription: If true, the command will be disiabled. If false the command will be enambled",
            "types": ["list", "unspecified"],
        }
    ],

    code(cache) {
        const command_name = this.GetInputValue("name", cache)
        const server = this.GetInputValue("server", cache)

        var list = this.getData("command_alias", typeof server == "object" ? server.id : server, "server") || {}
        
        this.StoreOutputValue(list[command_name] ,"alias", cache)
        this.RunNextBlock("action", cache)
    }
}