module.exports = {
    name: "Bot Initialization [Event]",

    description: "When your bot becomes ready to start working, this event will trigger.",

    category: "Events",

    auto_execute: true,

    inputs: [],

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
        setTimeout(() => {
            this.RunNextBlock("action", cache);
        }, 3000);
    }
}