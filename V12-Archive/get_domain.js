module.exports = {
  name: "Get Domain",

  description: "Gets the domain info from WHOIS",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "title",
      "name": "Domain",
      "description": "Search domain",
      "types": ["text", "unspecified"],
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
    "id": "result",
    "name": "Result",
    "description": "Result",
    "types": ["object", "unspecified"]
   },
  ],

  async code(cache) {
    const whois = require("whois-json");
    const search = this.GetInputValue("title", cache);          
    
    const results = await whois(search);
    this.StoreOutputValue(results, "result", cache);
    this.RunNextBlock("action", cache); 
  }
}