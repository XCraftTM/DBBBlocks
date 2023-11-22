module.exports = {
    name: "Better Send Message v2",

    description: "Sends a message with built in text block.",

    category: ".Mods",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "channel",
            "name": "Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The text channel or DM channel to send this message.",
            "types": ["object", "unspecified"],
            "required": true
        },
    
        {
            "id": "embed",
            "name": "Embed",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed to put in the message. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "id": "buttons",
            "name": "Buttons",
            "description": "Acceptable Types: List, Object, Unspecified\n\nDescription:To add Buttons to the Message(OPTIONAL)\nCan be a single Button, a single Button ROW (use Block to convert) or Multiple Button Rows (a List of ButtonRows)",
            "types": ["object", "list", "unspecified"]
        },
        {
            "id": "attachment",
            "name": "Attachment",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: The attachment to put in the message. Supports Image, file path and URL. (OPTIONAL)",
            "types": ["object", "text", "unspecified"]
        },
        //{
        //    "id": "split_message",
        //    "name": "Split Message",
        //    "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: Whether to split the message text into multiple messages if it exceeds the characters limit (2000). (OPTIONAL)",
        //    "types": ["boolean", "unspecified"]
        //},
        //{
        //	"id": "TTS",
        //    "name": "TTS?",
        //    "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: Whether to send as TTS message. (Default false)",
        //    "types": ["boolean", "unspecified"]
        //},
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
        }
    ],

    options: [
        {
            "id": "TTS",
            "name": "TTS?",
            "description": "Description: The type of boolean to set.",
            "type": "SELECT",
            "options": {
                //"true": "True",
                "false": "False",
                "true": "True"
            }
        },
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
        //{
        //    "id": "action2",
        //    "name": "Action [Error]",
        //    "description": "Type: Action\n\nDescription: If something goes wrong, this fires",
        //    "types": ["action"]
        //},
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Object, List\n\nDescription: The message obtained. If \"Split Message\" is enabled, this will return a list containing all message objects instead of a single one.",
            "types": ["object", "list"]
        }
    ],

    code(cache) {
        const channel = this.GetInputValue("channel", cache);
        const text = this.GetOptionValue("text", cache) + "";
        const text1 = this.GetInputValue("text1", cache) + "";
        const text2 = this.GetInputValue("text2", cache) + "";
        const text3 = this.GetInputValue("text3", cache) + "";
        const text4 = this.GetInputValue("text4", cache) + ""; 
        let chars = {'${text1}':text1,'${text2}':text2,'${text3}':text3,'${text4}':text4};
        let s = text;
        s = s.replace (/(\${text1})|(\${text2})|(\${text3})|(\${text4})/g, m => chars[m]);

        const embed = this.GetInputValue("embed", cache);
        const buttons = this.GetInputValue("buttons", cache);
        const attachment = this.GetInputValue("attachment", cache);
        const smsg = Boolean(this.GetOptionValue("split_message", cache));
        let TTS = this.GetOptionValue("TTS", cache);
        if(TTS == "true") { TTS = true; }
    	else { TTS = false; }

        channel.send(s, {
            embed,
            ...(Array.isArray(buttons) ? {components: buttons} : {component: buttons}),
            files: attachment ? [attachment] : null,
            split: smsg ? {char: ""} : false,
            tts: TTS
        }).then(msg => {
            this.StoreOutputValue(smsg ? (Array.isArray(msg) ? msg : [msg]) : msg, "message", cache);
            this.RunNextBlock("action", cache);
        });
    }
}