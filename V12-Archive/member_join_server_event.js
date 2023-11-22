module.exports = {
    name: "Member Join Server [Event]",

    description: "When a member joins a server, this event will trigger. MODIFIED BY @JU & @EXCORDO",

    category: "Events",

    auto_execute: true,

	init(DBB){
		DBB.invites = {
			addInvite: (serverid, invite) => {
				DBB.invites.list[serverid][invite.code] = invite.uses
			},
			list: {}
		};
		const guilds = DBB.DiscordJS.client.guilds;
        guilds.cache.forEach(async unguild => {
            const guild = await unguild.fetch()
            DBB.invites.list[guild.id] = {}
            const invites = await guild.fetchInvites()
            invites.each(invite => DBB.invites.list[guild.id][invite.code] = invite.uses)
        });
    },

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
            "id": "member",
            "name": "Member",
            "description": "Type: Object\n\nDescription: The member who joined the server.",
            "types": ["object"]
        },
        {
            "id": "invite",
            "name": "Invite",
            "description": "Type: Object\n\nDescription: The invite which the member used to joined the server.",
            "types": ["object"]
        }
    ],

    code(cache) {
        this.events.on("guildMemberAdd", async member => {
            const guild = member.guild
            const invites = await guild.fetchInvites()
            const inviteCache = this.getDBB().invites.list[guild.id]
            const diff = invites.filter((invite) => inviteCache[invite.code] !== invite.uses)
            
            diff.each((invite) => this.getDBB().invites.addInvite(guild.id, invite))

            if(diff.size !== 1){
                const invite = undefined
                this.StoreOutputValue(invite, "invite", cache);
                this.StoreOutputValue(member, "member", cache);
                this.RunNextBlock("action", cache);
                return;
            }
            const invite = diff.first();

            this.StoreOutputValue(invite, "invite", cache);
            this.StoreOutputValue(member, "member", cache);
            this.RunNextBlock("action", cache);
        });
    }
}