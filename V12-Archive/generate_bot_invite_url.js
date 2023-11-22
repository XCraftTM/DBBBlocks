///BLOCK MADE BY: PANSOCRATES#0303

module.exports = {
    name: "Generate Bot Invite Url",

    description: "Generates the bot invite link",

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
            "id": "permissions",
            "name": "Permissions",
            "description": "Acceptable Types: Boolean\n\nDescription: The permissions for your bot",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "redirect",
            "name": "Redirect URL",
            "description": "Acceptable Types: Boolean\n\nDescription: Redirect URL (OPTIONAL)",
            "types": ["text", "unspecified"],
        },
        {
            "id": "scope",
            "name": "Scope",
            "description": "Acceptable Types: Boolean\n\nDescription: Optional, default is 'bot'",
            "types": ["text", "unspecified"],
        },
        {
            "id": "code",
            "name": "Require Code Grant",
            "description": "Acceptable Types: Boolean\n\nDescription: Optional, dafault is 'false'",
            "types": ["boolean", "unspecified"],
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
            "name": "Invite URL",
            "description": "Type: Text\n\nDescription: The bot invite url",
            "types": ["text"]
        }
    ],
  
 async  code(cache) {
    const id = this.client.user.id
    const permissions = this.GetInputValue("permissions", cache).allow + ""
    const scope = this.GetInputValue("scope", cache) ? this.GetInputValue("scope", cache) + "" : "bot"
    const redirect = this.GetInputValue("redirect", cache) ?  "&redirect_uri=" + this.GetInputValue("redirect", cache) : ""
    const code = this.GetInputValue("code", cache) ? "&response_type=code" : ""

    const link = "https://discord.com/oauth2/authorize?client_id=" + id + "&scope=" + scope + "&permissions=" + permissions + code + redirect




    this.StoreOutputValue(link, "text", cache)
    this.RunNextBlock("action", cache);
  }
}