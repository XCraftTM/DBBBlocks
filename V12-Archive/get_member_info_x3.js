module.exports = {
    name: "Get Member Info x3",

    description: "Gets the Member information [x3]. by NoPro200",

    category: ".NoPro200",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member to get the information.",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "member_info1",
            "name": "Member Info 1",
            "description": "Description: The member information to get.",
            "type": "SELECT",
            "options": {
                1: "Is Member Bannable By The Bot? [Boolean]",
                2: "Member Color Role [Role]",
                3: "Is Member Deafened In Any Way? [Boolean]",
                4: "Has Member Been Removed From The Server? [Boolean]",
                5: "Member Display Base 10 Color [Text]",
                6: "Member Display Hex Color [Text]",
                7: "Member Display Name [Text]",
                8: "Member Server [Server]",
                9: "Member Highest Role [Role]",
                10: "Member Hoist Role [Role]",
                11: "Member ID [Text]",
                12: "Member Joined Server At [Date]",
                13: "Is Member Kickable By The Bot? [Boolean]",
                14: "Member Last Message [Message]",
                32: "Member Last Message Channel ID [Text]",
                15: "Member Last Message ID [Text]",
                16: "Is Member Manageable By The Bot? [Boolean]",
                17: "Member Muted In Any Way? [Message]",
                18: "Member Nickname [Text]",
                19: "Member Permissions [Permissions]",
                20: "Member Rich Presence [Rich Presence]",
                21: "Member Role List [List <Role>]",
                22: "Is Member Self-Deafened? [Boolean]",
                23: "Is Member Self-Muted? [Boolean]",
                24: "Is Member Deafened Server-Wide? [Boolean]",
                25: "Is Member Muted Server-Wide? [Boolean]",
                26: "Is Member Speaking? (Bot Must Be On The Same Voice Channel) [Message]",
                27: "Member User [User]",
                28: "Member Voice Channel [Voice Channel]",
                29: "Member Voice Channel ID [Text]",
                30: "Member Voice Session ID [Text]",
                31: "Member Mention [Text]",
                33: "Member Server Bot Voice Connection [Voice Connection]",
                34: "Member Boosted Server At [Date]",
                35: "Is Member Using \"Go Live\"? [Boolean]",
                36: "Is Member In Voice Channel? [Boolean]"
            }
        },
        {
            "id": "member_info2",
            "name": "Member Info 2",
            "description": "Description: The member information to get.",
            "type": "SELECT",
            "options": {
                1: "Is Member Bannable By The Bot? [Boolean]",
                2: "Member Color Role [Role]",
                3: "Is Member Deafened In Any Way? [Boolean]",
                4: "Has Member Been Removed From The Server? [Boolean]",
                5: "Member Display Base 10 Color [Text]",
                6: "Member Display Hex Color [Text]",
                7: "Member Display Name [Text]",
                8: "Member Server [Server]",
                9: "Member Highest Role [Role]",
                10: "Member Hoist Role [Role]",
                11: "Member ID [Text]",
                12: "Member Joined Server At [Date]",
                13: "Is Member Kickable By The Bot? [Boolean]",
                14: "Member Last Message [Message]",
                32: "Member Last Message Channel ID [Text]",
                15: "Member Last Message ID [Text]",
                16: "Is Member Manageable By The Bot? [Boolean]",
                17: "Member Muted In Any Way? [Message]",
                18: "Member Nickname [Text]",
                19: "Member Permissions [Permissions]",
                20: "Member Rich Presence [Rich Presence]",
                21: "Member Role List [List <Role>]",
                22: "Is Member Self-Deafened? [Boolean]",
                23: "Is Member Self-Muted? [Boolean]",
                24: "Is Member Deafened Server-Wide? [Boolean]",
                25: "Is Member Muted Server-Wide? [Boolean]",
                26: "Is Member Speaking? (Bot Must Be On The Same Voice Channel) [Message]",
                27: "Member User [User]",
                28: "Member Voice Channel [Voice Channel]",
                29: "Member Voice Channel ID [Text]",
                30: "Member Voice Session ID [Text]",
                31: "Member Mention [Text]",
                33: "Member Server Bot Voice Connection [Voice Connection]",
                34: "Member Boosted Server At [Date]",
                35: "Is Member Using \"Go Live\"? [Boolean]",
                36: "Is Member In Voice Channel? [Boolean]"
            }
        },
        {
            "id": "member_info3",
            "name": "Member Info 3",
            "description": "Description: The member information to get.",
            "type": "SELECT",
            "options": {
                1: "Is Member Bannable By The Bot? [Boolean]",
                2: "Member Color Role [Role]",
                3: "Is Member Deafened In Any Way? [Boolean]",
                4: "Has Member Been Removed From The Server? [Boolean]",
                5: "Member Display Base 10 Color [Text]",
                6: "Member Display Hex Color [Text]",
                7: "Member Display Name [Text]",
                8: "Member Server [Server]",
                9: "Member Highest Role [Role]",
                10: "Member Hoist Role [Role]",
                11: "Member ID [Text]",
                12: "Member Joined Server At [Date]",
                13: "Is Member Kickable By The Bot? [Boolean]",
                14: "Member Last Message [Message]",
                32: "Member Last Message Channel ID [Text]",
                15: "Member Last Message ID [Text]",
                16: "Is Member Manageable By The Bot? [Boolean]",
                17: "Member Muted In Any Way? [Message]",
                18: "Member Nickname [Text]",
                19: "Member Permissions [Permissions]",
                20: "Member Rich Presence [Rich Presence]",
                21: "Member Role List [List <Role>]",
                22: "Is Member Self-Deafened? [Boolean]",
                23: "Is Member Self-Muted? [Boolean]",
                24: "Is Member Deafened Server-Wide? [Boolean]",
                25: "Is Member Muted Server-Wide? [Boolean]",
                26: "Is Member Speaking? (Bot Must Be On The Same Voice Channel) [Message]",
                27: "Member User [User]",
                28: "Member Voice Channel [Voice Channel]",
                29: "Member Voice Channel ID [Text]",
                30: "Member Voice Session ID [Text]",
                31: "Member Mention [Text]",
                33: "Member Server Bot Voice Connection [Voice Connection]",
                34: "Member Boosted Server At [Date]",
                35: "Is Member Using \"Go Live\"? [Boolean]",
                36: "Is Member In Voice Channel? [Boolean]"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "result1",
            "name": "Result 1",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the member.",
            "types": ["unspecified"]
        },
        {
            "id": "result2",
            "name": "Result 2",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the member.",
            "types": ["unspecified"]
        },
        {
            "id": "result3",
            "name": "Result 3",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the member.",
            "types": ["unspecified"]
        }
    ],

    async code(cache) {
        const member = this.GetInputValue("member", cache);
        const member_info1 = parseInt(this.GetOptionValue("member_info1", cache));
        const member_info2 = parseInt(this.GetOptionValue("member_info2", cache));
        const member_info3= parseInt(this.GetOptionValue("member_info3", cache));
	    const client = this.client;
		const token = client.token;
	    const { getUserBanner } = await this.require("discord-banner");
		const badges = await this.require("discord-badges");		

        let result1;
        switch(member_info1) {
            case 1:
                result1 = member.bannable;
                break;
            case 2:
                result1 = member.roles.color;
                break;
            case 3:
                result1 = member.voice.deaf;
                break;
            case 4:
                result1 = member.deleted;
                break;
            case 5:
                result1 = member.displayColor;
                break;
            case 6:
                result1 = member.displayHexColor;
                break;
            case 7:
                result1 = member.displayName;
                break;
            case 8:
                result1 = member.guild;
                break;
            case 9:
                result1 = member.roles.highest;
                break;
            case 10:
                result1 = member.roles.hoist;
                break;
            case 11:
                result1 = member.id;
                break;
            case 12:
                result1 = member.joinedAt;
                break;
            case 13:
                result1 = member.kickable;
                break;
            case 14:
                result1 = member.lastMessage;
                break;
            case 32:
                result1 = member.lastMessageChannelID;
                break;
            case 15:
                result1 = member.lastMessageID;
                break;
            case 16:
                result1 = member.manageable;
                break;
            case 17:
                result1 = member.voice.mute;
                break;
            case 18:
                result1 = member.nickname;
                break;
            case 19:
                result1 = member.permissions;
                break;
            case 20:
                result1 = member.presence;
                break;
            case 21:
                result1 = member.roles.cache.array();
                break;
            case 22:
                result1 = member.voice.selfDeaf;
                break;
            case 23:
                result1 = member.voice.selfMute;
                break;
            case 24:
                result1 = member.voice.serverDeaf;
                break;
            case 25:
                result1 = member.voice.serverMute;
                break;
            case 26:
                result1 = member.voice.speaking;
                break;
            case 27:
                result1 = member.user;
                break;
            case 28:
                result1 = member.voice.channel;
                break;
            case 29:
                result1 = member.voice.channelID;
                break;
            case 30:
                result1 = member.voice.sessionID;
                break;
            case 31:
                result1 = member.toString();
                break;
            case 33:
                result1 = member.voice.connection;
                break;
            case 34:
                result1 = member.premiumSince;
                break;
            case 35:
                result1 = member.voice.streaming;
                break;
            case 36:
                result1 = Boolean(member.voice.channelID);
                break;
        }

        let result2;
        switch(member_info2) {
            case 1:
                result2 = member.bannable;
                break;
            case 2:
                result2 = member.roles.color;
                break;
            case 3:
                result2 = member.voice.deaf;
                break;
            case 4:
                result2 = member.deleted;
                break;
            case 5:
                result2 = member.displayColor;
                break;
            case 6:
                result2 = member.displayHexColor;
                break;
            case 7:
                result2 = member.displayName;
                break;
            case 8:
                result2 = member.guild;
                break;
            case 9:
                result2 = member.roles.highest;
                break;
            case 10:
                result2 = member.roles.hoist;
                break;
            case 11:
                result2 = member.id;
                break;
            case 12:
                result2 = member.joinedAt;
                break;
            case 13:
                result2 = member.kickable;
                break;
            case 14:
                result2 = member.lastMessage;
                break;
            case 32:
                result2 = member.lastMessageChannelID;
                break;
            case 15:
                result2 = member.lastMessageID;
                break;
            case 16:
                result2 = member.manageable;
                break;
            case 17:
                result2 = member.voice.mute;
                break;
            case 18:
                result2 = member.nickname;
                break;
            case 19:
                result2 = member.permissions;
                break;
            case 20:
                result2 = member.presence;
                break;
            case 21:
                result2 = member.roles.cache.array();
                break;
            case 22:
                result2 = member.voice.selfDeaf;
                break;
            case 23:
                result2 = member.voice.selfMute;
                break;
            case 24:
                result2 = member.voice.serverDeaf;
                break;
            case 25:
                result2 = member.voice.serverMute;
                break;
            case 26:
                result2 = member.voice.speaking;
                break;
            case 27:
                result2 = member.user;
                break;
            case 28:
                result2 = member.voice.channel;
                break;
            case 29:
                result2 = member.voice.channelID;
                break;
            case 30:
                result2 = member.voice.sessionID;
                break;
            case 31:
                result2 = member.toString();
                break;
            case 33:
                result2 = member.voice.connection;
                break;
            case 34:
                result2 = member.premiumSince;
                break;
            case 35:
                result2 = member.voice.streaming;
                break;
            case 36:
                result2 = Boolean(member.voice.channelID);
                break;
        }

        let result3;
        switch(member_info3) {
            case 1:
                result3 = member.bannable;
                break;
            case 2:
                result3 = member.roles.color;
                break;
            case 3:
                result3 = member.voice.deaf;
                break;
            case 4:
                result3 = member.deleted;
                break;
            case 5:
                result3 = member.displayColor;
                break;
            case 6:
                result3 = member.displayHexColor;
                break;
            case 7:
                result3 = member.displayName;
                break;
            case 8:
                result3 = member.guild;
                break;
            case 9:
                result3 = member.roles.highest;
                break;
            case 10:
                result3 = member.roles.hoist;
                break;
            case 11:
                result3 = member.id;
                break;
            case 12:
                result3 = member.joinedAt;
                break;
            case 13:
                result3 = member.kickable;
                break;
            case 14:
                result3 = member.lastMessage;
                break;
            case 32:
                result3 = member.lastMessageChannelID;
                break;
            case 15:
                result3 = member.lastMessageID;
                break;
            case 16:
                result3 = member.manageable;
                break;
            case 17:
                result3 = member.voice.mute;
                break;
            case 18:
                result3 = member.nickname;
                break;
            case 19:
                result3 = member.permissions;
                break;
            case 20:
                result3 = member.presence;
                break;
            case 21:
                result3 = member.roles.cache.array();
                break;
            case 22:
                result3 = member.voice.selfDeaf;
                break;
            case 23:
                result3 = member.voice.selfMute;
                break;
            case 24:
                result3 = member.voice.serverDeaf;
                break;
            case 25:
                result3 = member.voice.serverMute;
                break;
            case 26:
                result3 = member.voice.speaking;
                break;
            case 27:
                result3 = member.user;
                break;
            case 28:
                result3 = member.voice.channel;
                break;
            case 29:
                result3 = member.voice.channelID;
                break;
            case 30:
                result3 = member.voice.sessionID;
                break;
            case 31:
                result3 = member.toString();
                break;
            case 33:
                result3 = member.voice.connection;
                break;
            case 34:
                result3 = member.premiumSince;
                break;
            case 35:
                result3 = member.voice.streaming;
                break;
            case 36:
                result3 = Boolean(member.voice.channelID);
                break;
        }




        this.StoreOutputValue(result1, "result1", cache);
        this.StoreOutputValue(result2, "result2", cache);
        this.StoreOutputValue(result3, "result3", cache);
        this.RunNextBlock("action", cache);
    }
}