module.exports = {
  name: "Base64",

  description: "Convert text to base64 and vise versa",

  category: ".Amnezia Blocks",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "input",
      "name": "Input",
      "description": "The text to convert",
      "types": ["text", "unspecified"],
      "required": true
   },
  ],

  options: [
    {
      "id": "option",
      "name": "Conversion Type",
      "description": "The type of conversion",
      "type": "SELECT",
      "options": {
        1: "Encode to base64",
        2: "Decode to ascii",
      }
   },
  ],

  outputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
      "types": ["action"]
   },
   {
    "id": "result",
    "name": "Result",
    "description": "Converted result",
    "types": ["text", "unspecified"]
  }
  
  ],

  async code(cache) {

    const input = this.GetInputValue("input", cache);
    const option = this.GetOptionValue("option", cache);

    let res
    if (option == 1) {
      buff = new Buffer.from(input);
      res = buff.toString('base64');
    }
    else if (option == 2) {
      buff = new Buffer.from(input, 'base64');
      res = buff.toString('ascii');
    }
      this.StoreOutputValue(res, "result", cache);
      this.RunNextBlock("action", cache);
  }
}