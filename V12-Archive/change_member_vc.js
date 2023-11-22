module.exports = {
    name: "Change Member VC",

    description: "Changes the selected members vc.",

    category: ".MOD",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The voice channel move the member to.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member to move.",
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
        }
    ],

    code(cache) {
        const voice_channel = this.GetInputValue("voice_channel", cache);
        const mem = this.GetInputValue("member", cache);

        mem.voice.setChannel(voice_channel)
        //mem.setVoiceChannel(voice_channel);
        .then(() => this.RunNextBlock("action", cache));
    }
}