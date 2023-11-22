module.exports = {
  name: "Get Role Perms In Channel",

  description: "Gets permissions of a specific role in a specific channel",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "role",
      "name": "Role",
      "description": "The Role to check perms",
      "types": ["object", "unspecified"]
    },
    {
      "id": "channel",
      "name": "Channel",
      "description": "The channel to check perms",
      "types": ["object", "unspecified"]
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
    "name": "Permissions",
    "description": "The Permissions",
    "types": ["object", "text", 'unspecified']
 },
  ],

  code(cache) {
      const role = this.GetInputValue("role", cache);
      const channel = this.GetInputValue("channel", cache);
      const result = role.permissionsIn(channel)
       
      this.StoreOutputValue(result, "result", cache);
      this.RunNextBlock("action", cache);
  }
}