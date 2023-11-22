module.exports = {
    name: "Check voice channel size",

    description: "Check the voice channel size.",

    category: "Channel Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "voice_channel",
            "name": "Voice Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The voice channel to get the information.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "number",
            "name": "Number",
            "description": "Description: The number to set.",
            "types": ["number", "undefined", "text", "null", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action if True",
            "description": "Type: Runs the next block.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action if False",
            "description": "Type: Number\n\nDescription: The number.",
            "types": ["action"]
        },
        {
            "id": "outputnumber",
            "name": "Number",
            "description": "Description: The Nummer who is actually in the voice channel.",
            "types": ["number"]
        }
    ],

    async code(cache) {
        const voice_channel = this.GetInputValue("voice_channel", cache);
        const number = this.GetInputValue("number", cache);

        if(parseInt(voice_channel.members.size) == parseInt(number)) {
            this.StoreOutputValue(number, "outputnumber", cache);
            this.RunNextBlock("action1", cache);
        } else {
            this.StoreOutputValue(number, "outputnumber", cache);
            this.RunNextBlock("action2", cache);
        }
    }
}