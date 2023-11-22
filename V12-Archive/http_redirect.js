module.exports = {
    name: "HTTP [Redirect]",

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
            "id": "redirect",
            "name": "redirect URL",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "res",
            "name": "res",
            "description": "who cares",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "cookies",
            "name": "cookies",
            "description": "who cares",
            "types": ["list", "unspecified"],
            "required": false
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const http = require("http");
        const redirect = this.GetInputValue("redirect", cache);
        const res = this.GetInputValue("res", cache);
        const cookies = this.GetInputValue("cookies", cache);
        const this_s = this

        response(res)

        function response(res) {
            if (cookies !== undefined){
            res.setHeader('Set-Cookie', cookies)}
            res.setHeader('Location', redirect)
            res.writeHead(307);
            res.end();
            this_s.RunNextBlock("action", cache);
        };
    }
}