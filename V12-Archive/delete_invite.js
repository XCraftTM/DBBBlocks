module.exports = {
  name: "Delete Invite",

  description: "Deletes discord invite.",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "invite",
      "name": "Invite",
      "description": "The invite result from find invite block (REQUIRED).",
      "types": ["object", "unspecified"],
      "required": true
    },
    {
      "id": "reason",
      "name": "Reason",
      "description": "Reason of deleting invite (OPTIONAL).",
      "types": ["text", "unspecified"]
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
  ],

  code(cache) {
      const invite = this.GetInputValue("invite", cache);
      const reason = this.GetInputValue("reason", cache);


      invite.delete([reason])
    
      this.RunNextBlock("action", cache);
  }
}