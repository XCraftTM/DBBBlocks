module.exports = {
  name: "Simple Welcomer",

  description: "Canvas alternaive",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "url",
      "name": "Url | Path",
      "description": "The image path to get",
      "types": ["text"]
    },
    {
      "id": "user",
      "name": "Member",
      "descripton": "Just link this",
      "types": ["object", "unspecified"],
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
      "id": "canvas",
      "name": "Attachment",
      "description": "The canvas created",
      "types": ["object", "unspecified"]
    }
  ],

  async code(cache) {
    const {CanvasSenpai} = await this.require("canvas-senpai");
    const canva = new CanvasSenpai();
    const b = this.GetOptionValue("blur?", cache);
    const url = this.GetInputValue("url", cache);
    const member = this.GetInputValue("user", cache);
    let data = await canva.welcome(member, {link: url, blur: false,}); 
    
      this.StoreOutputValue(data, "canvas", cache);
      this.RunNextBlock("action", cache);
  }
}