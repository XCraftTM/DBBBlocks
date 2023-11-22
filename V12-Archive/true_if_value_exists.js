module.exports = {
    name: "True If Value Exists",

    description: "Sends a true boolean if the value exists.",

    category: "Boolean Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to check if exists.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks if the value exists.",
            "types": ["action"]
        },
        {
            "id": "boolean",
            "name": "Boolean",
            "description": "Type: Boolean\n\nDescription: Sends a true/false signal if the value was detected or not.",
            "types": ["boolean", "unspecified"]
        }
    ],

    code: function(cache) {
        const value = this.GetInputValue("value", cache);
        this.StoreOutputValue(value ? true : false, "boolean", cache)

       this.RunNextBlock("action1", cache);
    }
}