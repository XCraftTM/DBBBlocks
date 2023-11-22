module.exports = {
    name: "Advanced Math Operations",

    description: "Makes some math",

    category: ".Panso",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "operation",
            "name": "Math Operation",
            "description": "Description: The name of the currency (data)",
            "types": ["text", "unspecified"],
            "required": true
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
            "name": "Result",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["text", "unspecified", "number"]
        },
    ],

   async code(cache) {
        const operation = this.GetInputValue("operation", cache) + ""
        const mathjs = await this.require("mathjs")

        let result = mathjs.evaluate(operation) 
        
        this.StoreOutputValue(result, "result", cache)
        this.RunNextBlock("action", cache)
    }
}