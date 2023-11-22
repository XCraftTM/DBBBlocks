module.exports = {
    name: "Is member in server?",

    description: "Checks if member is in server and transforms ID to member",

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
            "id": "server",
            "name": "Server",
            "description": "The server to generate a leaderboard off of",
            "types": ["object"],
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
            "id": "actiontrue",
            "name": "Action (True)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "actionfalse",
            "name": "Action (False)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const server = this.GetInputValue("server", cache);
        const memberid = this.GetInputValue("memberid", cache);

        let result;
        if (server.member(memberid)){
                this.RunNextBlock("actiontrue", cache);
        } else {
                this.RunNextBlock("actionfalse", cache);       
        }


    }
}