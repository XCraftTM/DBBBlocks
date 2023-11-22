module.exports = {
    name: "True Channel",
  
    description: "Compares if the channel input is equal to selected option and runs next block if true, otherwise will stop\n\nHover mouse to description node for more info",
  
    category: "Boolean Stuff",
  
    inputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
        "types": ["action"],
        "required": true
      },
      {
        "id": "channel",
        "name": "Channel Input",
        "description": "Acceptable Types: Object\n\nDescription: The text channel to filter.",
        "types": ["object", "unspecified", "text"],
        "required": true
      }
    ],
  
    options: [
      {
        "id": "type",
        "name": "Channel Type",
        "description": "Description: The type of channel to filter.",
        "type": "SELECT",
        "options": {
            "SUIJI": "NONE",     
            "text": "TEXT CHANNEL",
            "dm": "DM CHANNEL",
            "voice": "VOICE CHANNEL",
            "category": "CATEGORY",
            "news": "ANNOUNCEMENTS"
        }
    }
    ],
  
    outputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
        "types": ["action"]
      },
  
     {
      "id": "boolean",
      "name": "Boolean",
      "description": "Type: Boolean.",
      "types": ["boolean"]
    },
    ],
  
    code(cache) {
        const channel = this.GetInputValue("channel", cache).type;
        const type = this.GetOptionValue("type", cache);
        if (channel == type) {this.StoreOutputValue(true, "boolean", cache)}
        else{this.StoreOutputValue(false, "boolean", cache)}

        this.RunNextBlock("action1", cache)
    }
  }