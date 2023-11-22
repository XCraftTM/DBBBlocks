module.exports = {
    name: "Get Reddit Post",

    description: "Get Reddit post.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "name",
            "name": "Reddit Channel Name",
            "description": "Example: https://www.reddit.com/r/GameDealsFree/ = GameDealsFree",
            "types": ["text"]
        }
    ],

    options: [
        {
            "id": "input",
            "name": "Options:",
            "description": "sortType - New Post or Hot Post",
            "type": "SELECT",
            "options": {
                "A": "New Post",
                "B": "Hot Post"
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
            "id": "result",
            "name": "Value",
            "description": "Type: Unspecified\n\nDescription: The value of the data.",
            "types": ["list"]
        }
    ],

   async code(cache) {
        const RedditClient = await this.require('reddit-simple-client');
        const name = this.GetInputValue("name", cache)
        const input = this.GetOptionValue("input", cache)

        let r
        switch(input){
            case "A":
                r = await RedditClient.getPostsFromSubreddit(1, name, "new")
                break;
            case "B":
                r = await RedditClient.getPostsFromSubreddit(1, name, "hot")
                break;
 
        }

  
        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }
}