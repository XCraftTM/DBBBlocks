module.exports = {
  name: "Get Spotify Playlist Info",

  description: "Gets the spotify playlist info from link to playlist /by M&RT!N!×J",

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
      "name": "URL",
      "description": "Spotify playlist URL",
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
    const fetch = require('isomorphic-unfetch');
    const { getTracks} = require("spotify-url-info")(fetch);
    const inputPreview = this.GetInputValue("inputPreview", cache);

    await getTracks(inputPreview).then((res) => {
      this.StoreOutputValue(res.map(o => o.external_urls.spotify), "result", cache);
      this.RunNextBlock("action", cache);
    })
  }
}