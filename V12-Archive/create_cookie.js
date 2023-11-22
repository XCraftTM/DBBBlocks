module.exports = {
    name: "HTTP create cookie",

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
            "id": "key",
            "name": "key",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "value",
            "name": "value",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "modifiers",
            "name": "modifiers",
            "description": "who cares",
            "types": ["text", "unspecified"]
        }
    ],

    options: [
        {
            "id": "modifiers",
            "name": "modifiers",
            "description": "options: Expires=<DATE>, Secure, HTTPOnly, Path=</PATH>, SameSite=<>",
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
            "id": "cookie",
            "name": "cookie",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["text"]
        }
    ],

    code(cache) {
        const key = this.GetInputValue("key", cache);
        const value = this.GetInputValue("value", cache);
        const i_modifier = this.GetInputValue("modifiers", cache)
        const o_modifier = this.GetOptionValue("modifiers", cache)

        if (!!i_modifier) {
            this.StoreOutputValue(`${key}=${value}; ${i_modifier}`, "cookie", cache);
        }
        else {
            if (!!o_modifier) {
                this.StoreOutputValue(`${key}=${value}; ${o_modifier}`, "cookie", cache);
            }
            else {
                this.StoreOutputValue(`${key}=${value}`, "cookie", cache);
            };
        };
        this.RunNextBlock("action", cache);
    }
}