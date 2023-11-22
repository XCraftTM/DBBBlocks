module.exports = {
    name: "Time Travel 3x",

    description: "Changes the value type to \"Unspecified\". Useful to be able to connect to any connector.",

    category: "Extras",

    inputs: [{
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "time",
            "name": "Milliseconds",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to change its value type to \"Unspecified\".",
            "types": ["number", "unspecified"],
        },
        {
            "id": "value1",
            "name": "Value 1",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to change its value type to \"Unspecified\".",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": true
        },
        {
            "id": "value2",
            "name": "Value 2",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to change its value type to \"Unspecified\".",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": true
        },
        {
            "id": "value3",
            "name": "Value 3",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to change its value type to \"Unspecified\".",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": true
        },
    ],

    options: [],

    outputs: [{
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "value1",
            "name": "Value 1",
            "description": "Type: Unspecified\n\nDescription: The value changed to \"Unspecified\".",
            "types": ["unspecified"]
        },
        {
            "id": "value2",
            "name": "Value 2",
            "description": "Type: Unspecified\n\nDescription: The value changed to \"Unspecified\".",
            "types": ["unspecified"]
        },
        {
            "id": "value3",
            "name": "Value 3",
            "description": "Type: Unspecified\n\nDescription: The value changed to \"Unspecified\".",
            "types": ["unspecified"]
        }
    ],

    code(cache) {
        const value1 = this.GetInputValue("value1", cache);
        const value2 = this.GetInputValue("value2", cache);
        const value3 = this.GetInputValue("value3", cache);

        const _time = this.GetInputValue("time", cache) || 0

        setTimeout(() => {
            this.StoreOutputValue(value1, "value1", cache);
            this.StoreOutputValue(value2, "value2", cache);
            this.StoreOutputValue(value3, "value3", cache);
            this.RunNextBlock("action", cache);
        }, _time);
    }
}