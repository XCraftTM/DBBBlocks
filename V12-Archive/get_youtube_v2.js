module.exports = {
    name: "Get YouTube V2",

    description: "Gets the YouTube video information.",

    category: ".MJ",

    inputs: [{
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "search_value",
            "name": "Search Value",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The value to search for the video.",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [],

    outputs: [{
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "title",
            "name": "Title",
            "description": "Type: Text\n\nDescription: The title obtained from the YouTube video.",
            "types": ["text"]
        },
        {
            "id": "description",
            "name": "Description",
            "description": "Type: Text\n\nDescription: The description obtained from the YouTube video.",
            "types": ["text"]
        },
        {
            "id": "duration",
            "name": "Duration",
            "description": "Type: Number\n\nDescription: The duration obtained from the YouTube video.",
            "types": ["number"]
        },
        {
            "id": "thumbnail",
            "name": "Thumbnail",
            "description": "Type: Text\n\nDescription: The thumbnail obtained from the YouTube video.",
            "types": ["text"]
        },
        {
            "id": "url",
            "name": "Url",
            "description": "Type: Text\n\nDescription: The video url obtained from the YouTube video.",
            "types": ["text"]
        },
        {
            "id": "channel",
            "name": "Channel name",
            "description": "Type: Text\n\nDescription: The channel name obtained from the YouTube video.",
            "types": ["text"]
        },
        {
            "id": "channelurl",
            "name": "Channel url",
            "description": "Type: Text\n\nDescription: The channel url obtained from the YouTube video.",
            "types": ["text"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Type: Text\n\nDescription: 1 if true, 2 if false",
            "types": ["text"]
        },
    ],

    async code(cache) {
        const process = this.GetInputValue("search_value", cache) + "";
        let cheq = process.includes("watch?v=");
        let search_value;
        if (!cheq) {
            search_value = "https://www.youtube.com/watch?v=" + process;
        } 
        else {
            search_value = process.split("https://")[1];
        }
        
        const ytsr = await this.require("ytsr");
        const res = await ytsr(search_value, { limit: "2"});

        let video;
        let value;

        if (res.items.length) {
            const foundobj = res.items["1" - 1];
            //CONTROLLER//
            const foundval = foundobj.title + foundobj.url;
            let check = foundval.includes(search_value);
            let result;
            let val;

            if (!check) {
                result = res.items["1"];
                val = "2";
            }
            else {
                result = foundobj;
                val = "1";
            }
            video = result;
            value = val;
        }
        let thumburl;
        const thumburlcheck = video.url.includes("www.");
        if (thumburlcheck) { 
            const temp1 = video.url.split("www.")[1]; 
            thumburl = "https://" + temp1;
        }
        else {
            thumburl = video.url;
        }
        const thumbnail = thumburl.replace("youtube.com/watch?v=", "img.youtube.com/vi/") + "/maxresdefault.jpg";

        this.StoreOutputValue(video.title, "title", cache);
        this.StoreOutputValue(video.description, "description", cache);
        this.StoreOutputValue(video.url, "url", cache);
        this.StoreOutputValue(thumbnail, "thumbnail", cache);
        this.StoreOutputValue(video.author.name, "channel", cache);
        this.StoreOutputValue(video.author.url, "channelurl", cache);
        this.StoreOutputValue(value, "value", cache);
        
        this.RunNextBlock("action", cache);
    }
};