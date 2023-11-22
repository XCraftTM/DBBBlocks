module.exports = {
    name: "Auto Join/Leave Voice Channel [Event]",
    description: "Auto Join or Leave Voice Channel by Sheiyla",
    category: "Audio Stuff",
    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "check_member",
            "name": "Member Check",
            "description": "Check if a member is already in voice",
            "type": "SELECT",
            "options": {
                "true": "True",
                "false": "False"
            }
        },
        {
            "id": "channelid",
            "name": "Channel ID",
            "description": "Enter the voice room id",
            "type": "TEXT"
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Type: Object\n\nDescription: The server found if possible.",
            "types": ["object"]
        }
    ],

    async code(cache) 
    {
        this.events.on("voiceStateUpdate", (LeaveState, EnterState) => 
        {
            const EnterChannel = EnterState.channel;
            const LeaveChannel = LeaveState.channel;	
            const channelid    = this.GetOptionValue("channelid", cache);
            if(EnterState.channelID != null) 
            {
                if(EnterState.channelID === channelid) 
                {
                    if(this.client.guilds.cache.get(EnterChannel.guild.id).members.cache.find(c => c.id === EnterState.id).user.bot) return;
                    this.client.channels.cache.get(channelid).join().then(member => 
                    {
                        if(!member.client.user.bot) return;
                        this.StoreOutputValue(EnterChannel.guild.id, "server", cache);
                        this.RunNextBlock("action", cache);
                    });
                }
            }
            if(LeaveState.channelID != null) 
            {
                if(LeaveState.channelID === channelid) 
                {
                    if(LeaveChannel.guild.members.cache.get(LeaveState.id).user.bot) return;
                    const leaveC = this.client.channels.cache.get(channelid);
                    switch (Boolean(this.GetOptionValue("check_member", cache))) {
                        case true:
                            if(leaveC.members.size == 0 || leaveC.members.size == 1) leaveC.leave();
                          break;
                        case false:
                            leaveC.leave();
                          break;
                      }
                }
            }
        });
    }
}