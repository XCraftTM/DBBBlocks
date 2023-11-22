module.exports = {
    name: "get OAuth access token",

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
            "id": "link",
            "name": "redirect link",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "code",
            "name": "code",
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
            "id": "access_token",
            "name": "acces token",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "expiration",
            "name": "expires in",
            "description": "who cares",
            "types": ["number"]
        },
        {
            "id": "refresh_token",
            "name": "refresh token",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "scope",
            "name": "scopes",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "token_type",
            "name": "token type",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "response",
            "name": "response",
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
        const code = this.GetInputValue("code", cache);
        const link = this.GetInputValue("link", cache);

        const DiscordOauth2 = require("discord-oauth2");
        const oauth = new DiscordOauth2({
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: link,
        });

        oauth.tokenRequest({
            code: code,
            grantType: "authorization_code"
        })
            .then(code => {
                this.StoreOutputValue(code.access_token, "access_token", cache);
                this.StoreOutputValue(code.expires_in, "expiration", cache);
                this.StoreOutputValue(code.refresh_token, "refresh_token", cache);
                this.StoreOutputValue(code.scope, "scope", cache);
                this.StoreOutputValue(code.token_type, "token_type", cache);
                this.StoreOutputValue(code, "response", cache);
                this.RunNextBlock("action", cache);
            })
            .catch((e) => {
                this.StoreOutputValue(e.message, "error", cache);
                this.StoreOutputValue(e.response, "error2", cache);
                this.RunNextBlock("action_error", cache);
            })

    }
}