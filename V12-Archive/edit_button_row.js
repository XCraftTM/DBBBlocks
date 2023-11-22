module.exports = {
    name: "Edit Button Row",

    description: "Create buttons row and send this. (By: TonimatasMC)",

    category: "Component Stuff",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message.",
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
            "id": "text",
            "name": "Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The text to put in the message. (OPTIONAL)",
            "types": ["text", "unspecified"]
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
            "id": "item1",
            "name": "Component 1",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The item to add to the list.",
            "types": ["object"],
            "required": true
        },
        {
            "id": "item2",
            "name": "Component 2 (OPTIONAL)",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The item to add to the list.",
            "types": ["object"],
        },
        {
            "id": "item3",
            "name": "Component 3 (OPTIONAL)",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The item to add to the list.",
            "types": ["object"],
        },
        {
            "id": "item4",
            "name": "Component 4 (OPTIONAL)",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The item to add to the list.",
            "types": ["object"],
        },
        {
            "id": "item5",
            "name": "Component 5 (OPTIONAL)",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The item to add to the list.",
            "types": ["object"],
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks if true.",
            "types": ["action"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Object, List\n\nDescription: The message obtained. If \"Split Message\" is enabled, this will return a list containing all message objects instead of a single one.",
            "types": ["object", "list"]
        }
    ],

    async code(cache) {
        const message = this.GetInputValue("message", cache);
        const text = this.GetInputValue("text", cache);
        const embed = this.GetInputValue("embed", cache);
        const attachment = this.GetInputValue("attachment", cache);
        const split_message = Boolean(this.GetInputValue("split_message", cache));
        const item1 = this.GetInputValue("item1", cache);
        const item2 = this.GetInputValue("item2", cache);
        const item3 = this.GetInputValue("item3", cache);
        const item4 = this.GetInputValue("item4", cache);
        const item5 = this.GetInputValue("item5", cache);

        if (typeof message_text === "undefined") {
            await message.edit(undefined, {embed,components: [item1, item2, item3, item4, item5],files: attachment ? [attachment] : null,split: split_message ? {char: ""} : false}).catch(error => {
                this.StoreOutputValue(error.message, "error", cache);
                this.RunNextBlock("action", cache);
            });
            this.RunNextBlock("action", cache);
        } else {    
            await message.edit(text, {embed,components: [item1, item2, item3, item4, item5],files: attachment ? [attachment] : null,split: split_message ? {char: ""} : false}).catch(error => {
                this.StoreOutputValue(error.message, "error", cache);
                this.RunNextBlock("action", cache);
            });
            this.RunNextBlock("action", cache);
        }
    }
}