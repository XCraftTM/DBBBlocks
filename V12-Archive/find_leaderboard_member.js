module.exports = {
    name: "Find Member in Leaderboard",

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
            "id": "leaderboard",
            "name": "Leaderboard",
            "description": "The server leaderboard where you will find the member",
            "types": ["list", "object", "unspecified"],
            "required": true
        },
        {
            "id": "member",
            "name": "Member",
            "description": "The member that will be found",
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
            "id": "position",
            "name": "Position",
            "description": "Leaderboard (List)",
            "types": ["number", "unspecified", "object"]
        }
    ],

   async code(cache) {
        const leaderboard = this.GetInputValue("leaderboard", cache)
        const member = this.GetInputValue("member", cache).id

        for (const [index, object] of Object.entries(leaderboard)){
            if(object.member_id == member){
                this.StoreOutputValue(parseInt(index) + 1, "position", cache);
                this.RunNextBlock("action", cache);
            }
        }


    }
}