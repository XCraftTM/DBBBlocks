module.exports = {
    name: "Disable Command",

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
        {
            "id": "disiable",
            "name": "Disiable",
            "description": "Acceptable Types: Boolean, unspecified\n\nDescription: If true, the command will be disiabled. If false the command will be enambled",
            "types": ["boolean", "unspecified"],
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
        },
    ],

    code(cache) {
        const command_name = this.GetInputValue("name", cache)
        const server = this.GetInputValue("server", cache)
        const disiable = this.GetInputValue("disiable", cache) 

        if(disiable){
            if(typeof command_name == "list"){this.setData("disiabled_commands", command_name,typeof server == "object" ? server.id : server, "server" )}
            else{
                var list =this.getData("disiabled_commands", typeof server == "object" ? server.id : server, "server") || []
                list.includes(command_name) ? undefined : list.push(command_name)
                this.setData("disiabled_commands", list, typeof server == "object" ? server.id : server, "server")
            }
        }
        else{
            var list = this.getData("disiabled_commands", typeof server == "object" ? server.id : server, "server") || []
            list.splice(list.indexOf(command_name), 1);
            this.setData("disiabled_commands", list, typeof server == "object" ? server.id : server, "server")
        }
        this.RunNextBlock("action", cache)

    }
}