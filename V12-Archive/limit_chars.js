module.exports = {
    name: "Limit Characters",

    description: "Limits the length of text.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "text",
            "name": "Text",
            "description": "Type: Text\n\nDescription: The text to limit characters on.",
            "types": ["text"]
        },
        {
            "id": "length",
            "name": "Length",
            "description": "Type: Number\n\nDescription: Max character count(ex. suffix count).",
            "types": ["number"]
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
            "id": "text",
            "name": "Text",
            "description": "Type: Text\n\nDescription: Shortened string.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const text = this.GetInputValue("text", cache);
        const length = this.GetInputValue("length", cache);

        const out = text.substring(0,length);

        this.StoreOutputValue(out, "text", cache);
        this.RunNextBlock("action", cache);
    }
}