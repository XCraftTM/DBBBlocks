module.exports = {
    name: "Better Sort List",

    description: "Sorts list Based on the WHOLE Value by Daily's",

    category: ".Daily's",

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
            "description": "List to be sorted.",
            "types": ["list"],
            "required": true
        }
    ],

    options: [
        {
            "id": "type",
            "name": "Sort by",
            "description": "Choose how to sort the list",
            "type": "SELECT",
            "options": {
                "sort1": "Sort Numbers (1-9)",
                "sort2": "sort Numbers reversed (9-1)"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Runs Next Block",
            "types": ["action"]
        },
        {
            "id": "sorted",
            "name": "Sorted List",
            "description": "The List except sorted.",
            "types": ["list"]
        }
    ],

    code(cache) {
        var sortnumbers = require("sort-numbers");
        var list = this.GetInputValue("list", cache);
        let type = this.GetOptionValue("type", cache);

        switch(type) {
            case "sort1":
                sortnumbers(list)
                break;
            case "sort2":
                sortnumbers.desc(list)
                break;
        }


        this.StoreOutputValue(list, "sorted", cache);
        this.RunNextBlock("action", cache);

    }
}