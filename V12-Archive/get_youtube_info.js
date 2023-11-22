module.exports = {
    name: "Get YouTube Info ALT",

    description: "Alternative Get YouTube video information, thumbnail, title, duration, channel name, channel url, keywords and the video URL.",

    category: ".MJ",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "url",
            "name": "URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: input URL",
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
            "id": "title",
            "name": "Title",
            "description": "Type: Text\n\nDescription: The title obtained from the YouTube video.",
            "types": ["text", "unspecified"]
        },
        {
            "id": "description",
            "name": "Description",
            "description": "Type: Text\n\nDescription: The description obtained from the YouTube video.",
            "types": ["text", "unspecified"]
        },
        {
            "id": "duration",
            "name": "Duration",
            "description": "Type: Number\n\nDescription: The duration obtained from the YouTube video.",
            "types": ["number"]
        },
        {
            "id": "views",
            "name": "Views",
            "description": "Type: Number\n\nDescription: The views obtained from the YouTube video.",
            "types": ["number"]
        },
        {
            "id": "thumbnail",
            "name": "Thumbnail",
            "description": "Type: Text\n\nDescription: The thumbnail obtained from the YouTube video.",
            "types": ["text", "unspecified"]
        },
        {
            "id": "url",
            "name": "URL",
            "description": "Type: Text\n\nDescription: The video url obtained from the YouTube video.",
            "types": ["text", "unspecified"]
        },
        {
            "id": "channel",
            "name": "Channel name",
            "description": "Type: Text\n\nDescription: The channel name obtained from the YouTube video.",
            "types": ["text", "unspecified"]
        },
        {
            "id": "channelurl",
            "name": "Channel URL",
            "description": "Type: Text\n\nDescription: The channel name obtained from the YouTube video.",
            "types": ["text", "unspecified"]
        },
        {
            "id": "keywords",
            "name": "Keywords",
            "description": "Type: Text\n\nDescription: The channel url obtained from the YouTube video.",
            "types": ["list", "unspecified"]
        }
    ],

    async code(cache) {
        const input = this.GetInputValue("url", cache) + "";
        const { getVideo } = require('@fabricio-191/youtube');

        await getVideo(input).then((res) => {   
            const description = JSON.stringify(res.description);         
            const trim = description.substring(0, 100);        
            this.StoreOutputValue(res.name, "title", cache);
            this.StoreOutputValue(trim, "description", cache);
            this.StoreOutputValue(res.duration.number, "duration", cache);
            this.StoreOutputValue(res.views.number, "views", cache);
            this.StoreOutputValue(res.thumbnails[1].url, "thumbnail", cache);
            this.StoreOutputValue(res.URL, "url", cache);
            this.StoreOutputValue(res.owner.name, "channel", cache);   
            this.StoreOutputValue(res.owner.URL, "channelurl", cache);
            this.StoreOutputValue(res.keywords, "keywords", cache);    
            this.RunNextBlock("action", cache);
        }).catch((error) => console.error(error));
    }
}
