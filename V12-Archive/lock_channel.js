module.exports = {
    name: "Un/lock channel",

    description: "Unlock/Lock channel",

    category: "Channel Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "voice_channel",
            "name": "Voice Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The voice channel to edit.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "bool",
            "name": "Lock/unlock",
            "description": "True = lock || false = unlock",
            "types": ["boolean", "unspecified"],
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
        const bool = this.GetInputValue("bool", cache);
        const id = voice_channel.guild.id;
	

if (bool == true) {
	
voice_channel.overwritePermissions([
  {
	 id: id,
     deny: ['CONNECT'],
  },
], 'Needed to change permissions');

} else {
	voice_channel.overwritePermissions([
  {
	 id: id,
     allow: ['CONNECT'],
  },
], 'Needed to change permissions');
}

            this.RunNextBlock("action", cache);
        
    }
}