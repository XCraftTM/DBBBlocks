module.exports = {
    name: "Send Message (Components)",

    description: "Sends a message with components.",

    category: "Component Stuff",

    inputs: [
        {
            id: "action",
            name: "Action",
            description: "Acceptable Types: Action\n\nDescription: Executes this block.",
            types: ["action"]
        },
        {
            id: "channel",
            name: "Channel",
            description: "Acceptable Types: Object, Unspecified\n\nDescription: The text channel or DM channel to send this message.",
            types: ["object", "unspecified"],
            required: true
        },
        {
            id: "text",
            name: "Text",
            description: "Acceptable Types: Text, Unspecified\n\nDescription: The text to put in the message. (OPTIONAL)",
            types: ["text", "unspecified"]
        },
        {
            id: "embed",
            name: "Embed",
            description: "Description: To add a single Button to the Message. (NOT A ROW) (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
            types: ["object", "unspecified"],
        },
        {
            id: "button",
            name: "Button",
            description: "Description: To add a single Button to the Message. (NOT A ROW) (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
            types: ["object", "unspecified"],
        },
        {
            id: "button_row",
            name: "Button Row",
            description: "Description: To add a Button Row to the Message. (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
            types: ["object", "unspecified"],
        },
        // {
        //     id: "menu",
        //     name: "Menu",
        //     description: "Description: To add a single Button to the Message. (NOT A ROW) (MUST EITHER BE BUTTON OR ROW -- NOT BOTH --)",
        //     types: ["object", "unspecified"],
        // }
    ],

    options: [],

    outputs: [
        {
            id: "action",
            name: "Action",
            description: "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            types: ["action"]
        },
        {
            id: "message",
            name: "Message",
            description: "Description: The message that was sent.",
            types: ["object", "unspecified"]
        }
    ],

    code(cache) {
        
        const { ActionRowBuilder } = require('discord.js');

        const channel = this.GetInputValue("channel", cache);
        const msg = this.GetInputValue("text", cache);
        const embed = this.GetInputValue("embed", cache);
        const button = this.GetInputValue("button", cache);
		const button_row = this.GetInputValue("button_row", cache);
        var components;

        if(button !== undefined) {
            components = [
                new ActionRowBuilder()
                    .addComponents(button),
            ]
        } else {
            components = button_row
        }


        if(embed !== undefined) {
            channel.send({ content: msg, embeds: [embed], components: components }).then(message => {
                this.StoreOutputValue(message, "message", cache);
                this.RunNextBlock("action", cache);
            });
            
        } else {
            channel.send({
                content: msg,
                components: components
            }).then(message => {
                this.StoreOutputValue(message, "message", cache);
                this.RunNextBlock("action", cache);
            });
        }
    }
}