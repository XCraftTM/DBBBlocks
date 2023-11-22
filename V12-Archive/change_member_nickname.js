 module.exports = {
    name: "Change Member Nickname",

    description: "Changes Member Nickname",

    category: "Member Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "types": ["action"]           
        },
        {
            "id": "member",
            "name": "Member",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "nickname",
            "name": "Nickname",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [

    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const member = this.GetInputValue("member", cache);
        const nickname = this.GetInputValue("nickname", cache);

        member.setNickname(nickname);

        this.RunNextBlock('action', cache);
    }
};