module.exports = {
  name: "Characters to List",

  description: "Replaces one text for another depending on the action imput.",

  category: "List Stuff",

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
        "description": "The value that will be converted to list",
        "types": ["text", "unspecified", "null", "number"],
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
          "id": "list",
          "name": "List",
          "description": "Type: Text\n\nDescription: The list",
          "types": ["list", "unspecified"]
      }
  ],

  code(cache) {
   const text = this.GetInputValue("text", cache) + "";
   this.StoreOutputValue(Array.from(text), "list", cache);
   this.RunNextBlock("action", cache);
  }
}