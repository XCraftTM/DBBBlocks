module.exports = {
    name: "Get Random Reddit-Memes",

    description: "Random Meme.",

    category: "Funny Stuff",

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
            "description": "The country codes supported at the moment are en, es, fr, ru, de, it.",
            "type": "SELECT",
            "options": {
                "A": "Get a random meme",
                "B": "Get a random meme from a SubReddit",
                "C": "Get country based random meme (Country-Code)",
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
            "types": ["object"]
        }
    ],

    async code(cache) {
        const { getRandomMeme, getLocalRandomMeme } = await this.require('@blad3mak3r/reddit-memes');
        const name = this.GetInputValue("name", cache)
        const input = this.GetOptionValue("input", cache)

        let result
        switch (input) {
            case "A":
                result = await getRandomMeme()
                break;
            case "B":
                result = await getRandomMeme(name)
                break;
            case "C":
                result = await getLocalRandomMeme(name)
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
}