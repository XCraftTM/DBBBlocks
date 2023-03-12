module.exports = {
    name: "Message Send (Timeout) [Event]",

    description: "When a message is sent/created, this event will trigger",

    category: "Events",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "timeout",
            "name": "Timeout",
            "description": "Type: Number\n\nDescription: Sends each Message after x Seconds\nDefault: 0 Seconds",
            "type": "NUMBER"
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Object\n\nDescription: The message sent by the user.",
            "types": ["object"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Type: Object\n\nDescription: The server the message was sent.",
            "types": ["object"]
        },
        {
            "id": "channel",
            "name": "Channel",
            "description": "Type: Object\n\nDescription: The channel the message was sent.",
            "types": ["object"]
        },
        {
            "id": "user",
            "name": "User",
            "description": "Type: Object\n\nDescription: The message author.",
            "types": ["object"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Type: Object\n\nDescription: The message author.",
            "types": ["object"]
        }
    ],

    async code(cache) {
        const timeout = parseInt(this.GetOptionValue("timeout", cache)) * 1000 || 1000;
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        array = [];
        this.client.on("messageCreate", async msg => {
            array.push(msg);
            if (array.length == 0) {
                while (array.length > 0) {
                    element = array[0];
                    if (element) {
                        this.StoreOutputValue(element, "message", cache);
                        this.StoreOutputValue(element.guild, "server", cache);
                        this.StoreOutputValue(element.channel, "channel", cache);
                        this.StoreOutputValue(element.author, "user", cache);
                        this.StoreOutputValue(element.member, "member", cache);
                        this.RunNextBlock("action", cache);
                        array.shift();
                    }
                    await sleep(timeout)
                }
            }
        })
    }
}