module.exports = {
    name: "Wikipedia Search",

    description: "Replaces one text for another depending on the action imput.",

    category: ".Panso",
  
      inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],

        },
        {
          "id": "text",
          "name": "Search Value",
          "description": "The text that will be activated if action 1 is activated",
          "types": ["text", "unspecified"],
          "required": true
        },
      ],
  
      options: [
        {
            "id": "language",
            "name": "Language",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "type": "SELECT",
            "options": {
                "en": "English",
                "fr": "French",
                "de": "German",
                "es": "Spanish",
                "ja": "Japanese",
                "ru": "Russian",
                "it": "Italian",
                "zh": "Chinese",
                "pt": "Portuguese",
                "ar": "Arabic",
                "fa": "Persian",
                "pl": "Polish",
                "nl": "Dutch",
                "id": "Indonesian",
            }
        },
      ],
  
  outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Wikipedia",
            "description": "Type: Text\n\nDescription: The text replaced.",
            "types": ["object"]
        }
    ],
  
 async code(cache) {
    const tldr = await this.require("wikipedia-tldr")
    const search = this.GetInputValue("text", cache)
    const language = this.GetOptionValue("language", cache)

    tldr(search, language).then(result =>{
        this.StoreOutputValue(result, "result", cache)
        this.RunNextBlock("action", cache)
    })
    
  }
}