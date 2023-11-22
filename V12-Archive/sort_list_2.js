module.exports = {
    name: "Sort List v2",

    description: "Sorts a list.",

    category: "List Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Makes the block work.",
            "types": ["action"]
        },
        {
            "id": "list",
            "name": "List",
            "description": "Description: The list that will be sorted.",
            "types": ["list"],
            "required": true
        }
    ],

    options: [
        {
            "id": "sort",
            "name": "Sort Type",
            "description": "Description: The text to set.",
            "type": "SELECT",
            "options": {
                "txt": "Sort Text (a-z)",
                "txt-r": "Sort Text (reverse) (z-a)",
                "nan": "Sort Numbers (1-9)",
                "nan-r": "Sort Numbers (reverse) (9-1)"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Run the next block.",
            "types": ["action"]
        },
        {
            "id": "list",
            "name": "List",
            "description": "Type: List\n\nDescription: The text.",
            "types": ["list"]
        }
    ],

    code(cache) {
        var list = this.GetInputValue("list", cache);
        let type = this.GetOptionValue("sort", cache);

        switch(type){
            case "txt":
                list = list.sort()
                break;
            case "txt-r":
                list = list.sort()
                list = list.reverse()
                break;
            case "nan":
                list = list.sort(function(a, b){return a-b});
                break;
            case "nan-r":
                list = list.sort(function(a, b){return b-a});
                break;
        }



        this.StoreOutputValue(list, "list", cache);
        this.RunNextBlock("action", cache)
    }
}