module.exports = {
    name: "True If Path Exists",

    description: "Sends a true boolean if the file/folder path exists.",

    category: "Boolean Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "path",
            "name": "Path",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The path of the file or folder to check (e.g. \"E:\\myFolder\\data.json\" or \"F:\\Bot Folder\").",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks if the file/folder path exists.",
            "types": ["action"]
        },
        {
            "id": "boolean",
            "name": "Boolean",
            "description": "Type: Boolean\n\nDescription: Sends a true boolean if the file/folder path exists.",
            "types": ["boolean", "unspecified"]
        }
    ],

    code(cache) {
        const path = this.GetInputValue("path", cache) + "";

        const fs = require("fs");

        this.StoreOutputValue(fs.existsSync(path) ? true : false, "boolean", cache)
        this.RunNextBlock("action1", cache);
    }
}