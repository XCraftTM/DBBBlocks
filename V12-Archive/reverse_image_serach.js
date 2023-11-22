module.exports = {
  name: "Reverse Image Search",

  description: "It is what it is",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "link",
      "name": "Image Link",
      "description": "Acceptable Types: Text \n\nDescription: Image to reverse search",
      "types": ["text", "unspecified"]
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
      "id": "results",
      "name": "Results",
      "description": "Type: Object\n\nDescription: Gives out list of URL (and title) similar to the image input.",
      "types": ["Object", "unspecified"]
   },
   
  ],

  async code(cache) {
      const reverseImageSearch = await this.require('node-reverse-image-search')
      const link = this.GetInputValue("link", cache)

      const doSomething = results => (
      results.shift(),
      this.StoreOutputValue(results, "results", cache),
      this.RunNextBlock("action", cache)
      )
      
      reverseImageSearch(link , doSomething)

  }
}