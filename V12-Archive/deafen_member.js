 module.exports = {
    name: "Deafen/Undeafen Member",

    description: "Deafens or undeafens a member",

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
            "id": "defundef",
            "name": "Deafen Value",
            "description": " True = Deafen Member ||| False = Undeafen Member",
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
        const defundef = Boolean(this.GetInputValue("defundef", cache));
		
        member.voice.setDeaf(defundef);

        this.RunNextBlock('action', cache);
    }
};