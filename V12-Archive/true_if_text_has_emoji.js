module.exports = {
    name: "True if text has emoji",

    description: "Checks if the text has anywhere an emoji.",

    category: "Boolean Stuff",
  
      inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
          "id": "text",
          "name": "Text",
          "description": "The text that will be activated if action 1 is activated",
          "types": ["text", "unspecified"],
          "required": true,
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
            "id": "bool",
            "name": "Boolean",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["boolean", "unspecified"]
        }
    ],
  
  code(cache) {
    const text = this.GetInputValue("text", cache);

    this.StoreOutputValue(/\p{Extended_Pictographic}/u.test(text), "bool", "cache")
    this.RunNextBlock("action", cache)

  }
}