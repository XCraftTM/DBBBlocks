module.exports = {
    name: "Publish/Crosspost message",

    description: "Publish/Crosspost a message in a news/announcment chanel",

    category: "Message Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message to edit.",
            "types": ["object", "unspecified"],
            "required": true 
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action success",
            "description": "Type: Action \n \n(If message got send in an announcment channel)",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action error",
            "description": "Type: Action \n \n(If message got send in a text channel)",
            "types": ["action"]
        }
    ],

    async code(cache) {
     const message = this.GetInputValue("message", cache);

     if(message.channel.type === "news"){
        await message.crosspost()
        
        this.RunNextBlock("action", cache);
     }else{
        this.RunNextBlock("action2", cache);
     }
     
    
    }
}