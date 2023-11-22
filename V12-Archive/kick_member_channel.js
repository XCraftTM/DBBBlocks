 module.exports = {
    name: "Kick Member from Voice Channel",

    description: "Disconnects a Member from a Voice Channel",

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

        member.voice.kick();

        this.RunNextBlock('action', cache);
    }
};