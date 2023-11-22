module.exports = {
    name: "Is user premium",

    description: "Does the user have the premium?",

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
            "id": "action1",
            "name": "Action (If True)",
            "description": "Type: Action\n\nDescription: Run the following block if the member is premium.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If False)",
            "description": "Type: Action\n\nDescription: Run the following block if the member is not premium.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const target = this.GetInputValue("target", cache);
        const name = this.GetInputValue("name", cache) + "";

        let value;
        value = this.getData(name, typeof target == "object" ? target.id : target, "user");

        if(value == true){this.RunNextBlock("action1", cache)}
        else{this.RunNextBlock("action2", cache)}

    }
}