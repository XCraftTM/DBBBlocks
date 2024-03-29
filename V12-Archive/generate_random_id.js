module.exports = {
    name: "Generate Random ID",

    description: "Generates a random ID (UUID).",

    category: "Extras",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
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
            "id": "ID",
            "name": "UUID",
            "description": "Type: Text\n\nDescription: The random UUID generated.",
            "types": ["text"]
        }
    ],

    async code(cache) {
        const uuid = await this.require("uuid");
        this.StoreOutputValue(uuid.v4(), "ID", cache);
        this.RunNextBlock("action", cache);
    }
}