module.exports = {
  name: "Image To URL",

  description: "Converts the converted canvas to image into url",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"],
      "required": true
    },
    {
      "id": "channel",
      "name": "Channel",
      "description": "Acceptable Types: Object\n\nDescription: Any channel is fine, message would be deleted.",
      "types": ["object", "undefined"],
      "required": true
    },
    {
      "id": "image",
      "name": "Image",
      "description": "Acceptable Types: Object\n\nDescription: The output from convert canvas to image.",
      "types": ["object", "undefined"],
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
    "id": "url",
    "name": "URL",
    "description": "Type: Object, List\n\nDescription: The message obtained. If \"Split Message\" is enabled, this will return a list containing all message objects instead of a single one.",
    "types": ["text", "unspecified"]
}
  ],

 code(cache) { 
    this.GetInputValue("channel", cache).send("_ _", {
        files: [this.GetInputValue("image", cache)],
    }).then(msg => {
        this.StoreOutputValue(((msg.attachments.array())[0]).url, "url", cache);
        msg.delete()
        this.RunNextBlock("action", cache);
    });
  }
}