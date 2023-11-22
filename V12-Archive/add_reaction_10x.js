module.exports = {
    name: "Add Reaction 10x",

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
        },
        {
            "id": "emo4",
            "name": "Emoji 4",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        },
        {
            "id": "emo5",
            "name": "Emoji 5",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        },
        {
            "id": "emo6",
            "name": "Emoji 6",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        },
        {
            "id": "emo7",
            "name": "Emoji 7",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        },
        {
            "id": "emo8",
            "name": "Emoji 8",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        },
        {
            "id": "emo9",
            "name": "Emoji 9",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (😀, 😂, etc...) or server emoji to add to the message.",
            "types": ["text", "object", "unspecified"],
        },
        {
            "id": "emo10",
            "name": "Emoji 10",
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

    async code(cache) {
        const message = this.GetInputValue("message", cache);
        const emojis = [];
        emojis.push(this.GetInputValue("emoji", cache));

        if(this.GetInputValue("emo2", cache)) { emojis.push(this.GetInputValue("emo2", cache)); }
        if(this.GetInputValue("emo3", cache)) { emojis.push(this.GetInputValue("emo3", cache)); }
        if(this.GetInputValue("emo4", cache)) { emojis.push(this.GetInputValue("emo4", cache)); }
        if(this.GetInputValue("emo5", cache)) { emojis.push(this.GetInputValue("emo5", cache)); }
        if(this.GetInputValue("emo6", cache)) { emojis.push(this.GetInputValue("emo6", cache)); }
        if(this.GetInputValue("emo7", cache)) { emojis.push(this.GetInputValue("emo7", cache)); }
        if(this.GetInputValue("emo8", cache)) { emojis.push(this.GetInputValue("emo8", cache)); }
        if(this.GetInputValue("emo9", cache)) { emojis.push(this.GetInputValue("emo9", cache)); }
        if(this.GetInputValue("emo10", cache)) { emojis.push(this.GetInputValue("emo10", cache)); }

        const sleep = ms => {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        emojis.forEach(e =>  {
        	message.react(e);
        });

        await sleep(1000 * emojis.length);
       	this.RunNextBlock("action", cache);
    }
}