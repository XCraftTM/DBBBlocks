module.exports = {
  name: "Unzip",

  description: "Unzips a zip file",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "source",
      "name": "Source",
      "description": "Acceptable Types: Text\n\nDescription: The zip file source location.",
      "types": ["text", "unspecified"]
    },
    {
      "id": "target",
      "name": "Directory",
      "description": "Acceptable Types: Text\n\nDescription: The directory location to extract file on.",
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

  async code(cache) {
    const source = this.GetInputValue("source", cache);
    const target = this.GetInputValue("target", cache);
    
    const extract = await this.require('extract-zip')
    try {
      await extract(source, { dir: target })
      console.log('Extraction complete')
    } catch (err) {
     }
     this.RunNextBlock("action", cache);   
  }
}