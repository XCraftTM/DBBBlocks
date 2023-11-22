module.exports = {
  name: "Check If Link Is Working",

  description: "Checks if a link is working",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "inputlink",
      "name": "Link",
      "description": "Search topic",
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
    "name": "Boolean",
    "description": "Result",
    "types": ["boolean", "unspecified"]
   },
  ],

  async code(cache) {
    const isLinkWorking = await this.require("is-link-working");
    const link = this.GetInputValue("inputlink", cache);
   
    isLinkWorking(link)
    .then((working) => this.StoreOutputValue(working, "result", cache))
    .catch((err) => console.log('err while checking', err));

    this.RunNextBlock("action", cache);
  }
}