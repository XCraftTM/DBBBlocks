module.exports = {
    name: "Sort List",

    description: "Sorts a list from A to Z",

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
            "name": "Sorted List",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["list", "unspecified"]
        }
    ],

    code(cache) {
        var list = this.GetInputValue("list", cache);
        var ordenado = list.sort()

      this.StoreOutputValue(ordenado, "list", cache);
      this.RunNextBlock("action", cache);
    }
}