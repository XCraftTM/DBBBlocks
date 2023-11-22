module.exports = {
    name: "Censor Check",

    description: "Checks if there is something to censor.",

    category: ".EXCORDO",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "string",
            "name": "Text",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member to kick from the server.",
            "types": ["text", "unspecified"],
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
       {
        "id": "result",
        "name": "Boolean",
        "description": "Result",
        "types": ["boolean", "unspecified"]
       }
    ],

    async code(cache) {
        const censor = await this.require("discord-censor");
        const string = this.GetInputValue("string", cache);

        const CurseOrNot = censor.check(string);

        this.StoreOutputValue(CurseOrNot, "result", cache);
        this.RunNextBlock("action", cache);
    }
}