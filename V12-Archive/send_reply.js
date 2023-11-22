module.exports = {
    name: "Send Reply Message",

    description: "Sends a reply message.",

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
            "description": "Type: Object, List\n\nDescription: The message to reply",
            "types": ["object", "list", "unspecified"],
            "required": true
        },
        {
            "id": "text",
            "name": "Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The text to put in the message. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "embed",
            "name": "Embed",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed to put in the message. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "id": "attachment",
            "name": "Attachment",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: The attachment to put in the message. Supports Image, file path and URL. (OPTIONAL)",
            "types": ["object", "text", "unspecified"]
        },
        {
            "id": "split_message",
            "name": "Split Message",
            "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: Whether to split the message text into multiple messages if it exceeds the characters limit (2000). (OPTIONAL)",
            "types": ["boolean", "unspecified"]
        },
        {
            "id": "nomention",
            "name": "No Mention",
            "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: If you want no Mention in the message. (OPTIONAL)",
            "types": ["boolean", "unspecified"]
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
            "id": "message",
            "name": "Message",
            "description": "Type: Object, List\n\nDescription: The message obtained. If \"Split Message\" is enabled, this will return a list containing all message objects instead of a single one.",
            "types": ["object", "list"]
        }
    ],

    async init(DBB){
        const discordTogether = await DBB.Core.require("discord-reply");
        require("discord-reply");
    },

    async code(cache) {

        const message = this.GetInputValue("message", cache);
        const channel = this.GetInputValue("channel", cache);
        const nomention = Boolean(this.GetInputValue("nomention", cache));
		if (nomention ? false : true); 
        const text = this.GetInputValue("text", cache);
        const embed = this.GetInputValue("embed", cache);
        const attachment = this.GetInputValue("attachment", cache);
        const split_message = Boolean(this.GetInputValue("split_message", cache));
        
		switch(nomention) {
		case false:
			await message.lineReply(text, {
				    embed,
				    files: attachment ? [attachment] : null,
                    split: split_message ? {char: ""} : false
			}, this.channel).then(msg => {
                this.StoreOutputValue(split_message ? (Array.isArray(msg) ? msg : [msg]) : msg, "message", cache);
			});
			break;
		case true:
			await message.lineReplyNoMention(text, {
				embed,
				files: attachment ? [attachment] : null,
                split: split_message ? {char: ""} : false
			}, this.channel).then(msg => {
				this.StoreOutputValue(split_message ? (Array.isArray(msg) ? msg : [msg]) : msg, "message", cache);
			});
			break;
		}
        this.RunNextBlock("action", cache);
    }
}