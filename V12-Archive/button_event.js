module.exports = {
    name: "Button [Event]",

    description: "When a button was used, this event will trigger. This Block is made by @EXCORDO",

    category: "Events",

    auto_execute: true,

    inputs: [
        {
            "id": "buttonid",
            "name": "Event-ID",
            "description": "Type: Action\n\nDescription: The custom id who you provided.",
            "types": ["text"]
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
            "id": "user",
            "name": "User",
            "description": "Type: Object\n\nDescription: The component clicker [User].",
            "types": ["object"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Type: Object\n\nDescription: The component clicker [Member].",
            "types": ["object"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Action\n\nDescription: The component message [Message].",
            "types": ["object"]
        },
        {
            "id": "button",
            "name": "Component",
            "description": "Type: Action\n\nDescription: The component object [Object].",
            "types": ["object"]
        }
    ],

    async code(cache) {
        const buttonid = this.GetInputValue("buttonid", cache);

        this.events.on('clickButton', async button => {
            if (typeof buttonid === "undefined" || buttonid === button.id) {
            
            await button.clicker.fetch();
            
            this.StoreOutputValue(button.clicker.user, "user", cache);
            this.StoreOutputValue(button.clicker.member, "member", cache);
            this.StoreOutputValue(button.message, "message", cache);
            this.StoreOutputValue(button, "button", cache);
            this.RunNextBlock("action", cache);
            }
        })
    }
}
