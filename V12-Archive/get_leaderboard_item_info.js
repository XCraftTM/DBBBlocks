module.exports = {
    name: "Get leaderboard item info",

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
            "id": "item",
            "name": "Item",
            "description": "The member that will be found",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "info",
            "name": "Item info",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "type": "SELECT",
            "options": {
                "1": "Currency [Number]",
                "2": "Member ID [Text]",
                "3": "Server ID [Text]",
                "4": "Position [Number]"
            }
        },
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Result",
            "description": "Leaderboard (List)",
            "types": ["unspecified", "object"]
        },
    ],

   async code(cache) {
        const item = this.GetInputValue("item", cache)
        const info = this.GetOptionValue("info", cache)

        let r 
        switch(info){
            case "1":
               r = item.currency
               break;
            case "2":
                r = item.member_id
                break;
            case "3":
                r = item.server_id
                break;
            case "4":
                r = item.position
                break;
        }

        this.StoreOutputValue(r, "result", cache)
        this.RunNextBlock("action", cache)


    }
}