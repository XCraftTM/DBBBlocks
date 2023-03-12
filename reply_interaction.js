module.exports = {
    name: "Reply to Interaction",

    description: "Replies to an Interaction(by @XCraftTM)",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "interaction",
            "name": "Interaction",
            "description": "Type: Object\n\nDescription: The Title of Your Application",
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
            id: "response",
            name: "Response",
            description: "Type: Text\n\nDescription: What response do you want to give?",
            type: "SELECT",
            options: {
                "reply": "Reply with Message",
                "edit": "Edit Reply Message",
                "defer": "Defer Reply",
                "fetch": "Fetch Reply",
                "delete": "Delete Reply",
                "follow": "Follow Up Reply"
            }
        },
        {
            id: "private",
            name: "Is Ephemeral",
            description: "can only you see it or other people to?",
            type: "SELECT",
            options: {
                "true": "Yes",
                "false": "No",
            }
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
            "id": "output",
            "name": "Output",
            "description": "Type: Object, Unspecified\n\nDescription: Fetch Reply, returns Message Object\nReply, Edit and FollowUp, return Message",
            "types": ["objext", "unspecified"]
        }
    ],

    code: async function (cache) {
        const response = this.GetOptionValue("response", cache);
        const interaction = this.GetInputValue("interaction", cache);

        const { ActionRowBuilder } = require('discord.js');

        const msg = this.GetInputValue("message", cache);
        const em = this.GetInputValue("embeds", cache);
        const attachment = this.GetInputValue("attachment", cache);  
        const button1 = this.GetInputValue("button", cache);
        const button_row = this.GetInputValue("button_row", cache);
        const menu1 = this.GetInputValue("menu", cache);
        let components;
        let button;
        let menu;

        if (button1 !== undefined) {
            button =
                new ActionRowBuilder()
                    .addComponents(button1)
        }

        if (menu1 !== undefined) {
            menu =
                new ActionRowBuilder()
                    .addComponents(menu1)
        }

        if (button1 == undefined && button_row == undefined && menu1 !== undefined) {
            components = [menu]
        } else if (button_row == undefined && menu1 == undefined && button1 !== undefined) {
            components = [button]
        } else if (menu1 == undefined && button1 == undefined && button_row !== undefined) {
            components = [button_row]
        } else if (menu1 !== undefined && button_row !== undefined && button1 == undefined) {
            components = [menu, button_row]
        } else if (menu1 !== undefined && button1 !== undefined && button_row == undefined) {
            components = [menu, button]
        } else if (menu1 == undefined && button1 !== undefined && button_row !== undefined) {
            components = [button_row, button]
        } else if (menu1 !== undefined && button1 !== undefined && button_row !== undefined) {
            components = [menu, button_row, button]
        }

        let pri = this.GetOptionValue("private", cache);
        let awnser = "";
        if (pri == "true") {
            awnser = true
        } else if (pri == "false") {
            awnser = false
        }

        switch (response) {
            case "reply":
                if (em !== undefined) {
                    await interaction.reply({ content: msg, embeds: [em], components: components, files: attachment ? [attachment] : null, ephemeral: awnser });
                    const message = await interaction.fetchReply();
                    this.StoreOutputValue(message, "output", cache);
                    this.RunNextBlock("action", cache)
                } else {
                    await interaction.reply({
                        content: msg,
                        components: components,
                        files: attachment ? [attachment] : null,
                        ephemeral: awnser
                    })
                    const message = await interaction.fetchReply();
                    this.StoreOutputValue(message, "output", cache);
                    this.RunNextBlock("action", cache)
                }
                break;
            case "edit":
                if (em !== undefined) {
                    await interaction.editReply({ content: msg, embeds: [em], components: components, files: attachment ? [attachment] : null, ephemeral: awnser });
                    const message = await interaction.fetchReply();
                    this.StoreOutputValue(message, "output", cache);
                    this.RunNextBlock("action", cache)
                } else {
                    await interaction.editReply({
                        content: msg,
                        components: components,
                        files: attachment ? [attachment] : null,
                        ephemeral: awnser
                    })
                    const message = await interaction.fetchReply();
                    this.StoreOutputValue(message, "output", cache);
                    this.RunNextBlock("action", cache)
                }
                break;
            case "defer":
                await interaction.deferReply({ ephemeral: awnser });
                this.RunNextBlock("action", cache)
                break;
            case "fetch":
                const message = await interaction.fetchReply();
                this.StoreOutputValue(message, "output", cache);
                this.RunNextBlock("action", cache)
                break;
            case "delete":
                await interaction.deleteReply();
                this.RunNextBlock("action", cache)
                break;
            case "follow":
                if (em !== undefined) {
                    await interaction.followUp({ content: msg, embeds: [em], components: components, files: attachment ? [attachment] : null, ephemeral: awnser });
                    const message = await interaction.fetchReply();
                    this.StoreOutputValue(message, "output", cache);
                    this.RunNextBlock("action", cache)
                } else {
                    await interaction.followUp({
                        content: msg,
                        components: components,
                        files: attachment ? [attachment] : null,
                        ephemeral: awnser
                    })
                    const message = await interaction.fetchReply();
                    this.StoreOutputValue(message, "output", cache);
                    this.RunNextBlock("action", cache)
                }
                break;
        }
    }
}