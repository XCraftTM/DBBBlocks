module.exports = {
    name: "Component Defering",

    description: "Is required to end a component interation. This Block is made by @EXCORDO",

    category: "Component Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "component",
            "name": "Component",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The component which should get the response.",
            "types": ["object"],
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
            "id": "error",
            "name": "Error",
            "description": "Type: Object, List\n\nDescription: Error messsage.",
            "types": ["text"]
        }
    ],

    async code(cache) {
        const component = this.GetInputValue("component", cache);

        await component.reply.defer().catch(error => {
            this.StoreOutputValue(error.message, "error", cache);
            this.RunNextBlock("action", cache);
        });
        this.RunNextBlock("action", cache);
    }
}