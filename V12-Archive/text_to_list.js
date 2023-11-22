module.exports = {
  name: "Text to List",

  description: "Converts Text To List",

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
        "description": "Text that will be converted to list",
        "types": ["text", "unspecified"],
        "required": true
      },
    ],

    options: [
        {
            "id": "splitmode",
            "name": "Split Mode",
            "description": "Description: Split mode",
            "type": "SELECT",
            "options": {
                "newLine": "New Line",
                "comma": "Comma"
            }
        }
    ],

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
          "description": "Type: List\n\nDescription: Output",
          "types": ["list", "undefined"]
      }
  ],

  code(cache) {
   const text = this.GetInputValue("text", cache) + "";
   const splitmode = this.GetOptionValue("splitmode", cache);

   if(splitmode == "newLine") { var split = text.split('\n'); }
   else { var split = text.split(','); }

   this.StoreOutputValue(split, "list", cache);
   this.RunNextBlock("action", cache);
  }
}