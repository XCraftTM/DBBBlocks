module.exports = {
    name: "Sort based on key",

    description: "Sort objects based on key",

    category: "Object Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "list",
            "name": "List of objects",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: List of objects",
            "types": ["list", "object", "unspecified"],
            "required": true
        },
        {
            "id": "key",
            "name": "Key",
            "description": "Key to sort (will stick with other keys/objects)",
            "types": ["text", "object", "unspecified"],
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
        {
            "id": "sortedlist",
            "name": "Sorted List",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["list", "unspecified", "object"]
        }
    ],

    code(cache) {
        const list = this.GetInputValue("list", cache);
        const key = this.GetInputValue("key", cache);
		const members = list.members;
		

		
		const vlist = Object.entries(members).map(entry => ({id: entry[0],[key]: entry[1][key]}))
        const sorted = vlist.sort((a, b) => b[key] - a[key])
		
    this.StoreOutputValue(sorted, "sortedlist", cache);	
    this.RunNextBlock("action", cache);
        
    }
}