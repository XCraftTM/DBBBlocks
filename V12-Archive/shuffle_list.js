module.exports = {
    name: "Shuffle List",

    description: "Shuffle list.",

    category: ".Panso",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "list",
            "name": "List",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to loop.",
            "types": ["list", "unspecified"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks for each item in the list.",
            "types": ["action"]
        },
        {
            "id": "list",
            "name": "Suffled List",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["list", "unspecified"]
        }
    ],

    code(cache) {
        let list = this.GetInputValue("list", cache);
        list = list.sort(() => Math.random() - 0.5)



        this.StoreOutputValue(list, "list", cache)
        this.RunNextBlock("action", cache);

    }
}