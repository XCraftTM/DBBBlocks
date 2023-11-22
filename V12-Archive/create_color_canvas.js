module.exports = {
    name: "Create Color Canvas",
  
    description: "Create color canvas",
  
    category: ".MOD",
  
    inputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
        "types": ["action"]
      },
      {
        "id": "color",
        "name": "Color",
        "description": "Image for the canvas background",
        "types": ["text", "object", "unspecified"],
        "required": true
      },
      {
        "id": "width",
        "name": "BG Width",
        "description": "Witdh of your canvas. (700 recommended)",
        "types": ["number", "unspecified"],
        "required": true
      },
      {
        "id": "height",
        "name": "BG Height",
        "description": "Height of your canvas. (250 recommended)",
        "types": ["number", "unspecified"],
        "required": true
      },
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
        "id": "canvas",
        "name": "Canvas",
        "description": "The created canvas",
        "types": ["object", "unspecified"]
     }
    ],
  
    async code(cache) {
        const Discord = require('discord.js')
        const Canvas = await this.require('canvas');

        const color = this.GetInputValue("color", cache);
        const height = this.GetInputValue("height", cache);
        const width = this.GetInputValue("width", cache)

        const canvas = Canvas.createCanvas(width, height);
        var ctx = canvas.getContext("2d")

        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);

        this.StoreOutputValue(canvas, "canvas", cache);
        this.RunNextBlock("action", cache);
    }
  }