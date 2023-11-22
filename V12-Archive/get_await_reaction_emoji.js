module.exports = {
  name: "Get Await Reaction Emoji",

  description: "Combined block works same as:\n- Get Item From List\n- Get Message Reaction Info\n- Get Server Emoji Info.",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "lmsgreact",
      "name": "Message Reactions",
      "description": "Acceptable Types: List.",
      "types": ["list", "unspecified"],
      "required" : true
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
    "id": "emoji",
    "name": "Emoji",
    "description": "Type: text\n\nDescription: the gathered emoji from await message reaction block.",
    "types": ["unspecified", "text"]
 },
  ],

  code(cache) {
      this.StoreOutputValue(this.GetInputValue("lmsgreact", cache)[0].emoji.toString(), "emoji", cache)
      this.RunNextBlock("action", cache);
  }
}