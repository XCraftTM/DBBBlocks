module.exports = {
    name: "SlowMode",

    description: "SlowMode Block.",

    category: ".Panso",
  
      inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
          "id": "cooldown",
          "name": "Cooldown in Milliseconds",
          "description": "The slowmode cooldown in milliseconds",
          "types": ["number", "unspecified", "null"],
          "required": true
        },
        {
            "id": "id",
            "name": "SlowMode ID",
            "description": "A custom ID for it not to cause bugs with other slowmode blocks",
            "types": ["text", "unspecified"],
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
            "id": "action2",
            "name": "Action (Failure)",
            "description": "Type: Text\n\nDescription: The time for the block to finish it's cooldown.",
            "types": ["action"]
        }
    ],
  
  code(cache) {
    const cooldown = parseFloat(this.GetInputValue("cooldown", cache));
    const id = this.GetInputValue("id", cache) + "-slowmode"

    if(this.getData(id)){
        this.RunNextBlock("action2", cache)
    }
    else{
        this.setData(id, true)
        console.log()
        this.RunNextBlock("action", cache)
        setTimeout(() => {
            this.setData(id, false)
        }, cooldown)
    }

  }
}