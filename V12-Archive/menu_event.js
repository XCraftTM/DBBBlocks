module.exports = {
    name: "Menu [Event]",

    description: "When a menu was used, this event will trigger. This Block is made by @EXCORDO",

    category: "Events",

    auto_execute: true,

    inputs: [
        {
            "id": "menuid",
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
            "description": "Type: Object\n\nDescription: The menu clicker [User].",
            "types": ["object"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Type: Object\n\nDescription: The menu clicker [Member].",
            "types": ["object"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Action\n\nDescription: The menu message [Message].",
            "types": ["object"]
        },
        {
            "id": "menu",
            "name": "Component",
            "description": "Type: Action\n\nDescription: The menu component [Object].",
            "types": ["object"]
        }
    ],

    async code(cache) {
        const menuid = this.GetInputValue("menuid", cache);

        this.events.on('clickMenu', async menu => {
            if (typeof menuid === "undefined" || menuid === menu.id) {

            await menu.clicker.fetch();
            
            this.StoreOutputValue(menu.clicker.user, "user", cache);
            this.StoreOutputValue(menu.clicker.member, "member", cache);
            this.StoreOutputValue(menu.message, "message", cache);
            this.StoreOutputValue(menu, "menu", cache);
            this.RunNextBlock("action", cache);
            }
        })
    }
}
