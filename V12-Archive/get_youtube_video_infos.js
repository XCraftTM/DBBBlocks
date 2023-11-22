module.exports = {
    name: "Get YouTube Video Infos",

    description: "Gets the YouTube video information, thumbnail, title, duration, channel name, channel url, verified or not and the video URL.",

    category: ".Amnezia Blocks",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
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
            "id": "views",
            "name": "Views",
            "description": "Type: Number\n\nDescription: The views obtained from the YouTube video.",
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
            "id": "channelverified",
            "name": "Channel verified",
            "description": "Type: Text\n\nDescription: The channel url obtained from the YouTube video.",
            "types": ["boolean"]
        }
    ],

    async code(cache) {
        const search_value = this.GetInputValue("search_value", cache) + "";
        const video_info = parseInt(this.GetOptionValue("video_info", cache));
        const ytsr = await this.require("ytsr");
        const res = await ytsr(search_value, {limit: 1});

        const video = res.items[0];

        var vidtitle = video.title;

        var viddescription = video.description;

        if (video.duration === undefined) {
            var vidduration = 0
        } else {
        var duration = video.duration.split(":").reverse();
        var fakeDate = new Date(0);
        fakeDate.setSeconds(duration[0]);
        fakeDate.setMinutes(duration[1]);
        fakeDate.setHours(duration[2]);
        var vidduration = fakeDate.getTime();
        }

        var vidviews = video.views;

        var vidthumbnail = video.url.replace("https://www.youtube.com/watch?v=", "https://img.youtube.com/vi/") + "/maxresdefault.jpg"

        var vidurl = video.url;

        var vidchannel = video.author.name;

        var vidchannelurl = video.author.ref;

        var vidchannelverified = video.author.verified;

        this.StoreOutputValue(vidtitle, "title", cache);
        this.StoreOutputValue(viddescription, "description", cache);
        this.StoreOutputValue(vidduration, "duration", cache);
        this.StoreOutputValue(vidviews, "views", cache);
        this.StoreOutputValue(vidthumbnail, "thumbnail", cache);
        this.StoreOutputValue(vidurl, "url", cache);
        this.StoreOutputValue(vidchannel, "channel", cache);
        this.StoreOutputValue(vidchannelurl, "channelurl", cache);
        this.StoreOutputValue(vidchannelverified, "channelverified", cache);
        this.RunNextBlock("action", cache);
    }
}
