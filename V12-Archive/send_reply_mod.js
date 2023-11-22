module.exports = {
    name: "Send Reply Message [With Merge Text]",

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
            "id": "text1",
            "name": "Text 1",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 1 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
        {
            "id": "text2",
            "name": "Text 2",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 2 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
        {
            "id": "text3",
            "name": "Text 3",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 3 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
        {
            "id": "text4",
            "name": "Text 4",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 3 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
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
        }
        //{
        //    "id": "split_message",
        //    "name": "Split Message",
        //    "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: Whether to split the message text into multiple messages if it exceeds the characters limit (2000). (OPTIONAL)",
        //    "types": ["boolean", "unspecified"]
        //},
        //{
        //    "id": "nomention",
        //    "name": "No Mention",
        //    "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: If you want no Mention in the message. (OPTIONAL)",
        //    "types": ["boolean", "unspecified"]
        //}
    ],

    options: [
        {
            "id": "smsg",
            "name": "Split Message",
            "description": "Description: The type of boolean to set.",
            "type": "SELECT",
            "options": {
                //"true": "True",
                "false": "False",
                "true": "True"
            }
        },
        {
            "id": "nomention",
            "name": "No Mention",
            "description": "Description: If you want no Mention in the message. (OPTIONAL)",
            "type": "SELECT",
            "options": {
                "true": "True",
                "false": "False"                
            }
        },
        {
            "id": "text",
            "name": "Source Text",
            "description": "Description: The source text to add the Text. No need to add Text Blocks.",
            "type": "TEXT"
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
        const text = this.GetOptionValue("text", cache) + "";
        const text1 = this.GetInputValue("text1", cache) + "";
        const text2 = this.GetInputValue("text2", cache) + "";
        const text3 = this.GetInputValue("text3", cache) + "";
        const text4 = this.GetInputValue("text4", cache) + ""; 
        let chars = {'${text1}':text1,'${text2}':text2,'${text3}':text3,'${text4}':text4};
        let s = text;
        s = s.replace (/(\${text1})|(\${text2})|(\${text3})|(\${text4})/g, m => chars[m]);
        
        const nomention = Boolean(this.GetOptionValue("nomention", cache));
		if (nomention ? false : true); 
        const embed = this.GetInputValue("embed", cache);
        const attachment = this.GetInputValue("attachment", cache);
        const smsg = Boolean(this.GetOptionValue("split_message", cache));
        
		switch(nomention) {
		case false:
			await message.lineReply(s, {
				    embed,
				    files: attachment ? [attachment] : null,
                    split: smsg ? {char: ""} : false
			}, this.channel).then(msg => {
                this.StoreOutputValue(smsg ? (Array.isArray(msg) ? msg : [msg]) : msg, "message", cache);
			});
			break;
		case true:
			await message.lineReplyNoMention(s, {
				embed,
				files: attachment ? [attachment] : null,
                split: smsg ? {char: ""} : false
			}, this.channel).then(msg => {
				this.StoreOutputValue(smsg ? (Array.isArray(msg) ? msg : [msg]) : msg, "message", cache);
			});
			break;
		}
        this.RunNextBlock("action", cache);
    }
}