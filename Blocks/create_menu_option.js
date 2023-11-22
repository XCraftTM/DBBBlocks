module.exports = {
    name: "Create Selection Menu Option",
    description: "Create a selection menu option.",
    category: "Menu",
    inputs: [
        {
            id: "action",
            name: "Action",
            description: "Type: Action\n\nDescription: Executes this block.",
            types: ["action"]
        }
    ],
    options: [
        {
            id: "label",
            name: "Label",
            description: "Description: The Label of the Button.",
            type: "TEXT"
        },
		{
            id: "description",
            name: "Description",
            description: "Description: The ID or URL of the Button.",
            type: "TEXT"
        },
		{
            id: "value",
            name: "Value",
            description: "Description: The value of the menu component.",
            type: "TEXT"
        },
        {
            id: "emoji",
            name: "Emoji",
            description: "Description: The Emoji of the option.",
            type: "TEXT"
        }
    ],
    outputs: [
        {
            id: "action",
            name: "Action",
            description: "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            types: ["action"]
        },
        {
            id: "menu",
            name: "Option",
            description: "Description: The Menu object output.",
            types: ["object"]
        },
    ],
    async code(cache) {

        const label = this.GetOptionValue("label", cache);
        const description = this.GetOptionValue("description", cache);
        const value = this.GetOptionValue("value", cache);
        const emoji = this.GetOptionValue("emoji", cache);

        const menu_object = {
            label,
            description,
            value,
            emoji: emoji
        }
         
        if(!emoji) delete menu_object.emoji;
         
        const menu = [menu_object];

        this.StoreOutputValue(menu, "menu", cache);
        this.RunNextBlock("action", cache);                
    }
}

