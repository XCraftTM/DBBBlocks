
module.exports = {
    name: "Get User Badges",

    description: "Gets the badges of a user",

    category: "User Stuff",

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
            "description": "youtube/poker/chess/fishing/betrayel/custom",
            "types": ["object", "unspecified"],
			"required": true
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
        {
            "id": "actionnobadge",
            "name": "Action (If no badges)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when user has no badges",
            "types": ["action"]
        },
        {
            "id": "output",
            "name": "Badges",
            "description": "Type: Action\n\nDescription: The discordtogether link",
            "types": ["object"]
        }
    ],




    async code(cache) {
		const badges = await this.require("discord-badges");
        const user = this.GetInputValue("user", cache);
		
    badges
      .badges(user) // Send user to the package
      .then((response) => {
        // return the user badges
        let result = "";
        for (let i = 0; i < response.length; i++) {
          result += `**${response[i].name} :** ${response[i].url}\n`;
        }
               this.StoreOutputValue(response, "output", cache); 
		       this.RunNextBlock("action", cache)
      })
      .catch((e) => {
            this.RunNextBlock("actionnobadge", cache);
      });
  }
}

		

