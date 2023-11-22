module.exports = {
  name: "Get Lyrics V2",

  description: "Gets the lyrics of your song from genius.com",

  category: ".MJ",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "title",
      "name": "Title",
      "description": "Your song title to search lyrics for",
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

    const fetch = require("node-fetch");
    const url = "https://some-random-api.ml/lyrics";
    const title = this.GetInputValue("title", cache);
        
    await fetch(`${url}?title=${title}`, { method: "Get" })
      .then((res) => res.json())
      .then((res) => {
        this.StoreOutputValue(res, "result", cache);
        this.RunNextBlock("action", cache);
      })
      .catch((error) => console.error(error));               
  }
}