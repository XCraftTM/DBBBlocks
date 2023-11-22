module.exports = {
    name: "Conditional Text v9.1",

    description: "Replaces one text for another depending on the action imput.",

    category: ".Panso",
  
      inputs: [
        {
            "id": "action1",
            "name": "Action 1",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "boolean",
            "name": "Text divider",
            "description": "Acceptable Types: Boolean\n\nDescription: Whether to split the message text into multiple messages if it exceeds the characters limit (2000). (OPTIONAL)",
            "types": ["boolean", "unspecified", "undefined", "null", "object", "date", "number", "text", "list"],
            "required": true
        },
        {
          "id": "text1",
          "name": "Text 1",
          "description": "The text that will be activated if action 1 is activated",
          "types": ["text", "boolean", "unspecified", "undefined", "null", "object", "date", "number", "list"],
        },
        {
          "id": "text2",
          "name": "Text 2",
          "description": "The text that will be activated if action 2 is activated",
          "types": ["text", "boolean", "unspecified", "undefined", "null", "object", "date", "number", "list"],
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
            "id": "text",
            "name": "Text",
            "description": "Type: Text\n\nDescription: The text replaced.",
            "types": ["text", "boolean", "unspecified", "undefined", "null", "object", "date", "number", "list"]
        }
    ],
  
  code(cache) {
    const text1 = this.GetInputValue("text1", cache);
    const text2 = this.GetInputValue("text2", cache);
    let boolean = this.GetInputValue("boolean", cache);
    var lol
    
   if(boolean == true){
      var lol = text1
   }
    else{
      var lol = text2
    }
    
    this.StoreOutputValue(lol, "text", cache);
    this.RunNextBlock("action", cache);
  }
}