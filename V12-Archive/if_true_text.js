module.exports = {
    name: "If true Then text",

    description: "If input value is true then output the entered text.",

    category: ".Amnezia Blocks",

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
            "name": "Input Value",
            "description": "Acceptable Types: Boolean\n\nDescription: If the value is true it output text.",
            "types": ["boolean"],
            "required": true
        }
    ],

    options: [
        {
            "id": "truetext",
            "name": "Value true Text",
            "description": "Description: The text to output if true.",
            "type": "TEXT"
        },
        {
            "id": "falsetext",
            "name": "Value false Text",
            "description": "Description: The text to output if false.",
            "type": "TEXT"
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "outputtext",
            "name": "Output Text",
            "description": "Type: Text\n\nDescription: The text obtained if the input boolean is TRUE.",
            "types": ["text"]
        }
    ],

    async code(cache) {

        const inputboolean = this.GetInputValue("input", cache) + "";

        if (inputboolean === true) {
            var output = this.GetOptionValue("truetext", cache);
        } else {
            var output = this.GetOptionValue("falsetext", cache);
        }
        
        this.StoreOutputValue(output, "outputtext", cache);
        this.RunNextBlock("action", cache);
    }
}
