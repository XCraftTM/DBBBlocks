module.exports = {
  
    name: "interaction [Event]",

    description: "This block will trigger when an interaction occurs.",

    category: ".MOD",

    auto_execute: true,

    inputs: [],

    options: [
        {
            id: "eventtype",
            name: "Event Type",
            description: "Description: The type of the interaction event to filter for",
            type: "SELECT",
            options: {          
                "other": "Modals",      
                "slash": "slash command",
                "buttons": "buttons"
            }
        },
        {
            id: "id",
            name: "Command Name / Button or Modal Id",
            description: "Description: The Id of the Button or Modal, or the Command Name to filter for.",
            type: "TEXT"
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
            "id": "channel",
            "name": "Channel",
            "description": "The channel that the interaction occured in",
            "types": ["object"]
        },
        {
            "id": "name",
            "name": "Name / Id",
            "description": "The name of the command or the id of the button / modal",
            "types": ["text"]
        },
        {
            "id": "user",
            "name": "User",
            "description": "The user who started the interaction event",
            "types": ["object"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "The member who started the interaction event",
            "types": ["object"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "The server that the interaction occured in",
            "types": ["object"]
        },
        {
            "id": "args",
            "name": "Arguments",
            "description": "The command arguments or the modal questions",
            "types": ["text", "unspecified", "object"]
        },
        {
            "id": "interaction",
            "name": "Interaction",
            "description": "The interaction that started the event",
            "types": ["object"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "The message that the component was sent with",
            "types": ["object"]
        }

    ],

    async code(cache) {
        const options = this.GetOptionValue("eventtype", cache);
        const id = this.GetOptionValue("id", cache);

        this.events.on('interactionCreate', async interaction => {
        if(options == "slash") {
            if (interaction.commandName == id) {
                this.StoreOutputValue(interaction.options._hoistedOptions, "args", cache)
                this.StoreOutputValue(interaction.commandName, "name", cache)
                this.StoreOutputValue(interaction.member, "member", cache)
                this.StoreOutputValue(interaction.guild, "server", cache)
                this.StoreOutputValue(interaction, "interaction", cache)
                this.StoreOutputValue(interaction.user, "user", cache)
                this.StoreOutputValue(interaction.channel, "channel", cache);
                this.StoreOutputValue(interaction.message, "message", cache)
                this.RunNextBlock("action", cache);
            }
            } else if(options == "buttons") {
                if (interaction.customId == id) {
                    this.StoreOutputValue(interaction.customId, "name", cache)
                    this.StoreOutputValue(interaction.member, "member", cache)
                    this.StoreOutputValue(interaction.guild, "server", cache)
                    this.StoreOutputValue(interaction, "interaction", cache)
                    this.StoreOutputValue(interaction.user, "user", cache)
                    this.StoreOutputValue(interaction.channel, "channel", cache);
                    this.StoreOutputValue(interaction.message, "message", cache);
                    this.RunNextBlock("action", cache);
                } 
                } else if(options == "other") {
                    if(interaction.customId == id) {
                        this.StoreOutputValue(interaction.member, "member", cache)
                    this.StoreOutputValue(interaction.guild, "server", cache)
                    this.StoreOutputValue(interaction, "interaction", cache)
                    this.StoreOutputValue(interaction.user, "user", cache)
                    this.StoreOutputValue(interaction.channel, "channel", cache);
                        this.StoreOutputValue(interaction, "interaction", cache)
                        this.StoreOutputValue(interaction.message, "message", cache)
                        this.RunNextBlock("action", cache);
                    }
                }
        })
    }
}