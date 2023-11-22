module.exports = {
    name: "Check if number exists",

    description: "Creates if a number exists",

    category: "Inputs",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Runs the block.",
            "types": ["action"]
        },
        {
            "id": "number",
            "name": "Number",
            "description": "Description: The number to set.",
            "types": ["number", "undefined", "text", "null", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action if True",
            "description": "Type: Runs the next block.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action if False",
            "description": "Type: Number\n\nDescription: The number.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const number = this.GetInputValue("number", cache)
        if(isNaN(number)){this.RunNextBlock("action2", cache)}
        else{this.RunNextBlock("action1", cache)}

    }
}