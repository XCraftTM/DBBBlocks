module.exports = {
    name: "Add Frame To GIF",

    description: "Adds a frame to be used in the gif",

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
        {
            "id": "image",
            "name": "Canvas/Image",
            "description": "Description: The frame that will be added to the GIF.",
            "types": ["text", "object", "unspecified"],
            "required": true
        },
        {
            "id": "repeat",
            "name": "Repeat Frame",
            "description": 'Description: Repeat an amount of times a frame in the gif. Default is "1"',
            "types": ["number", "unspecified"],
        }
    ],

    options: [
        {
            "id": "frame",
            "name": "Frame Type",
            "description": "Description: Select if you are adding a canvas or an image.",
            "type": "SELECT",
                "options": {
                    "image": "Image",
                    "canvas": "Canvas"
                }
        },
    ],

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
        }
    ],

 async   code(cache) {
        const GIFEncoder = await this.require('gifencoder');
        const { createCanvas } = await this.require('canvas');
        const fs = require('fs');
        const Canvas = await this.require('canvas');

        const encoder = this.GetInputValue("encoder", cache);
        const type = this.GetOptionValue("frame", cache);
        var repeat = this.GetInputValue("repeat", cache)
        repeat = repeat ? repeat : 1
        repeat = parseInt(repeat)

        switch(type){
            case "image":
                const image = await Canvas.loadImage(this.GetInputValue("image",cache));

                var canvas = Canvas.createCanvas(image.width, image.height);
                var ctx = canvas.getContext(`2d`);
                const background = await Canvas.loadImage(this.GetInputValue("image",cache));
        
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                ctx.rect(0, 0, canvas.width, canvas.height);
    
                break;
            case "canvas":
                var canvas = this.GetInputValue("image", cache)
                var ctx = canvas.getContext('2d');

                break;
        }
        let limit = 0;
        const looper = setInterval(() => {
            limit++;
            if (limit <= repeat) {
                encoder.addFrame(ctx);
            } else {
                this.StoreOutputValue(encoder, "gif", cache)
                this.RunNextBlock("action", cache)
                clearInterval(looper);
            }

        }, 10);

    }
}