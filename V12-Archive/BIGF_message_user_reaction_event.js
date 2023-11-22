module.exports = {
    name: "BIGF Message User Reaction[Event]",

    description: "When an user reaction is added or removed, this event will trigger.",

    category: "BigfootGG",

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
            "id": "server",
            "name": "Server",
            "description": "Type: Object\n\nDescription: The server.",
            "types": ["object"]
        },
        {
            "id": "channel",
            "name": "Channel",
            "description": "Type: Object\n\nDescription: The message channel.",
            "types": ["object"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Object\n\nDescription: The reaction message.",
            "types": ["object"]
        },
        {
            "id": "message_reaction",
            "name": "Message Reaction",
            "description": "Type: Object\n\nDescription: The message reaction.",
            "types": ["object"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Type: Object\n\nDescription: The member.",
            "types": ["object"]
        },
        {
            "id": "user",
            "name": "User",
            "description": "Type: Object\n\nDescription: The user.",
            "types": ["object"]
        },
        {
            "id": "bool",
            "name": "Boolean",
            "description": "Type: Action\n\nDescription: true if reaction added, false if reaction removed.",
            "types": ["boolean", "unspecified"]
        }
    ],

    code(cache) {
        this.events.on("messageReactionAdd", (message_reaction, user) => {
            this.StoreOutputValue(message_reaction, "message_reaction", cache);
            this.StoreOutputValue(message_reaction.message, "message", cache);
            this.StoreOutputValue(message_reaction.message.channel, "channel", cache);
			this.StoreOutputValue(user, "user", cache);
            this.StoreOutputValue(message_reaction.message.guild, "server", cache);
            this.StoreOutputValue(message_reaction.message.guild.member(user), "member", cache);
            this.StoreOutputValue(new Boolean(true), "bool", cache)
            this.RunNextBlock("action", cache);
        });    
this.events.on("messageReactionRemove", (message_reaction, user) => {
    this.StoreOutputValue(message_reaction, "message_reaction", cache);
            this.StoreOutputValue(message_reaction.message, "message", cache);
            this.StoreOutputValue(message_reaction.message.channel, "channel", cache);
			this.StoreOutputValue(user, "user", cache);
            this.StoreOutputValue(message_reaction.message.guild, "server", cache);
            this.StoreOutputValue(message_reaction.message.guild.member(user), "member", cache);
            this.StoreOutputValue(new Boolean(false), "bool", cache)
            this.RunNextBlock("action", cache);
});
}
}
