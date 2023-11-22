module.exports = {
    name: "Console Table",

    description: "Sends a table to your console. Useful for inspecting lists and objects or something else.",

    category: "Extras",

    inputs: [{
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Acceptable Types: List, Object, Unspecified\n\nDescription: The value to send to your console.",
            "types": ["object", "list", "unspecified"]
        }
    ],

    options: [],

    outputs: [{
        "id": "action",
        "name": "Action",
        "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
        "types": ["action"]
    }],

    code(cache) {
        const content = this.GetInputValue("value", cache);

        console.table(content);

        this.RunNextBlock("action", cache);
    }
}