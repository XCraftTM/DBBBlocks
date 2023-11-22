 module.exports = {
    name: "Get String Length",

    description: "Gets The Length Of Your Text",

    category: ".MOD",

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
            "name": "Input",
            "description": "Your string input here",
            "types": ["text", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Result",
            "description": "Length of your string",
            "types": ["number", "text", "unspecified"]
        },
    ],

    code: function(cache) {
        const string = this.GetInputValue("input", cache);
        this.StoreOutputValue(string.length, "result", cache);
        this.RunNextBlock("action", cache);
    }
};