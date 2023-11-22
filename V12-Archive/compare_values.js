module.exports = {
    name: "Compare Values",

    description: "Takes in 2 values and outputs the non undefined value",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "Input1",
            "name": "Value 1",
            "description": "Acceptable Types: Text, Unspecified, Undefined, Null, Object, Boolean, Date, Number, List\n\nDescription: Input 1.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": true
        },
        {
            "id": "Input2",
            "name": "Value 2",
            "description": "Acceptable Types: Text, Unspecified, Undefined, Null, Object, Boolean, Date, Number, List\n\nDescription: Input 2.",
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
            "description": "Type: Text\n\nDescription: Outputs the value that is not undefined.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        }
    ],

    code(cache) {
        const TT = this.GetInputValue("Input1", cache);
        const FT = this.GetInputValue("Input2", cache);
        let output = FT;

        if(TT == undefined) output = FT;
        else output = TT;
        
        this.StoreOutputValue(output, "outputtext", cache);
        this.RunNextBlock("action", cache);
    }
}