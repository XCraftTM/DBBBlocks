module.exports = {
  name: "Get Permissions In Channel",

  description: "Gets permissions of a role or member in a specific channel",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "target",
      "name": "Role/Member",
      "description": "The Role/Member to check perms",
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
      const target = this.GetInputValue("target", cache);
      const channel = this.GetInputValue("channel", cache);
      const result = target.permissionsIn(channel)
       
      this.StoreOutputValue(result, "result", cache);
      this.RunNextBlock("action", cache);
  }
}