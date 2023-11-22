module.exports = {
    name: "Generate Leaderboard",

    description: "Generates a leaderboard based on the input key (data name of currency)",

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
            "description": "Leaderboard (List)",
            "types": ["list", "unspecified", "object"]
        }
    ],

    code(cache) {
        const list = this.getDBB().Data.data.discord;
        const key = this.GetInputValue("key", cache);
		const members = list.members;



		const vlist = Object.entries(members).map(entry => ({id: entry[0],[key]: entry[1][key]}))
        const sorted = vlist.filter(entry => typeof entry[key] == "number").sort((a, b) => b[key] - a[key])
		
        this.StoreOutputValue(sorted, "sortedlist", cache);	
        this.RunNextBlock("action", cache);
    }
}