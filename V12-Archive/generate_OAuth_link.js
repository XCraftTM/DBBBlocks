module.exports = {
    name: "generate OAuth link",

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
            "id": "redirect",
            "name": "redirect URI",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "scope",
            "name": "scope",
            "description": "options: identify, email, connections, guilds, guilds.join,...  Example: identify email guilds",
            "type": "TEXT",
            "required": true
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
            "id": "link",
            "name": "link",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "state",
            "name": "state",
            "description": "who cares",
            "types": ["text"]
        }
    ],

    code(cache) {
        const clientId = this.GetInputValue("clientId", cache);
        const clientSecret = this.GetInputValue("clientSecret", cache);
        const redirect = this.GetInputValue("redirect", cache);
        const scope = this.GetOptionValue("scope", cache)

        const crypto = require('crypto')
        const DiscordOauth2 = require("discord-oauth2");
        const oauth = new DiscordOauth2({
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: redirect,
        });

        const state = crypto.randomBytes(16).toString("hex")

        const url = oauth.generateAuthUrl({
            scope: scope,
            state: state
        });

        this.StoreOutputValue(url, "link", cache);
        this.StoreOutputValue(state, "state", cache);
        this.RunNextBlock("action", cache);
    }
}