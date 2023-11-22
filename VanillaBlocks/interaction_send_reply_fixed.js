module.exports = {
  
    name: "Interaction Reply Block [Fixed, v14]",

    description: "this block simply makes djs work with modals",

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
            "id": "embeds",
            "name": "Embed",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["object"]
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
        const { ActionRowBuilder, ActionRow } = require('discord.js');

        const inter = this.GetInputValue("interactreply", cache);
        const msg = this.GetInputValue("message", cache);
        const em = this.GetInputValue("embeds", cache);
        const button = this.GetInputValue("button", cache);
		const button_row = this.GetInputValue("button_row", cache);
        var component;

        if(button !== undefined) {
            component = [
                new ActionRowBuilder()
                    .addComponents(button),
            ]
        } else {
            component = button_row 
        }

        let pri = this.GetOptionValue("private", cache);
        let awnser = "";
        if (pri == "true") {
            awnser = true
        } else if(pri == "false") {
            awnser = false
        }


        if(em !== undefined) {
            inter.reply({ content: msg, embeds: [em], components: component, ephemeral: awnser });
            this.RunNextBlock("action", cache);
        } else {
            inter.reply({
                content: msg,
                components: component,
                ephemeral: awnser
            })

            this.RunNextBlock("action", cache);
        }
    }
}