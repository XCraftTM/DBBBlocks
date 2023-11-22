module.exports = {
    name: "Get Volume",

    description: "Gets a volume for the current audio being played by your bot. /by M&RT!N!×J",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to set the new volume for the current audio being played by your bot.",
            "types": ["object", "unspecified"],
            "required": true,
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
            "id": "result",
            "name": "Volume",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["number"]
        }
    ],

    async code(cache) {
        const server = this.GetInputValue("server", cache);
        const serverid = server.id;

        const value = this.getData("volume", serverid, "server");
        if (!value) {
            this.setData("100", serverid, "server")
            this.StoreOutputValue("100", "result", cache);
        }  else {
        this.StoreOutputValue(value, "result", cache);
        }
        this.RunNextBlock("action", cache);
}
}