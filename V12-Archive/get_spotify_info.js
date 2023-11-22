module.exports = {
  name: "Get Spotify Info",

  description: "Gets the spotify track info from link to song",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "inputPreview",
      "name": "Topic",
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
    "name": "Result",
    "description": "Result",
    "types": ["object", "unspecified"]
   },
  ],

  async code(cache) {
    const { getPreview } = await this.require("spotify-url-info");
    const inputPreview = this.GetInputValue("inputPreview", cache);
    const inputData = this.GetInputValue("inputData", cache);

    await getPreview(inputPreview).then((res) => {
         this.StoreOutputValue(res, "result", cache);
         this.RunNextBlock("action", cache);
    }).catch((error) => console.error(error));
  }
}
