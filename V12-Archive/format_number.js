module.exports = {
    name: "Format Numbers",

    description: "Separates numbers for it to be easier to read.",

    category: ".Panso",
  
      inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "number",
            "name": "Number",
            "description": "Acceptable Types: Boolean\n\nDescription: Whether to split the message text into multiple messages if it exceeds the characters limit (2000). (OPTIONAL)",
            "types": ["number", "text", "unspecified"],
            "required": true
        },
        {
            "id": "cs",
            "name": "Custom Separator",
            "description": "Acceptable Types: Boolean\n\nDescription: Default: ',' (OPTIONAL)",
            "types": ["text", "unspecified"],
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
            "name": "Number Formatted",
            "description": "Type: Text\n\nDescription: The number formatted.",
            "types": ["text"]
        }
    ],
  
  code(cache) {
    var num = parseInt(this.GetInputValue("number", cache))
    var cs = this.GetInputValue("cs", cache) ? this.GetInputValue("cs", cache) : ",";
    var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, cs);

    
    this.StoreOutputValue(commas, "text", cache);
    this.RunNextBlock("action", cache);
  }
}