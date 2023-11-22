module.exports = {
  
    name: "Cat Images",

    description: "gives you cat images they are random aswell by ytAidenstime",

    category: "ytAidenstime",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
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
            "id": "catimage",
            "name": "Cat Image (URL)",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
    ],

    async code(cache) {
        const fetch = await this.require("node-fetch");
        const locationAwnser = this.GetOptionValue("country", cache);
      const response = await fetch(`https://api.thecatapi.com/v1/images/search`, {
	method: 'get',
    });
    const data = await response.json();
    this.StoreOutputValue(data[0].url, "catimage", cache)
    this.RunNextBlock("action", cache)
      }
}
