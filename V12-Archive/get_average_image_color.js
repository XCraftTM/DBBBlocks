module.exports = {
  name: "Get average color from image",

  description: "Gets the average color of an image.",

  category: ".Panso",

  inputs: [
    {
      "id": "acttion",
      "name": "Action",
      "description": "Description: The action",
      "types": ["action"]
    },
    {
      "id": "image",
      "name": "Image",
      "description": "Description: The image",
      "types": ["text", "object", "unspecified"]
    }
  ],

  options: [],

  outputs: [
      {
          "id": "action",
          "name": "Action",
          "description": "Type: Boolean\n\nDescription: The boolean.",
          "types": ["action"]
      },
      {
        "id": "color",
        "name": "Color",
        "description": "Type: Color in hexadecimal.",
        "types": ["text", "unspecified"]
    }
  ],

  async code(cache) {
    const Discord = require('discord.js')
    const Canvas = await this.require('canvas');
    const image = await Canvas.loadImage(this.GetInputValue("image",cache));

    const result = getAverageRGB(image)

    function getAverageRGB(imgEl) {
      var blockSize = 10, // only visit every 5 pixels
          defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
          canvas = Canvas.createCanvas(),
          context = canvas.getContext && canvas.getContext('2d'),
          data, width, height,
          i = -4,
          length,
          rgb = {r:0,g:0,b:0},
          count = 0;
  

      if (!context) {
          return defaultRGB;
      }
  
      height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
      width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

      context.drawImage(imgEl, 0, 0);

      try {
          data = context.getImageData(0, 0, width, height);
      } catch(e) {
        console.log("lol")
          /* security error, img on diff domain */
          return defaultRGB;
      }
  
      length = data.data.length;

      while ( (i += blockSize * 4) < length ) {
          ++count;
          rgb.r += data.data[i];
          rgb.g += data.data[i+1];
          rgb.b += data.data[i+2];
      }
  
      // ~~ used to floor values
      rgb.r = ~~(rgb.r/count);
      rgb.g = ~~(rgb.g/count);
      rgb.b = ~~(rgb.b/count);

      return rgb;
  
  }

  function rgbToHex(red, green, blue){
   var colour = "#" + red.toString(16) + green.toString(16) + blue.toString(16)
    return colour
}

  const result_2 = rgbToHex(result.r, result.g, result.b)

  this.StoreOutputValue(result_2, "color", cache)
  this.RunNextBlock("action", cache)
  }
}