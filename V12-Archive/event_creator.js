module.exports = {
    name: "Event Creator",

    description: "Changes the value type to \"Unspecified\". Useful to be able to connect to any connector.",

    category: "Extras",

    inputs: [{
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "id",
            "name": "Event ID",
            "description": "Acceptable Types: Text, unspecified\n\nDescription: The value to change its value type to \"Unspecified\".",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "date",
            "name": "Date",
            "description": "Acceptable Types: date\n\nDescription: The value to change its value type to \"Unspecified\".",
            "types": ["date", "unspecified"],
            "required": true
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to change its value type to \"Unspecified\".",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
        },
    ],

    options: [],

    outputs: [{
        "id": "action",
        "name": "Action",
        "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
        "types": ["action"]
    }, ],

    code(cache) {
        const id = this.GetInputValue("id", cache)
        const date = this.GetInputValue("date", cache)
        const value = this.GetInputValue("value", cache)

        const name = "Time&Space"
        const old_value = this.getData(name)

        const ob = {
            id: id,
            value: value,
            date: date.getTime()
        }

        if (typeof old_value == "object") {
            old_value.unshift(ob)
            this.setData(name, old_value)
        } else {
            this.setData(name, [ob])
        }

        this.RunNextBlock("action", cache)
    }
}