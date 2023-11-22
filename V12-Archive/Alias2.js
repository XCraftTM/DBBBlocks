module.exports = {
  name: "Alias2",

  description: "Gets a list of aliases from the text block you link to it",

  category: ".MOD",

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
      "description": "If command name: Link to message output of command event block\n\nIf any: you can link any you want.",
      "types": ["unspecified", "object", "text"],
      "required": true
    },
	{
      "id": "path",
      "name": "Aliases",
      "description": "Type your aliases here. Use LOG output linked to console log if you want to see how its checking it",
      "types": ["unspecified", "object", "text", "list"],
      "required": true
    } 
  ],

  options: [
    {
      "id": "type",
      "name": "Type",
      "description": "Select if for command block or any",
      "type": "SELECT",
      "options": {
        ".content": "Command Name",
        "": "Any"
      }

    }
  ],

  outputs: [
    {
      "id": "action1",
      "name": "Action",
      "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
      "types": ["action"]
   },
   {
      "id": "action2",
      "name": "Error",
      "description": "If alias did not match.",
       "types": ["action"]
   },
   {
      "id": "result",
      "name": "Logs",
      "description": "The list of aliases. This is what would be used to compare with the input if it matched or not",
       "types": ["text", "unspecified"]
   }

  ],

  async code(cache) {
    let input
    let type = this.GetOptionValue("type", cache) + "";
    if (type === ".content") {
      input = this.GetInputValue("input", cache).content
    }
    else if (type != "content") {
      input = this.GetInputValue("input", cache)
    }
    
    const alias = this.GetInputValue("path", cache).split(" ").join("").split(",");
    const action = alias.includes(input);
      this.StoreOutputValue(input, "result", cache);
      this.StoreOutputValue((`\n\x1b[36mInput: \x1b[32m${input}\n\x1b[36mComparing to: \x1b[33m${alias}\n\x1b[36mResult: \x1b[31m${action}`), "result", cache);
      this.RunNextBlock(action ? "action1" : "action2", cache);
  }
}