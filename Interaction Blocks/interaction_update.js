module.exports = {
  
    name: "Interaction Update",

    description: "This Block updates the Original Interaction before this one if exists",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "interactreply",
            "name": "Interaction",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["object"]
        },
        {
            "id": "message",
            "name": "Text",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["text"]
        },
        {
            id: "embeds",
            name: "Embed",
            description: "Description: To add a single Button to the Message. (NOT A ROW) (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
            types: ["object", "unspecified"],
        },
        {
            id: "menu",
            name: "Menu",
            description: "Description: To add a single Button to the Message. (NOT A ROW) (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
            types: ["object", "unspecified"],
        },
        {
            id: "button_row",
            name: "Button Row",
            description: "Description: To add a Button Row to the Message. (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
            types: ["object", "unspecified"],
        },
        {
            id: "button",
            name: "Button",
            description: "Description: To add a single Button to the Message. (NOT A ROW) (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
            types: ["object", "unspecified"],
        },
        {
            id: "attachment",
            name: "Attachment",
            description: "Acceptable Types: Object, Text, Unspecified\n\nDescription: The attachment to put in the message. Supports Image, file path and URL. (OPTIONAL)",
            types: ["object", "text", "unspecified"]
        }
    ],

    options: [
        {
            id: "private",
            name: "Is Ephemeral",
            description: "can only you see it or other people to?",
            type: "SELECT",
            options: {          
                "true": "Yes",      
                "false": "No",
            }
        },
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
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["object"]
        }
    ],

    async code(cache) {
        const { ActionRowBuilder } = require('discord.js');

        const inter = this.GetInputValue("interactreply", cache);
        const msg = this.GetInputValue("message", cache);
        const em = this.GetInputValue("embeds", cache);
        const attachment = this.GetInputValue("attachment", cache);  
        const button1 = this.GetInputValue("button", cache);
		const button_row = this.GetInputValue("button_row", cache);
        const menu1 = this.GetInputValue("menu", cache);
        let components;
        let button;
        let menu;

        if(button1 !== undefined) {
            button =
                new ActionRowBuilder()
                    .addComponents(button1)
        }

        if(menu1 !== undefined) {
            menu = 
                new ActionRowBuilder()
                    .addComponents(menu1)
        }

        if(button1 == undefined && button_row == undefined && menu1 !== undefined) {
            components = [menu]
        }else if(button_row == undefined && menu1 == undefined && button1 !== undefined) {
            components = [button]
        }else if(menu1 == undefined && button1 == undefined && button_row !== undefined) {
            components = [button_row]
        }else if(menu1 !== undefined && button_row !== undefined && button1 == undefined) {
            components = [menu, button_row]
        }else if(menu1 !== undefined && button1 !== undefined && button_row == undefined) {
            components = [menu, button]
        }else if(menu1 == undefined && button1 !== undefined && button_row !== undefined) {
            components = [button_row, button]
        }else if(menu1 !== undefined && button1 !== undefined && button_row !== undefined) {
            components = [menu, button_row, button]
        }
            

        let pri = this.GetOptionValue("private", cache);
        let awnser = "";
        if (pri == "true") {
            awnser = true
        } else if(pri == "false") {
            awnser = false
        }


        if(em !== undefined) {
            const message = await inter.update({ content: msg, files: attachment ? [attachment] : null, embeds: [em], components: components, ephemeral: awnser });
            this.StoreOutputValue(message, "message", cache);
            this.RunNextBlock("action", cache);
        } else {
            const message = await inter.update({
                content: msg,
                components: components,
                ephemeral: awnser,
                files: attachment ? [attachment] : null
            })

            this.StoreOutputValue(message, "message", cache);
            this.RunNextBlock("action", cache);
        }
    }
}