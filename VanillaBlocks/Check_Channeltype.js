module.exports = {
    name: "Check Channel Type",

    description: "Check the channel type information.",

    category: "Channel Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "channel",
            "name": "Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The voice channel to get the information.",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "channel_info",
            "name": "Channel Info",
            "description": "Description: The channel type information to get.",
            "type": "SELECT",
            "options": {
                1: "Text Channel",
                2: "DM Channel",
                3: "Voice Channel",
                4: "Category Channel",
                5: "Announcement Channel",
                6: "Forum Channel"
            }
        }
    ],

    outputs: [
        {
            "id": "action1",
            "name": "Action (If True)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If False)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
    ],

    async code(cache) {
        const channelguild = this.GetInputValue("channel", cache);
        const channel_info = parseInt(this.GetOptionValue("channel_info", cache));

        let result;
        switch(channel_info) {
            case 1:
                result = channelguild.type == 0;
                break;
            case 2:
                result = channelguild.type == 1;
                break;
            case 3:
                result = channelguild.type == 2;
                break;
            case 4:
                result = channelguild.type == 4;
                break;
            case 5:
                result = channelguild.type == 5;
                break;
            case 6:
                result = channelguild.type == 15;
                break;
        }

        this.RunNextBlock(result ? "action1" : "action2", cache);
        
    }
}