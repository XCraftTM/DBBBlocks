module.exports = {
    name: "Member Leave Voice Channel [Event]",

    description: "When a member leaves voice channel this block executes",

    category: ".Daily's",

    auto_execute: true,

    inputs: [],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "vc",
            "name": "Voice Channel",
            "description": "The Voice channel member joined",
            "types": ["object"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "The Guild that the member is in.",
            "types": ["object"]
        },
        {
            "id": "user",
            "name": "User",
            "description": "The member but in user form.",
            "types": ["object"]
        },
        {
            "id": "memb",
            "name": "Member",
            "description": "The member yeah.",
            "types": ["object"]
        }
    ],

    code(cache) {
        this.events.on("voiceStateUpdate", (oldState, newState) => {
            
            if(newState.channel === null || newState.channel !== oldState.channel && oldState.channel !== null) {

                const member1 = newState.member;
                const user1 = newState.member.user;
                const guild = newState.member.guild;
                const voice = oldState.channel;
    
                this.StoreOutputValue(member1, "memb", cache);
                this.StoreOutputValue(user1, "user", cache);
                this.StoreOutputValue(guild, "server", cache);
                this.StoreOutputValue(voice, "vc", cache);
                this.RunNextBlock("action", cache);

            }
        
        });
    }
}