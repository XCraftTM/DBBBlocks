module.exports = {
    name: "Conditional Value",

    description: "If input value is true then output the respective value.",

    category: ".MOD", //".Amnezia Blocks",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "input",
            "name": "Input Value",
            "description": "Acceptable Types: Boolean\n\nDescription: If the value is true it output text.",
            "types": ["boolean"],
            "required": true
        },
        {
            "id": "TrueInput",
            "name": "Value if True",
            "description": "Acceptable Types: Text, Unspecified, Undefined, Null, Object, Boolean, Date, Number, List\n\nDescription: If the value is true it output text.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": true
        },
        {
            "id": "FalseInput",
            "name": "Value if False",
            "description": "Acceptable Types: Text, Unspecified, Undefined, Null, Object, Boolean, Date, Number, List\n\nDescription: If the value is true it output text.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
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
            "id": "outputtext",
            "name": "Output Value",
            "description": "Type: Text\n\nDescription: The text obtained if the input boolean is TRUE.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        }
    ],

    code(cache) {
        const inputboolean = this.GetInputValue("input", cache);
        const TT = this.GetInputValue("TrueInput", cache);
        const FT = this.GetInputValue("FalseInput", cache);
        let output = FT;

        if(inputboolean == true) output = TT;
        
        this.StoreOutputValue(output, "outputtext", cache);
        this.RunNextBlock("action", cache);
    }
}
