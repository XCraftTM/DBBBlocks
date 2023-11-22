module.exports = {
    name: "True If Member Is In Server",

    description: "Checks if member is in server and transforms ID to member",

    category: "Boolean Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "server",
            "name": "Server",
            "description": "The server to generate a leaderboard off of",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "memberid",
            "name": "Member ID",
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
            "id": "bool",
            "name": "Boolean",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["boolean", "unspecified"]
        }
    ],

    code(cache) {
        const server = this.GetInputValue("server", cache);
        const memberid = this.GetInputValue("memberid", cache);

        let result;
        if (server.member(memberid)){
                result = true
        } else {
               result = false  
        }

        this.StoreOutputValue(result, "bool", cache)
        this.RunNextBlock("action", cache)

    }
}