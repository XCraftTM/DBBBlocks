module.exports = {
    name: "Event Receptor",

    description: "Changes the value type to \"Unspecified\". Useful to be able to connect to any connector.",

    category: "Extras",

    inputs: [{
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
        "types": ["action"]
    }],

    options: [],

    outputs: [{
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "id",
            "name": "Event ID",
            "description": "Type: text\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["text"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Type: Unspecified, undefined, null, object, boolean, date, number, text, list\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
    ],

    code(cache) {
        const name = "Time&Space"
        const list = this.getData(name)

        for (const [index, element] of Object.entries(list)) {

            if (element.date < new Date().getTime()) {

                list.splice(parseInt(index));
                this.setData(name, list)

                this.StoreOutputValue(element.id, "id", cache)
                this.StoreOutputValue(element.value, "value", cache)
                this.RunNextBlock("action", cache)
            }
        }


    }
}