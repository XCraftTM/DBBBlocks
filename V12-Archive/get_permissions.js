module.exports = {
  name: "Get Permissions",

  description: "Gets list of permissions available",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "permissions",
      "name": "Permissions",
      "description": "Link permissions here",
      "types": ["object", "unspecified"],
      "required" : true
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
    "id": "result",
    "name": "Result",
    "description": "The info gathered",
    "types": ["list", "text", "unspecified"],
    "required" : true
  }
  ],

  code(cache) {
      const permissions = this.GetInputValue("permissions", cache);
      this.StoreOutputValue(permissions.toArray(), "result", cache);
      this.RunNextBlock("action", cache);
  }
}