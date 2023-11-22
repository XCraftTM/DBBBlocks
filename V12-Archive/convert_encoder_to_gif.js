module.exports = {
    name: "Convert Encoder to GIF",

    description: "Creates if a number exists",

    category: "Canvas Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Runs the block.",
            "types": ["action"]
        },
        {
            "id": "encoder",
            "name": "GIF Encoder",
            "description": "Description: The width of the gif.",
            "types": ["object", "unspecified"],
            "required": true
        },
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Runs the next block.",
            "types": ["action"]
        }
    ],

  async  code(cache) {
        const GIFEncoder = await this.require('gifencoder');
        const { createCanvas } = await this.require('canvas');
        const fs = require('fs');

        const encoder = this.GetInputValue("encoder", cache)
        encoder.finish();


        this.RunNextBlock("action", cache)
    }
}