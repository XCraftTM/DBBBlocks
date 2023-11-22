module.exports = {
  name: "Block Name",
  description: "A short description of what the block does.",

  category: "Category",

  inputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
        "types": ["action"]
      },
      {
          "id": "input1",
          "name": "Input 1",
          "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: A description of what the input does.",
          "types": ["text", "list", "unspecified", "undefined", "null", "object", "boolean", "date", "number"]
      },
      {
        "id": "input2",
        "name": "Input 2",
        "description": "Type: Action\n\nDescription: A description of what the output does.",
        "types": ["object"]
    }
  ],

  options: [
      {
          "id": "option1",
          "name": "Option 1",
          "description": "Type: Boolean\n\nDescription: A description of what the option does.",
          "type": "SELECT",
          "options": {
              "true": "True",
              "false": "False"
          }
      },
      {
          "id": "option2",
          "name": "Option 2",
          "description": "Type: Text\n\nDescription: A description of what the option does.",
          "types": ["text", "unspecified"]
      }
  ],

  outputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
      "types": ["action"]
    },
      {
          "id": "output2",
          "name": "Object",
          "description": "Type: Action\n\nDescription: A description of what the output does.",
          "types": ["object"]
      }
  ],

  code(cache) {
      const input1 = this.GetInputValue("input1", cache);
      const input2 = this.GetInputValue("input2", cache);
      const option1 = this.GetOptionValue("option1", cache);
      const option2 = this.GetOptionValue("option2", cache);

      // Your code here

      this.StoreOutputValue("output1", output1, cache);
      this.RunNextBlock("output2", cache);
  }
}
