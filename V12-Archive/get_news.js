module.exports = {
  name: "Get News",

  description: "Gets the news from Google News",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "title",
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
    const news = require("gnews");
    const search = this.GetInputValue("title", cache);

    await news.search(search).then((data) => {
      for (let article of data) {
         this.StoreOutputValue(article, "result", cache);
        this.RunNextBlock("action", cache);
      }
    }).catch((error) => console.error(error));
  }
}
