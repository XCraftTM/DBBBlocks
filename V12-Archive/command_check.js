module.exports = {
  name: "Command Check",

  description: "Use this if u plan to add command with similar names\nso it doesnt trigger unintended command",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "msg",
      "name": "Message",
      "description": "Acceptable Types: Objecet\n\nDescription: link to message.",
      "types": ["object", "unspecified"]
    },
    {
      "id": "cmd_name",
      "name": "Command Name",
      "description": "Acceptable Types: Text\n\nDescription: link to Command Name.",
      "types": ["text", "unspecified"]
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
  ],

  code(cache) {
    
    const check = this.GetInputValue("cmd_name", cache)
  
   if (this.GetInputValue("msg", cache).content.split(" ").shift() == check) this.RunNextBlock("action", cache);
      
  }
}