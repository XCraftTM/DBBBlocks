module.exports = {
    name: "Is Currency Negative? (Data)",

    description: "Checks if the currency is negative",

    category: "Easy Economy",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "name",
            "name": "Data name of Currency",
            "description": "Description: The name of the currency (data)",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "target",
            "name": "Member",
            "description": "Description: The member to check the negative currency of",
            "types": ["object", "text", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action (If True)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if true.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If False)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if false.",
            "types": ["action"]
        }
    ],

    code(cache) {
    const name = this.GetInputValue("name", cache) + "";
    const target = this.GetInputValue("target", cache);
    const data = this.getData(name, typeof target == "object" ? target.id : target, "member");

    if (data >= 0) {
        this.RunNextBlock("action2", cache);
     } else {
        this.RunNextBlock("action1", cache);
     }
    }
}