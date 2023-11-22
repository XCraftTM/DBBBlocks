module.exports = {
    name: "True if number exists",

    description: "Sends a true boolean if a number exists",

    category: "Boolean Stuff",

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
            "types": ["number", "undefined", "text", "null", "unspecified", "null", "object", "date", "list"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action",
            "description": "Type: Runs the next block.",
            "types": ["action"]
        },
        {
            "id": "boolean",
            "name": "Boolean",
            "description": "Type: Number\n\nDescription: The number.",
            "types": ["boolean", "unspecified"]
        }
    ],

    code(cache) {
        const number = this.GetInputValue("number", cache)
        if(isNaN(number)){this.StoreOutputValue(false, "boolean", cache)}
        else{this.StoreOutputValue(true, "boolean", cache)}

        this.RunNextBlock("action1", cache)

    }
}