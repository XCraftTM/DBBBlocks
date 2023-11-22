module.exports = {
  name: "Get Spotify Info V3",

  description: "Gets the spotify track info from link to song /by M&RT!N!×J",

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
      "description": "Spotify song URL",
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
    "id": "title",
    "name": "Title",
    "description": "song title",
    "types": ["text"]
   },
   {
    "id": "artist",
    "name": "Artist",
    "description": "song artist",
    "types": ["text"]
   },
   {
    "id": "image",
    "name": "Image URL",
    "description": "album image URL",
    "types": ["text"]
   },
  ],

  async code(cache) {
    const fetch = require('isomorphic-unfetch');
    const { getPreview } = require("spotify-url-info")(fetch);
    const inputPreview = this.GetInputValue("inputPreview", cache);
    const inputData = this.GetInputValue("inputData", cache);

    await getPreview(inputPreview).then((res) => {
         this.StoreOutputValue(res.title, "title", cache);
         this.StoreOutputValue(res.artist, "artist", cache);
         this.StoreOutputValue(res.image, "image", cache);
         this.RunNextBlock("action", cache);
    }).catch((error) => console.error(error));
  }
}
