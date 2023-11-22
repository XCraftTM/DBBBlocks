module.exports = {
    name: "If True Then Action",

    description: "If input value is true then output the entered text.",

    category: ".MJ",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "input",
            "name": "Boolean",
            "description": "Acceptable Types: Boolean\n\nDescription: If the value is true it output text.",
            "types": ["boolean", "unspecified"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action3",
            "name": "Action [True]",
            "description": "Type: Action\n\nDescription: Executes the following blocks when boolean is true",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action [False]",
            "description": "Type: Action\n\nDescription: Executes the following blocks when boolean is false",
            "types": ["Action"]
        }
    ],

        code: function(cache) {
            const value = this.GetInputValue("input", cache);
            this.RunNextBlock(value === true ? "action3" : "action2", cache);
        }
    }
