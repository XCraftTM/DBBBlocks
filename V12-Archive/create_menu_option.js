module.exports = {
    name: "Create Option",

    description: "Create a menu option. This Block is made by @EXCORDO",

    category: "Component Stuff",
	
    inputs: [
		{
			"id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes this block.",
            "types": ["action"]
		},
		{
		
            "id": "setLabel",
            "name": "Label",
            "description": "Type: Text\n\nDescription: The label of the option.",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "setEmoji",
            "name": "Emoji",
            "description": "Type: Text\n\nDescription: The emoji of the option.",
            "types": ["text", "unspecified"],
            "required": true
        },
		{
            "id": "setValue",
            "name": "Value",
            "description": "Type: Text\n\nDescription: The value of the option.",
            "types": ["text", "unspecified"],
            "required": true
        },
		{
		
            "id": "setDescription",
            "name": "Description",
            "description": "Type: Text\n\nDescription: The description of the option.",
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
            "id": "option",
            "name": "Option",
            "description": "Type: Text\n\nDescription: The finished option.",
            "types": ["object"]
        },
    ],

    async code(cache) {
		const { MessageMenuOption } = await this.require('discord-buttons');
		
        let option = new MessageMenuOption();
        ["setLabel", "setEmoji", "setValue", "setDescription"].forEach(setting => {
            let toSET = this.GetInputValue(setting, cache);
            if(typeof toSET === "undefined") return

            option[setting](toSET);
        });

        this.StoreOutputValue(option, "option", cache)
        this.RunNextBlock("action", cache);       
    }
}