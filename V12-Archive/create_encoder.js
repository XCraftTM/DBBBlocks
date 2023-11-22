module.exports = {
    name: "Create GIF Encoder",

    description: "Creates a GIF",

    category: "Canvas Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Runs the block.",
            "types": ["action"]
        },
        {
            "id": "width",
            "name": "Width",
            "description": "Description: The width of the gif.",
            "types": ["number", "unspecified"],
            "required": true
        },
        {
            "id": "height",
            "name": "Height",
            "description": "Description: The height of the gif.",
            "types": ["number", "unspecified"],
            "required": true
        },
        {
            "id": "delay",
            "name": "Delay in miliseconds",
            "description": 'Description: The delay for each frame. Default: "500"  ',
            "types": ["number", "unspecified"],
        },
        {
            "id": "repeat",
            "name": "GIF Repetition",
            "description": 'Description: The amount of times the gif will repeat. 0 for repeat, -1 for no repeat .',
            "types": ["number", "unspecified"],
        },
        {
            "id": "name",
            "name": "Custom Name",
            "description": "Description: The name of the gif.",
            "types": ["text", "unspecified"],
        },
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Runs the next block.",
            "types": ["action"]
        },
        {
            "id": "gif",
            "name": "GIF Encoder",
            "description": "Type: Stores the gif in the next block.",
            "types": ["object", "unspecified"]
        },
        {
            "id": "path",
            "name": "Path",
            "description": "Type: Stores the gif in the next block.",
            "types": ["text", "unspecified"]
        }
    ],

  async  code(cache) {
        const GIFEncoder = await this.require('gifencoder');
        const { createCanvas } = await this.require('canvas');
        const fs = require('fs');

        const width = parseInt(this.GetInputValue("width", cache))
        const height = parseInt(this.GetInputValue("height", cache))
        const _delay = parseInt(this.GetInputValue("delay", cache))
        const delay = _delay ? _delay : 500
        const _repeat = parseInt(this.GetInputValue("repeat", cache))
        const repeat = _repeat ? _repeat : 0
        const _name = this.GetInputValue("name", cache)
        const name = _name ? _name : "my_animated"
        const path =  "gif/" +  name + ".gif"

        fs.existsSync("./gif") ? undefined : fs.mkdirSync("./gif", {recursive: true});
 
        const encoder = new GIFEncoder(height, width);
        // stream the results as they are available into myanimated.gif
        encoder.createReadStream().pipe(fs.createWriteStream(path));
 
        encoder.start();
        encoder.setRepeat(repeat);   // 0 for repeat, -1 for no-repeat
        encoder.setDelay(delay);  // frame delay in ms
        encoder.setQuality(10); // image quality. 10 is default.

        this.StoreOutputValue(path, "path", cache)
        this.StoreOutputValue(encoder, "gif", cache)
        this.RunNextBlock("action", cache)
    }
}