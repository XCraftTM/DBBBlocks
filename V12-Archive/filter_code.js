  module.exports = {
    name: "Filter Code v2",

    description: "Filter Code for Await Message Eeaction",

    category: ".MOD",

    inputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
        "types": ["action"]
    },
    {
        "id": "user",
        "name": "User",
        "description": "The user to listen for.",
        "types": ["object", "unspecified"]
    }
    ],

    options: [
      {
        "id": "target_type",
        "name": "Target Type",
        "description": "the user to listen for reactions",
        "type": "SELECT",
        "options": {
            0: "None",
            1: "",
            2: "Specific User (For reaction)",
            3: "Anyone (For reaction)",
            4: "",
            5: "Specific User (For message)",
            6: "Anyone (For message)"
        }
      },
      {
        "id": "emoji_input",
        "name": "Emoji",
        "description": "Ussage is: <emoji>, <emoji>, <emoji> \nYou can leave this empty if you didn't select for reactions.\nYou can put as many emojis as discord allows.\nThe user input only gets used if you selected specific user.",
        "type": "text",
        "required": true
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
        "id": "result",
        "name": "Result",
        "description": "Type: Unspecified\n\nDescription: The information obtained from the server emoji.",
        "types": ["text", "unspecified"]
    }
    ],

    code(cache) {

      const user = this.GetInputValue("user", cache);
      const emoji_input = this.GetOptionValue("emoji_input", cache).split("<").join("'<").split(">").join(">'");
      const target_type = parseInt(this.GetOptionValue("target_type", cache));
      let result = emoji_input;
      switch(target_type) {
        case 2:
          result = `[${emoji_input}].includes(reaction.emoji.toString()) && user.id == ${user.id}`; 
          break;
        case 3:
          result = `[${emoji_input}].includes(reaction.emoji.toString())`;
          break;
        case 5:
          result = `message.author.id == ${user.id}`;
          break;
        case 6:
          result = true;
          break; 
      }

      this.StoreOutputValue(result, "result", cache);
      this.RunNextBlock("action", cache);
    }
}