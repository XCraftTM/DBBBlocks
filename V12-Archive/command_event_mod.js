module.exports = {
    name: "Command [Event] MOD",

    description: "When an user types this bot command, this event will trigger.",

    category: ".Panso",

    auto_execute: true,

    inputs: [
        {
            "id": "command_name",
            "name": "Command Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name the user needs to type after typing the bot prefix to trigger this bot command (i.e. <Prefix><Command Name>, in other words, \"!myCommand\").",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "custom_prefix",
            "name": "Custom Prefix",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The custom prefix for this command if you do not want to use the main prefix or the server prefix. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
    ],

    options: [
        {
            "id": "command_restriction",
            "name": "Command Restriction",
            "description": "Description: The user will not be able to use this command if a command restriction applies.",
            "type": "SELECT",
            "options": {
                "none": "None",
                "server_only": "Server Only",
                "server_owner_only": "Server Owner Only",
                "bot_owner_only": "Bot Owner Only",
                "dms_only": "DMs Only"
            }
        },
        {
            "id": "required_member_permission",
            "name": "Required Member Permission",
            "description": "Description: The required member permission to use this command.",
            "type": "SELECT",
            "options": {
                "none": "None",
                "administrator": "Administrator",
                "create_instant_invite": "Create Instant Invite",
                "kick_members": "Kick Members",
                "ban_members": "Ban Members",
                "manage_channels": "Manage Channels",
                "manage_guild": "Manage Server",
                "add_reactions": "Add Reactions",
                "view_audit_log": "View Audit Log",
                "priority_speaker": "Priority Speaker",
                "stream": "Video",
                "view_channel": "View Text/Voice Channel(s)",
                "send_messages": "Send Messages",
                "send_tts_messages": "Send TTS Messages",
                "manage_messages": "Manage Messages",
                "embed_links": "Embed Links",
                "attach_files": "Attach Files",
                "read_message_history": "Read Message History",
                "mention_everyone": "Mention Everyone",
                "use_external_emojis": "Use External Emojis",
                "view_guild_insights": "View Server Insights",
                "connect": "Connect (Connect to a voice channel)",
                "speak": "Speak (Speak in a voice channel)",
                "mute_members": "Mute Members (Mute members across all voice channels)",
                "deafen_members": "Deafen Members (Deafen members across all voice channels)",
                "move_members": "Move Members (Move members between voice channels)",
                "use_vad": "Use Voice Activity",
                "change_nickname": "Change Nickname",
                "manage_nicknames": "Manage Nicknames (Change other members' nicknames)",
                "manage_roles": "Manage Roles",
                "manage_webhooks": "Manage Webhooks",
                "manage_emojis": "Manage Emojis"
            }
        },
        {
            "id": "case_sensitive",
            "name": "Case Sensitive",
            "description": "Description: If \"No\", for example, \"play\", \"PLAY\" and \"PlAy\" are the same command name. This is useful if you want commands with the same name but with different case variants.",
            "type": "SELECT",
            "options": {
                "no": "No",
                "yes": "Yes"
            }
        },
    ],

    outputs: [
        {
            "id": "action1",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks if there is no error message.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (Error)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if there is any error message.",
            "types": ["action"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Object\n\nDescription: The command author's message.",
            "types": ["object"]
        },
        {
            "id": "channel",
            "name": "Channel",
            "description": "Type: Object\n\nDescription: The command author's message channel.",
            "types": ["object"]
        },
        {
            "id": "user",
            "name": "User",
            "description": "Type: Object\n\nDescription: The command author.",
            "types": ["object"]
        },
        {
            "id": "error_message",
            "name": "Error Message",
            "description": "Type: Object\n\nDescription: The error message if the user is still in slowmode, does not have the required permission or other restriction violated.\n\nPossible Values: \"Command Restriction\", \"User Permission\", \"User Slowmode\", \"Nothing\".",
            "types": ["text"]
        }
    ],

    code(cache) {
        let command_name = this.GetInputValue("command_name", cache);
        const custom_prefix = this.GetInputValue("custom_prefix", cache, true);
        const command_restriction = this.GetOptionValue("command_restriction", cache) + "";
        const required_member_permission = (this.GetOptionValue("required_member_permission", cache) + "").toUpperCase();
        const case_sensitive = this.GetOptionValue("case_sensitive", cache) == "yes";

        command_name = typeof command_name == "string" ? command_name : "";
        if(case_sensitive) command_name = command_name.toLowerCase();

        const DBB = this.getDBB();

        const {prefixes, owners} = DBB.Data.data.dbb;

        let prefix = prefixes.main;
        if(custom_prefix) prefix = custom_prefix.value + "";

        function CheckCommandRestriction(msg) {
            switch(command_restriction) {
                default: // "none"
                    return [true, msg.member ? CheckPermission(msg.member) : true];
                case "server_only":
                    return [Boolean(msg.guild), CheckPermission(msg.member)];
                case "server_owner_only":
                    return [msg.guild && msg.guild.owner.id == msg.member.id, true];
                case "bot_owner_only":
                    return [owners.includes(msg.author.id), true];
                case "dms_only":
                    return [msg.channel.type == "dm", true];
            }
        }

        function CheckPermission(member) {
            if(required_member_permission == "NONE") return true;
            else if(!member) return false;
            return member.hasPermission(required_member_permission);
        }


        const EndBlock = (msg, reason, action) => {
            this.StoreOutputValue(msg, "message", cache);
            this.StoreOutputValue(msg.channel, "channel", cache);
            this.StoreOutputValue(msg.author, "user", cache);
            this.StoreOutputValue(reason, "error_message", cache);
            this.RunNextBlock(action ? "action1" : "action2", cache);
        }

        this.events.on("message", msg => {
            if(msg.author.bot) return;

                const alias = this.getData("command_alias", msg.guild.id, "server") || {command_name: []}
    
                const _prefix = !custom_prefix && msg.guild && msg.guild.id in prefixes.servers ? prefixes.servers[msg.guild.id] : prefix;
    
                let content = msg.content.trim();
    
                if(case_sensitive) content = content.toLowerCase();
    
                if(content.startsWith(_prefix + command_name) || alias[command_name].filter(item => content.startsWith(_prefix + item))[0]){
                    var disiabled_list = this.getData("disiabled_commands", msg.guild.id, "server") || []
                    if (disiabled_list.includes(command_name)){EndBlock(msg, "Command is disiabled", false)}
                    else{
                        const restriction = CheckCommandRestriction(msg);
            
                        if(!restriction[0]) EndBlock(msg, "Command Restriction");
                        else if(!restriction[1]) EndBlock(msg, "Member Permission");
                        else EndBlock(msg, "Nothing", true);
                    }

                    }
            
  

        });
    }
}