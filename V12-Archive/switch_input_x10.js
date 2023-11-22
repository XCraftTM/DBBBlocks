module.exports = {
  name: "Switch Input x10",

  description: "Like Switch Conditional but depends on input value. example:\nInput = 1: will output text linked to value 1",

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
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: the input for the switch.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw1",
      "name": "Value 1",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 1st value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw2",
      "name": "Value 2",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 2nd value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw3",
      "name": "Value 3",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 3rd value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw4",
      "name": "Value 4",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 4th value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw5",
      "name": "Value 5",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 5th value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw6",
      "name": "Value 6",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 6th value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw7",
      "name": "Value 7",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 7th value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw8",
      "name": "Value 8",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 8th value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw9",
      "name": "Value 9",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 9th value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  {
      "id": "sw10",
      "name": "Value 10",
      "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text\n\nDescription: The 10th value to compare the 'Input' to.",
      "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text"]
  },
  ],

  options: [],

  outputs: [
    {
      "id": "Description",
      "name": "Description",
      "description": "This works like switch conditional, but instead it checks if input is 1, 2, 3, 4...\nIf input is 1 it returns value 1\nIf input is 2 it returns value 2...",
      "types": ["null"]
     },
    {
      "id": "action",
      "name": "Action",
      "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
      "types": ["action"]
   },
   {
    "id": "action2",
    "name": "Action (Error)",
    "description": "Type: Action\n\nDescription: If input does not match any value.",
    "types": ["action"]
   },
   {
    "id": "result",
    "name": "Result",
    "description": "Type: Text, , Number, Unspecified\n\nDescription: Returns value Based On Input.",
    "types": ["text", "number", "unspecified"]
   }
   
  ],

  code(cache) {
      const input = this.GetInputValue("input", cache);
      let res

      if (input == 1) {res = this.GetInputValue("sw1", cache)};
      if (input == 2) {res = this.GetInputValue("sw2", cache)};
      if (input == 3) {res = this.GetInputValue("sw3", cache)};
      if (input == 4) {res = this.GetInputValue("sw4", cache)};
      if (input == 5) {res = this.GetInputValue("sw5", cache)};
	  if (input == 6) {res = this.GetInputValue("sw6", cache)};
	  if (input == 7) {res = this.GetInputValue("sw7", cache)};
	  if (input == 8) {res = this.GetInputValue("sw8", cache)};
	  if (input == 9) {res = this.GetInputValue("sw9", cache)};
	  if (input == 10) {res = this.GetInputValue("sw10", cache)};

      this.StoreOutputValue(res, "result", cache); 

      if ([1,2,3,4,5,6,7,8,9,10,"1","2","3","4","5","6","7","8","9","10"].includes(input)) {this.RunNextBlock("action", cache)}
      else (this.RunNextBlock("action2", cache))
        
      
  }
}