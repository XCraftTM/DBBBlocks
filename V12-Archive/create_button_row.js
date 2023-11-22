module.exports = {
    name: "Create Button Row",

    description: "Creates a Row of Buttons with a max lenght of 5. This Block is made by @JU & @EXCORDO",

    category: "Component Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "buttons",
            "name": "List",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The Buttons you want to put in a ROW.",
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
            "id": "buttonrow",
            "name": "Component",
            "description": "Type: Object\n\nDescription: The button row component.",
            "types": ["object"]
        }
    ],

    async code(cache) {
        const buttons = this.GetInputValue("buttons", cache);
        
        if(buttons.length < 1) {
            console.log("No Buttons to convert...");
            
            this.StoreOutputValue(buttons, "buttonrow", cache);
            this.RunNextBlock("action", cache);

            return;
        }
        const { MessageActionRow } = await this.require('discord-buttons');

        let row = new MessageActionRow();
        row.addComponent([...buttons]);

        this.StoreOutputValue(row, "buttonrow", cache);
        this.RunNextBlock("action", cache);
    }
}