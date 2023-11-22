module.exports = {
    name: "Member Join Server [Event] MOD",

    description: "When a member joins a server, this event will trigger.",

    category: ".MOD",

    auto_execute: true,

    inputs: [],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Type: Object\n\nDescription: The member who joined the server.",
            "types": ["object"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Type: Object\n\nDescription: The server that the member joined.",
            "types": ["object"]
        }
    ],

    code(cache) {
        this.events.on("guildMemberAdd", member => {
            this.StoreOutputValue(member, "member", cache);
            this.StoreOutputValue(member.guild, "server", cache);
            this.RunNextBlock("action", cache);
        });
    }
}