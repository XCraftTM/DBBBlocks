module.exports = {
    name: "render HTML",

    description: "who cares",

    category: "HTTP",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "html",
            "name": "HTML text",
            "description": "Description: who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "path",
            "name": "save to",
            "description": "Description: who cares",
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
        }
    ],

    code(cache) {
        const html = this.GetInputValue("html", cache) + "";
        let path = this.GetInputValue("path", cache);

        const nodeHtmlToImage = require('node-html-to-image')

        nodeHtmlToImage({
            output: path,
            html: html
        })
            .then(() => this.RunNextBlock("action", cache))
    }
}