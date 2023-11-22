module.exports = {
    name: "YouTube Music Convert",

    description: "Converts YouTube Music URL to Youtube URL",

    category: ".MJ",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "music_url",
            "name": "YT Music URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: YouTube Music URL",
            "types": ["text", "unspecified"],
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
            "id": "action2",
            "name": "Action (Error)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "url",
            "name": "YT URL",
            "description": "Type: Unspecified\n\nDescription: YouTube URL",
            "types": ["unspecified"]
        },
        {
            "id": "error",
            "name": "Error",
            "description": "Type: Unspecified\n\nDescription: Error",
            "types": ["unspecified"]
        }
    ],

    async code(cache) {
        const music_url = this.GetInputValue("music_url", cache) + '';
        const result1 = music_url.includes("music.");

        if (result1) {
            const result2 = music_url.split("music.")[1];
            const step1 = result2.includes("&feature=share")
            if (step1) {
                const value = result2.split("&feature=share")[0];
                this.StoreOutputValue("https://" + value, "url", cache);
                this.RunNextBlock("action", cache);
            } else {
                this.StoreOutputValue("https://" + result2, "url", cache);
                this.RunNextBlock("action", cache);
            }           
          } else {
                this.StoreOutputValue(music_url, "url", cache)
                this.RunNextBlock("action", cache);
                this.StoreOutputValue("Not valid YT Music URL", "error", cache);
                this.RunNextBlock("action2", cache)} 
    }
}