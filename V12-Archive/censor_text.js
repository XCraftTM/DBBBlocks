module.exports = {
    name: "Censor Text",

    description: "Censors a text.",

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
        "name": "Text",
        "description": "Result",
        "types": ["text", "unspecified"]
       }
    ],

    async code(cache) {
        const censor = await this.require("discord-censor");
        const string = this.GetInputValue("string", cache);

        const censored = censor.censor(string);

        this.StoreOutputValue(censored, "result", cache);
        this.RunNextBlock("action", cache);
    }
}