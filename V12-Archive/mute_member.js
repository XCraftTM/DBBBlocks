 module.exports = {
    name: "Mute/Unmute Member",

    description: "Mutes or unmutes a member",

    category: ".Javs",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "types": ["action"]           
        },
        {
            "id": "member",
            "name": "Member",
            "types": ["object", "unspecified"],
            "required": true
        },
		{
            "id": "muteunmute",
            "name": "Mute Value",
            "description": " True = Mute Member ||| False = Unmute Member",
            "types": ["boolean"],
			"required": true
        }
    ],

    options: [

    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const member = this.GetInputValue("member", cache);
        const muteunmute = Boolean(this.GetInputValue("muteunmute", cache));
		
        member.voice.setMute(muteunmute);

        this.RunNextBlock('action', cache);
    }
};