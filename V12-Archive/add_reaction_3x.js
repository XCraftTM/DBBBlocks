module.exports = {
    name: "Add Reaction 3x",

    description: "Adds a reaction to the message.",

    category: "Message Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message to add the reaction.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "emoji",
            "name": "Emoji",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
            "required": true
        },
        {
            "id": "emo2",
            "name": "Emoji 2",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        },
        {
            "id": "emo3",
            "name": "Emoji 3",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const message = this.GetInputValue("message", cache);
        const emoji = this.GetInputValue("emoji", cache);
        const emo2 = this.GetInputValue("emo2", cache);
        const emo3 = this.GetInputValue("emo3", cache);
        message.react(emoji).then(() => {
            emo2 ? message.react(emo2) : null
            emo3 ? message.react(emo3) : null
            this.RunNextBlock("action", cache);
        });
    }
}