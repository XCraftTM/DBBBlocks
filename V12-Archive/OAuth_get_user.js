module.exports = {
    name: "OAuth get User",

    description: "who cares",

    category: "HTTP",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "clientId",
            "name": "Client ID",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "clientSecret",
            "name": "Client Secret",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "token",
            "name": "access token",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
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
            "id": "action_error",
            "name": "Action (ERROR)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "username",
            "name": "Username",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "discriminator",
            "name": "discriminator",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "id",
            "name": "User ID",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "email",
            "name": "E-Mail",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "user",
            "name": "user",
            "description": "who cares",
            "types": ["object"]
        },
        {
            "id": "error",
            "name": "error",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "error2",
            "name": "error2",
            "description": "who cares",
            "types": ["object"]
        }
    ],

    code(cache) {
        const clientId = this.GetInputValue("clientId", cache);
        const clientSecret = this.GetInputValue("clientSecret", cache);
        const token = this.GetInputValue("token", cache);

        const DiscordOauth2 = require("discord-oauth2");
        const oauth = new DiscordOauth2({
            clientId: clientId,
            clientSecret: clientSecret,
        });

        const this_s = this


        oauth.getUser(token)
            .then(user => {
                this.StoreOutputValue(user.username, "username", cache);
                this.StoreOutputValue(user.discriminator, "discriminator", cache);
                this.StoreOutputValue(user.id, "id", cache);
                this.StoreOutputValue(user.email, "email", cache);
                this.StoreOutputValue(user, "user", cache);
                this.RunNextBlock("action", cache);
            })
            .catch((e) => {
                this.StoreOutputValue(e.message, "error", cache);
                this.StoreOutputValue(e.response, "error2", cache);
                this.RunNextBlock("action_error", cache);
            });
    }
}