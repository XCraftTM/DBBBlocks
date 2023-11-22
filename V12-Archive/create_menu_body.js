module.exports = {
    name: "Create Menu",

    description: "Create a message menu. This Block is made by @EXCORDO",

    category: "Component Stuff",
	
    inputs: [
		{
			"id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes this block.",
            "types": ["action"]
		},
        {
            "id": "setID",
            "name": "Event-ID",
            "description": "Type: Text\n\nDescription: The ID of the menu (for the Events).",
            "types": ["text", "unspecified"],
            "required": true
        },
		{
            "id": "setPlaceholder",
            "name": "Placeholder",
            "description": "Type: Text\n\nDescription: The placeholder of the menu.",
            "types": ["text", "unspecified"],
            "required": true
        },
		{
		
            "id": "setMaxValues",
            "name": "Max Value",
            "description": "Type: Text\n\nDescription: The max value of the menu. Depends on the number of options that you want to add. If you have 6 Options the max value can be six or less.",
            "types": ["number", "unspecified"],
            "required": true
        },
		{
            "id": "setMinValues",
            "name": "Min Value",
            "description": "Type: Text\n\nDescription: The min value of the menu. Depends on the number of options that you want to add.",
            "types": ["number", "unspecified"],
            "required": true
        },
		{
            "id": "addOptions",
            "name": "Options",
            "description": "Type: Text\n\nDescription: The options for the menu.",
            "types": ["list", "unspecified"],
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
            "id": "menu",
            "name": "Component",
            "description": "Type: Text\n\nDescription: The finished menu.",
            "types": ["object"]
        },
    ],

    async code(cache) {
		const { MessageMenu } = await this.require('discord-buttons');
		
        let menu = new MessageMenu();
        ["setID", "setPlaceholder", "setMaxValues", "setMinValues", "addOptions"].forEach(setting => {
            let toSET = this.GetInputValue(setting, cache);
            if(typeof toSET === "undefined") return

            menu[setting](toSET);
        });

        this.StoreOutputValue(menu, "menu", cache)
        this.RunNextBlock("action", cache);       
    }
}