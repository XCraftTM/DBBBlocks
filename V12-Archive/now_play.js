module.exports = {
    name: "Queue URL",

    description: "Gets the bot audio information from the server.\n\nNOTE: Your bot needs to be on a voice channel and playing any audio for this block to work well.",

    category: "Audio Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to get the bot audio information.",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],
    options: [
        
    {
        "id": "audio_info",
        "name": "Audio Info",
        "description": "Description: The bot audio information to get from the server.",
        "type": "SELECT",
        "options": {
            1: "Now playing URL [Text]",
            2: "Next URL [Text]",
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
            "name": "Result",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the bot audio.",
            "types": ["text"]
        }
    ],
   

    async code(cache) {
        const server = this.GetInputValue("server", cache);
        const audio_info = parseInt(this.GetOptionValue("audio_info", cache));
        const serverQueue = this.getServerQueue(server.id);

        if(serverQueue) {
            switch(audio_info) {
                case 1:
                    var first = serverQueue.queue[0];
                    result = first && first.url;
                    break;
                case 2:
                    var first = serverQueue.queue[1];
                    result = first && first.url;
                    break;
            }
        }
    
        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
}