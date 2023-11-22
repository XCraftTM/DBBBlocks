module.exports = {
    name: "Generate Server Leaderboard",

    description: "Generates a leaderboard based on the input key (data name of currency)",

    category: "Easy Economy 2.0",

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
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Server where the leaderboard will be generated",
            "types": ["object", "unspecified"],
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
            "name": "Leaderboard",
            "description": "Leaderboard (List)",
            "types": ["list", "unspecified", "object"]
        }
    ],

   async code(cache) {
        const list = this.getDBB().Data.data.discord;
        const key = this.GetInputValue("key", cache);
        const server = this.GetInputValue("server", cache).id 
		const members = list.members;

		const vlist = Object.entries(members).map(entry => ({member_id: entry[0].slice(0,18), server_id: entry[0].slice(18,36) ,currency: entry[1][key]}))
        const filter_1 = vlist.filter(entry => typeof entry.currency == "number")
		const filter_2 = filter_1.filter(item => item.server_id == server).sort((a, b) => b.currency - a.currency)
        for (const [index, object] of Object.entries(filter_2)){
            object.position = parseInt(index) + 1
        }


        this.StoreOutputValue(filter_2, "sortedlist", cache);	
        this.RunNextBlock("action", cache);
    }
}