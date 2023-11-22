module.exports = {
    name: "Get Wiki Info",

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
          "id": "wiki",
          "name": "Wikipedia",
          "description": "The text that will be activated if action 1 is activated",
          "types": ["object", "unspecified"],
          "required": true
        },
      ],
  
      options: [
        {
            "id": "info",
            "name": "Info",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "type": "SELECT",
            "options": {
                "query": "Query",
                "type": "Type",
                "title": "Title",
                "displaytitle": "Display Title",
                "image": "Image",
                "lang": "Language",
                "description": "Description",
                "extract": "Extract"
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
            "types": ["text", "unspecified"]
        }
    ],
  
 async code(cache) {
    const wikipedia = this.GetInputValue("wiki", cache)
    const info = this.GetOptionValue("info", cache)

    let result
    switch(info){
        case "query":
           result = wikipedia.query
            break;
        case "type":
            result = wikipedia.type
            break;
        case "title":
            result = wikipedia.title
            break;
        case "displaytitle":
            result = wikipedia.displaytitle
            break;
        case "image":
            result = wikipedia.originalimage.source
            break;
        case "lang":
            result = wikipedia.lang
            break;
        case "description":
            result = wikipedia.description
            break;
        case "extract":
            result = wikipedia.extract
            break;       
    }

    this.StoreOutputValue(result, "result", cache)
    this.RunNextBlock("action", cache)
    
  }
}