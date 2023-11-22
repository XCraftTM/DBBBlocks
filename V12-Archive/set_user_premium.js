module.exports = {
    name: "Set user premium",

    description: "Add a premium user.",

    category: ".Premium stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "name",
            "name": "Premium data (name)",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name of the premium data.",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "target",
            "name": "User",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: The user with whom the premium should be added.",
            "types": ["object", "text", "unspecified"],
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
    ],

    code(cache) {
        const target = this.GetInputValue("target", cache);
        const name = this.GetInputValue("name", cache) + "";

        this.setData(name, true, typeof target == "object" ? target.id : target, "user");

        this.RunNextBlock("action", cache);
    }
}