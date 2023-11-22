module.exports = {
    name: "Get Server Info x3",

    description: "Gets the server information [x3]. ",

    category: "Server Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to get the information.",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "server_info1",
            "name": "Server Info 1",
            "description": "Description: The server information to get.",
            "type": "SELECT",
            "options": {
                1: "Server AFK Channel [Voice Channel]",
                2: "Server AFK Channel ID [Text]",
                3: "Server AFK Channel Timeout (Seconds) [Number]",
                4: "Server Application ID [Text]",
                5: "Is Server Available? [Boolean]",
                6: "Server Channel List [List <Channel>]",
                7: "Server Created At [Date]",
                8: "Server Default Message Notifications [Text]",
                9: "Server Default Role (@everyone) [Role]",
                10: "Has Bot Been Removed From The Server? [Boolean]",
                11: "Are Embedded Images Enabled On This Server? [Boolean]",
                12: "Server Emoji List [List <Emoji>]",
                13: "Server Explicit Content Filter Level [Text]",
                14: "Server Features [List <Text>]",
                15: "Server Icon [Text]",
                16: "Server Icon URL [Text]",
                17: "Server ID [Text]",
                18: "Bot Joined The Server At [Date]",
                19: "Is Server Large? [Boolean]",
                20: "Bot As Member [Member]",
                21: "Server Member Count (Total) [Number]",
                humanMemberCount: "Server Member Count (Humans) [Number]",
                botMemberCount: "Server Member Count (Bots) [Number]",
                onlineMemberCount: "Server Member Count (Online) [Number]",
                offlineMemberCount: "Server Member Count (Offline) [Number]",
                22: "Server Member List [List <Member>]",
                23: "Is Server Two-Factor Authentication Enabled? [Boolean]",
                24: "Server Name [Text]",
                25: "Server Name Acronym [Text]",
                26: "Server Owner Member [Member]",
                27: "Server Owner Member ID [Text]",
                28: "Server Member Rich Presence List [List <Rich Presence>]",
                29: "Server Region [Text]",
                30: "Server Role List [List <Role>]",
                31: "Server Splash [Text]",
                32: "Server Splash URL [Text]",
                33: "Server System Channel [Text Channel]",
                34: "Server System Channel ID [Text]",
                35: "Server Verification Level [Text]",
                36: "Is Server Verified? [Boolean]",
                37: "Server Bot Voice Connection [Voice Connection]",
                38: "Server Ban List [List <Ban>]",
                39: "Server Invite List [List <Invite>]",
                40: "Server Vanity Code [Text]",
                41: "Server Vanity URL [Text]",
                42: "Server Webhook List [List <Webhook>]",
                43: "Server Banner [Text]",
                44: "Server Banner URL [Text]",
                45: "Server Description [Text]",
                46: "Server Embed Channel [Text Channel]",
                47: "Server Embed Channel ID [Text]",
                48: "Server Maximum Members [Number]",
                49: "Server Maximum Rich Presences [Number]",
                50: "Is Server Partnered? [Boolean]",
                51: "Server Boost Count [Number]",
                52: "Server Boost Level [Number]",
                53: "Server Public Updates Channel [Text Channel]",
                54: "Server Public Updates Channel ID [Text]",
                55: "Server Rules Channel [Text Channel]",
                56: "Server Rules Channel ID [Text]",
                57: "Server Widget Channel [Text Channel]",
                58: "Server Widget Channel ID [Text]",
                59: "Is Server Widget Enabled? [Text]",
                60: "Server Audit Log List [List <Audit Log>]",
                61: "Server Preview [Server Preview]",
                62: "Server Bot Prefix [Text]"
            }
        },
        {
            "id": "server_info2",
            "name": "Server Info 2",
            "description": "Description: The server information to get.",
            "type": "SELECT",
            "options": {
                1: "Server AFK Channel [Voice Channel]",
                2: "Server AFK Channel ID [Text]",
                3: "Server AFK Channel Timeout (Seconds) [Number]",
                4: "Server Application ID [Text]",
                5: "Is Server Available? [Boolean]",
                6: "Server Channel List [List <Channel>]",
                7: "Server Created At [Date]",
                8: "Server Default Message Notifications [Text]",
                9: "Server Default Role (@everyone) [Role]",
                10: "Has Bot Been Removed From The Server? [Boolean]",
                11: "Are Embedded Images Enabled On This Server? [Boolean]",
                12: "Server Emoji List [List <Emoji>]",
                13: "Server Explicit Content Filter Level [Text]",
                14: "Server Features [List <Text>]",
                15: "Server Icon [Text]",
                16: "Server Icon URL [Text]",
                17: "Server ID [Text]",
                18: "Bot Joined The Server At [Date]",
                19: "Is Server Large? [Boolean]",
                20: "Bot As Member [Member]",
                21: "Server Member Count (Total) [Number]",
                humanMemberCount: "Server Member Count (Humans) [Number]",
                botMemberCount: "Server Member Count (Bots) [Number]",
                onlineMemberCount: "Server Member Count (Online) [Number]",
                offlineMemberCount: "Server Member Count (Offline) [Number]",
                22: "Server Member List [List <Member>]",
                23: "Is Server Two-Factor Authentication Enabled? [Boolean]",
                24: "Server Name [Text]",
                25: "Server Name Acronym [Text]",
                26: "Server Owner Member [Member]",
                27: "Server Owner Member ID [Text]",
                28: "Server Member Rich Presence List [List <Rich Presence>]",
                29: "Server Region [Text]",
                30: "Server Role List [List <Role>]",
                31: "Server Splash [Text]",
                32: "Server Splash URL [Text]",
                33: "Server System Channel [Text Channel]",
                34: "Server System Channel ID [Text]",
                35: "Server Verification Level [Text]",
                36: "Is Server Verified? [Boolean]",
                37: "Server Bot Voice Connection [Voice Connection]",
                38: "Server Ban List [List <Ban>]",
                39: "Server Invite List [List <Invite>]",
                40: "Server Vanity Code [Text]",
                41: "Server Vanity URL [Text]",
                42: "Server Webhook List [List <Webhook>]",
                43: "Server Banner [Text]",
                44: "Server Banner URL [Text]",
                45: "Server Description [Text]",
                46: "Server Embed Channel [Text Channel]",
                47: "Server Embed Channel ID [Text]",
                48: "Server Maximum Members [Number]",
                49: "Server Maximum Rich Presences [Number]",
                50: "Is Server Partnered? [Boolean]",
                51: "Server Boost Count [Number]",
                52: "Server Boost Level [Number]",
                53: "Server Public Updates Channel [Text Channel]",
                54: "Server Public Updates Channel ID [Text]",
                55: "Server Rules Channel [Text Channel]",
                56: "Server Rules Channel ID [Text]",
                57: "Server Widget Channel [Text Channel]",
                58: "Server Widget Channel ID [Text]",
                59: "Is Server Widget Enabled? [Text]",
                60: "Server Audit Log List [List <Audit Log>]",
                61: "Server Preview [Server Preview]",
                62: "Server Bot Prefix [Text]"
            }
        },
        {
            "id": "server_info3",
            "name": "Server Info 3",
            "description": "Description: The server information to get.",
            "type": "SELECT",
            "options": {
                1: "Server AFK Channel [Voice Channel]",
                2: "Server AFK Channel ID [Text]",
                3: "Server AFK Channel Timeout (Seconds) [Number]",
                4: "Server Application ID [Text]",
                5: "Is Server Available? [Boolean]",
                6: "Server Channel List [List <Channel>]",
                7: "Server Created At [Date]",
                8: "Server Default Message Notifications [Text]",
                9: "Server Default Role (@everyone) [Role]",
                10: "Has Bot Been Removed From The Server? [Boolean]",
                11: "Are Embedded Images Enabled On This Server? [Boolean]",
                12: "Server Emoji List [List <Emoji>]",
                13: "Server Explicit Content Filter Level [Text]",
                14: "Server Features [List <Text>]",
                15: "Server Icon [Text]",
                16: "Server Icon URL [Text]",
                17: "Server ID [Text]",
                18: "Bot Joined The Server At [Date]",
                19: "Is Server Large? [Boolean]",
                20: "Bot As Member [Member]",
                21: "Server Member Count (Total) [Number]",
                humanMemberCount: "Server Member Count (Humans) [Number]",
                botMemberCount: "Server Member Count (Bots) [Number]",
                onlineMemberCount: "Server Member Count (Online) [Number]",
                offlineMemberCount: "Server Member Count (Offline) [Number]",
                22: "Server Member List [List <Member>]",
                23: "Is Server Two-Factor Authentication Enabled? [Boolean]",
                24: "Server Name [Text]",
                25: "Server Name Acronym [Text]",
                26: "Server Owner Member [Member]",
                27: "Server Owner Member ID [Text]",
                28: "Server Member Rich Presence List [List <Rich Presence>]",
                29: "Server Region [Text]",
                30: "Server Role List [List <Role>]",
                31: "Server Splash [Text]",
                32: "Server Splash URL [Text]",
                33: "Server System Channel [Text Channel]",
                34: "Server System Channel ID [Text]",
                35: "Server Verification Level [Text]",
                36: "Is Server Verified? [Boolean]",
                37: "Server Bot Voice Connection [Voice Connection]",
                38: "Server Ban List [List <Ban>]",
                39: "Server Invite List [List <Invite>]",
                40: "Server Vanity Code [Text]",
                41: "Server Vanity URL [Text]",
                42: "Server Webhook List [List <Webhook>]",
                43: "Server Banner [Text]",
                44: "Server Banner URL [Text]",
                45: "Server Description [Text]",
                46: "Server Embed Channel [Text Channel]",
                47: "Server Embed Channel ID [Text]",
                48: "Server Maximum Members [Number]",
                49: "Server Maximum Rich Presences [Number]",
                50: "Is Server Partnered? [Boolean]",
                51: "Server Boost Count [Number]",
                52: "Server Boost Level [Number]",
                53: "Server Public Updates Channel [Text Channel]",
                54: "Server Public Updates Channel ID [Text]",
                55: "Server Rules Channel [Text Channel]",
                56: "Server Rules Channel ID [Text]",
                57: "Server Widget Channel [Text Channel]",
                58: "Server Widget Channel ID [Text]",
                59: "Is Server Widget Enabled? [Text]",
                60: "Server Audit Log List [List <Audit Log>]",
                61: "Server Preview [Server Preview]",
                62: "Server Bot Prefix [Text]"
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
            "description": "Type: Unspecified\n\nDescription: The information obtained from the server.",
            "types": ["unspecified"]
        },
        {
            "id": "result2",
            "name": "Result 2",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the server.",
            "types": ["unspecified"]
        },
        {
            "id": "result3",
            "name": "Result 3",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the server.",
            "types": ["unspecified"]
        }
    ],

    async code(cache) {
        const server = this.GetInputValue("server", cache);
        const server_info1 = this.GetOptionValue("server_info1", cache) + "";
        const server_info2 = this.GetOptionValue("server_info2", cache) + "";
        const server_info3 = this.GetOptionValue("server_info3", cache) + "";

        let result1;
        switch(server_info1) {
            case "1":
                result1 = server.afkChannel;
                break;
            case "2":
                result1 = server.afkChannelID;
                break;
            case "3":
                result1 = server.afkTimeout;
                break;
            case "4":
                result1 = server.applicationID;
                break;
            case "5":
                result1 = server.available;
                break;
            case "6":
                result1 = server.channels.cache.array();
                break;
            case "7":
                result1 = server.createdAt;
                break;
            case "8":
                switch(server.defaultMessageNotifications) {
                    case "ALL":
                        result1 = "All Messages";
                        break;
                    case "MENTIONS":
                        result1 = "Only @mentions";
                        break;
                    default:
                        result1 = "Unknown";
                        break;
                }
                break;
            case "9":
                result1 = server.roles.everyone;
                break;
            case "10":
                result1 = server.deleted;
                break;
            case "11":
                result1 = server.embedEnabled;
                break;
            case "12":
                result1 = server.emojis.cache.array();
                break;
            case "13":
                switch(server.explicitContentFilter) {
                    case "DISABLED":
                        result1 = "Disabled";
                        break;
                    case "MEMBERS_WITHOUT_ROLES":
                        result1 = "Members Without Roles";
                        break;
                    case "ALL_MEMBERS":
                        result1 = "All Members";
                        break;
                    default:
                        result1 = "Unknown";
                        break;
                }
                break;
            case "14":
                result1 = server.features.replace(/_/g, " ").replace(/\w\S*/g, a => a[0].toUpperCase() + a.substring(1).toLowerCase());
                break;
            case "15":
                result1 = server.icon;
                break;
            case "16":
                result1 = server.iconURL({dynamic: true, format: "png"});
                break;
            case "17":
                result1 = server.id;
                break;
            case "18":
                result1 = server.joinedAt;
                break;
            case "19":
                result1 = server.large;
                break;
            case "20":
                result1 = server.me;
                break;
            case "21":
                result1 = server.memberCount;
                break;
            case "humanMemberCount":
                result1 = server.members.cache.filter(member => !member.user.bot).size;
                break;
            case "botMemberCount":
                result1 = server.members.cache.filter(member => member.user.bot).size;
                break;
            case "onlineMemberCount":
                result1 = server.members.cache.filter(member => member.presence.status != "offline").size;
                break;
            case "offlineMemberCount":
                result1 = server.members.cache.filter(member => member.presence.status == "offline").size;
                break;
            case "22":
                result1 = server.members.cache.array();
                break;
            case "23":
                switch(server.mfaLevel) {
                    default:
                    case 0:
                        result1 = false;
                        break;
                    case 1:
                        result1 = true;
                        break;
                }
                break;
            case "24":
                result1 = server.name;
                break;
            case "25":
                result1 = server.nameAcronym;
                break;
            case "26":
                result1 = server.owner;
                break;
            case "27":
                result1 = server.ownerID;
                break;
            case "28":
                result1 = server.presences.cache.array();
                break;
            case "29":
                switch(server.region) {
                    case "amsterdam":
                        result1 = "Amsterdam";
                        break;
                    case "brazil":
                        result1 = "Brazil";
                        break;
                    case "dubai":
                        result1 = "Dubai";
                        break;
                    case "europe":
                        result1 = "Europe";
                        break;
                    case "eu-central":
                        result1 = "Central Europe";
                        break;
                    case "eu-west":
                        result1 = "Western Europe";
                        break;
                    case "frankfurt":
                        result1 = "Frankfurt";
                        break;
                    case "hongkong":
                        result1 = "Hong Kong";
                        break;
                    case "india":
                        result1 = "India";
                        break;
                    case "japan":
                        result1 = "Japan";
                        break;
                    case "london":
                        result1 = "London";
                        break;
                    case "russia":
                        result1 = "Russia";
                        break;
                    case "singapore":
                        result1 = "Singapore";
                        break;
                    case "southafrica":
                        result1 = "South Africa";
                        break;
                    case "south-korea":
                        result1 = "South Korea";
                        break;
                    case "sydney":
                        result1 = "Sydney";
                        break;
                    case "us-central":
                        result1 = "US Central";
                        break;
                    case "us-east":
                        result1 = "US East";
                        break;
                    case "us-south":
                        result1 = "US South";
                        break;
                    case "us-west":
                        result1 = "US West";
                        break;
                    case "vip-amsterdam":
                        result1 = "Amsterdam VIP";
                        break;
                    case "vip-us-east":
                        result1 = "US East VIP";
                        break;
                    case "vip-us-west":
                        result1 = "US West VIP";
                        break;
                    default:
                        result1 = "Unknown";
                        break;
                }
                break;
            case "30":
                result1 = server.roles.cache.array();
                break;
            case "31":
                result1 = server.splash;
                break;
            case "32":
                result1 = server.splashURL({dynamic: true, format: "png"});
                break;
            case "33":
                result1 = server.systemChannel;
                break;
            case "34":
                result1 = server.systemChannelID;
                break;
            case "35":
                switch(server.verificationLevel) {
                    case 0:
                        result1 = "None";
                        break;
                    case 1:
                        result1 = "Low";
                        break;
                    case 2:
                        result1 = "Medium";
                        break;
                    case 3:
                        result1 = "High";
                        break;
                    case 4:
                        result1 = "Very High";
                        break;
                    default:
                        result1 = "Unknown";
                        break;
                }
                break;
            case "36":
                result1 = server.verified;
                break;
            case "37":
                result1 = server.voice && server.voice.connection;
                break;
            case "38":
                result1 = await server.fetchBans(true).then(bans => bans.array());
                break;
            case "39":
                result1 = await server.fetchInvites().then(invites => invites.array());
                break;
            case "40":
                result1 = server.vanityURLCode;
                break;
            case "41":
                result1 = server.vanityURLCode && `https://discord.gg/${server.vanityURLCode}`;
                break;
            case "42":
                result1 = await server.fetchWebhooks().then(webhooks => webhooks.array());
                break;
            case "43":
                result1 = server.banner;
                break;
            case "44":
                result1 = server.bannerURL({dynamic: true, format: "png"});
                break;
            case "45":
                result1 = server.description;
                break;
            case "46":
                result1 = server.embedChannel;
                break;
            case "47":
                result1 = server.embedChannelID;
                break;
            case "48":
                result1 = server.maximumMembers;
                break;
            case "49":
                result1 = server.maximumPresences;
                break;
            case "50":
                result1 = server.partnered;
                break;
            case "51":
                result1 = server.premiumSubscriptionCount;
                break;
            case "52":
                result1 = server.premiumTier;
                break;
            case "53":
                result1 = server.publicUpdatesChannel;
                break;
            case "54":
                result1 = server.publicUpdatesChannelID;
                break;
            case "55":
                result1 = server.rulesChannel;
                break;
            case "56":
                result1 = server.rulesChannelID;
                break;
            case "57":
                result1 = server.widgetChannel;
                break;
            case "58":
                result1 = server.widgetChannelID;
                break;
            case "59":
                result1 = server.widgetEnabled;
                break;
            case "60":
                result1 = await server.fetchAuditLogs().then(a => a.entries.array());
                break;
            case "61":
                result1 = await server.fetchPreview();
                break;
            case "62":
                result1 = this.getDBB().Data.data.dbb.prefixes.servers[server.id];
                break;
        }

        let result2;
        switch(server_info2) {
            case "1":
                result2 = server.afkChannel;
                break;
            case "2":
                result2 = server.afkChannelID;
                break;
            case "3":
                result2 = server.afkTimeout;
                break;
            case "4":
                result2 = server.applicationID;
                break;
            case "5":
                result2 = server.available;
                break;
            case "6":
                result2 = server.channels.cache.array();
                break;
            case "7":
                result2 = server.createdAt;
                break;
            case "8":
                switch(server.defaultMessageNotifications) {
                    case "ALL":
                        result2 = "All Messages";
                        break;
                    case "MENTIONS":
                        result2 = "Only @mentions";
                        break;
                    default:
                        result2 = "Unknown";
                        break;
                }
                break;
            case "9":
                result2 = server.roles.everyone;
                break;
            case "10":
                result2 = server.deleted;
                break;
            case "11":
                result2 = server.embedEnabled;
                break;
            case "12":
                result2 = server.emojis.cache.array();
                break;
            case "13":
                switch(server.explicitContentFilter) {
                    case "DISABLED":
                        result2 = "Disabled";
                        break;
                    case "MEMBERS_WITHOUT_ROLES":
                        result2 = "Members Without Roles";
                        break;
                    case "ALL_MEMBERS":
                        result2 = "All Members";
                        break;
                    default:
                        result2 = "Unknown";
                        break;
                }
                break;
            case "14":
                result2 = server.features.replace(/_/g, " ").replace(/\w\S*/g, a => a[0].toUpperCase() + a.substring(1).toLowerCase());
                break;
            case "15":
                result2 = server.icon;
                break;
            case "16":
                result2 = server.iconURL({dynamic: true, format: "png"});
                break;
            case "17":
                result2 = server.id;
                break;
            case "18":
                result2 = server.joinedAt;
                break;
            case "19":
                result2 = server.large;
                break;
            case "20":
                result2 = server.me;
                break;
            case "21":
                result2 = server.memberCount;
                break;
            case "humanMemberCount":
                result2 = server.members.cache.filter(member => !member.user.bot).size;
                break;
            case "botMemberCount":
                result2 = server.members.cache.filter(member => member.user.bot).size;
                break;
            case "onlineMemberCount":
                result2 = server.members.cache.filter(member => member.presence.status != "offline").size;
                break;
            case "offlineMemberCount":
                result2 = server.members.cache.filter(member => member.presence.status == "offline").size;
                break;
            case "22":
                result2 = server.members.cache.array();
                break;
            case "23":
                switch(server.mfaLevel) {
                    default:
                    case 0:
                        result2 = false;
                        break;
                    case 1:
                        result2 = true;
                        break;
                }
                break;
            case "24":
                result2 = server.name;
                break;
            case "25":
                result2 = server.nameAcronym;
                break;
            case "26":
                result2 = server.owner;
                break;
            case "27":
                result2 = server.ownerID;
                break;
            case "28":
                result2 = server.presences.cache.array();
                break;
            case "29":
                switch(server.region) {
                    case "amsterdam":
                        result2 = "Amsterdam";
                        break;
                    case "brazil":
                        result2 = "Brazil";
                        break;
                    case "dubai":
                        result2 = "Dubai";
                        break;
                    case "europe":
                        result2 = "Europe";
                        break;
                    case "eu-central":
                        result2 = "Central Europe";
                        break;
                    case "eu-west":
                        result2 = "Western Europe";
                        break;
                    case "frankfurt":
                        result2 = "Frankfurt";
                        break;
                    case "hongkong":
                        result2 = "Hong Kong";
                        break;
                    case "india":
                        result2 = "India";
                        break;
                    case "japan":
                        result2 = "Japan";
                        break;
                    case "london":
                        result2 = "London";
                        break;
                    case "russia":
                        result2 = "Russia";
                        break;
                    case "singapore":
                        result2 = "Singapore";
                        break;
                    case "southafrica":
                        result2 = "South Africa";
                        break;
                    case "south-korea":
                        result2 = "South Korea";
                        break;
                    case "sydney":
                        result2 = "Sydney";
                        break;
                    case "us-central":
                        result2 = "US Central";
                        break;
                    case "us-east":
                        result2 = "US East";
                        break;
                    case "us-south":
                        result2 = "US South";
                        break;
                    case "us-west":
                        result2 = "US West";
                        break;
                    case "vip-amsterdam":
                        result2 = "Amsterdam VIP";
                        break;
                    case "vip-us-east":
                        result2 = "US East VIP";
                        break;
                    case "vip-us-west":
                        result2 = "US West VIP";
                        break;
                    default:
                        result2 = "Unknown";
                        break;
                }
                break;
            case "30":
                result2 = server.roles.cache.array();
                break;
            case "31":
                result2 = server.splash;
                break;
            case "32":
                result2 = server.splashURL({dynamic: true, format: "png"});
                break;
            case "33":
                result2 = server.systemChannel;
                break;
            case "34":
                result2 = server.systemChannelID;
                break;
            case "35":
                switch(server.verificationLevel) {
                    case 0:
                        result2 = "None";
                        break;
                    case 1:
                        result2 = "Low";
                        break;
                    case 2:
                        result2 = "Medium";
                        break;
                    case 3:
                        result2 = "High";
                        break;
                    case 4:
                        result2 = "Very High";
                        break;
                    default:
                        result2 = "Unknown";
                        break;
                }
                break;
            case "36":
                result2 = server.verified;
                break;
            case "37":
                result2 = server.voice && server.voice.connection;
                break;
            case "38":
                result2 = await server.fetchBans(true).then(bans => bans.array());
                break;
            case "39":
                result2 = await server.fetchInvites().then(invites => invites.array());
                break;
            case "40":
                result2 = server.vanityURLCode;
                break;
            case "41":
                result2 = server.vanityURLCode && `https://discord.gg/${server.vanityURLCode}`;
                break;
            case "42":
                result2 = await server.fetchWebhooks().then(webhooks => webhooks.array());
                break;
            case "43":
                result2 = server.banner;
                break;
            case "44":
                result2 = server.bannerURL({dynamic: true, format: "png"});
                break;
            case "45":
                result2 = server.description;
                break;
            case "46":
                result2 = server.embedChannel;
                break;
            case "47":
                result2 = server.embedChannelID;
                break;
            case "48":
                result2 = server.maximumMembers;
                break;
            case "49":
                result2 = server.maximumPresences;
                break;
            case "50":
                result2 = server.partnered;
                break;
            case "51":
                result2 = server.premiumSubscriptionCount;
                break;
            case "52":
                result2 = server.premiumTier;
                break;
            case "53":
                result2 = server.publicUpdatesChannel;
                break;
            case "54":
                result2 = server.publicUpdatesChannelID;
                break;
            case "55":
                result2 = server.rulesChannel;
                break;
            case "56":
                result2 = server.rulesChannelID;
                break;
            case "57":
                result2 = server.widgetChannel;
                break;
            case "58":
                result2 = server.widgetChannelID;
                break;
            case "59":
                result2 = server.widgetEnabled;
                break;
            case "60":
                result2 = await server.fetchAuditLogs().then(a => a.entries.array());
                break;
            case "61":
                result2 = await server.fetchPreview();
                break;
            case "62":
                result2 = this.getDBB().Data.data.dbb.prefixes.servers[server.id];
                break;
        }

        let result3;
        switch(server_info3) {
            case "1":
                result3 = server.afkChannel;
                break;
            case "2":
                result3 = server.afkChannelID;
                break;
            case "3":
                result3 = server.afkTimeout;
                break;
            case "4":
                result3 = server.applicationID;
                break;
            case "5":
                result3 = server.available;
                break;
            case "6":
                result3 = server.channels.cache.array();
                break;
            case "7":
                result3 = server.createdAt;
                break;
            case "8":
                switch(server.defaultMessageNotifications) {
                    case "ALL":
                        result3 = "All Messages";
                        break;
                    case "MENTIONS":
                        result3 = "Only @mentions";
                        break;
                    default:
                        result3 = "Unknown";
                        break;
                }
                break;
            case "9":
                result3 = server.roles.everyone;
                break;
            case "10":
                result3 = server.deleted;
                break;
            case "11":
                result3 = server.embedEnabled;
                break;
            case "12":
                result3 = server.emojis.cache.array();
                break;
            case "13":
                switch(server.explicitContentFilter) {
                    case "DISABLED":
                        result3 = "Disabled";
                        break;
                    case "MEMBERS_WITHOUT_ROLES":
                        result3 = "Members Without Roles";
                        break;
                    case "ALL_MEMBERS":
                        result3 = "All Members";
                        break;
                    default:
                        result3 = "Unknown";
                        break;
                }
                break;
            case "14":
                result3 = server.features.replace(/_/g, " ").replace(/\w\S*/g, a => a[0].toUpperCase() + a.substring(1).toLowerCase());
                break;
            case "15":
                result3 = server.icon;
                break;
            case "16":
                result3 = server.iconURL({dynamic: true, format: "png"});
                break;
            case "17":
                result3 = server.id;
                break;
            case "18":
                result3 = server.joinedAt;
                break;
            case "19":
                result3 = server.large;
                break;
            case "20":
                result3 = server.me;
                break;
            case "21":
                result3 = server.memberCount;
                break;
            case "humanMemberCount":
                result3 = server.members.cache.filter(member => !member.user.bot).size;
                break;
            case "botMemberCount":
                result3 = server.members.cache.filter(member => member.user.bot).size;
                break;
            case "onlineMemberCount":
                result3 = server.members.cache.filter(member => member.presence.status != "offline").size;
                break;
            case "offlineMemberCount":
                result3 = server.members.cache.filter(member => member.presence.status == "offline").size;
                break;
            case "22":
                result3 = server.members.cache.array();
                break;
            case "23":
                switch(server.mfaLevel) {
                    default:
                    case 0:
                        result3 = false;
                        break;
                    case 1:
                        result3 = true;
                        break;
                }
                break;
            case "24":
                result3 = server.name;
                break;
            case "25":
                result3 = server.nameAcronym;
                break;
            case "26":
                result3 = server.owner;
                break;
            case "27":
                result3 = server.ownerID;
                break;
            case "28":
                result3 = server.presences.cache.array();
                break;
            case "29":
                switch(server.region) {
                    case "amsterdam":
                        result3 = "Amsterdam";
                        break;
                    case "brazil":
                        result3 = "Brazil";
                        break;
                    case "dubai":
                        result3 = "Dubai";
                        break;
                    case "europe":
                        result3 = "Europe";
                        break;
                    case "eu-central":
                        result3 = "Central Europe";
                        break;
                    case "eu-west":
                        result3 = "Western Europe";
                        break;
                    case "frankfurt":
                        result3 = "Frankfurt";
                        break;
                    case "hongkong":
                        result3 = "Hong Kong";
                        break;
                    case "india":
                        result3 = "India";
                        break;
                    case "japan":
                        result3 = "Japan";
                        break;
                    case "london":
                        result3 = "London";
                        break;
                    case "russia":
                        result3 = "Russia";
                        break;
                    case "singapore":
                        result3 = "Singapore";
                        break;
                    case "southafrica":
                        result3 = "South Africa";
                        break;
                    case "south-korea":
                        result3 = "South Korea";
                        break;
                    case "sydney":
                        result3 = "Sydney";
                        break;
                    case "us-central":
                        result3 = "US Central";
                        break;
                    case "us-east":
                        result3 = "US East";
                        break;
                    case "us-south":
                        result3 = "US South";
                        break;
                    case "us-west":
                        result3 = "US West";
                        break;
                    case "vip-amsterdam":
                        result3 = "Amsterdam VIP";
                        break;
                    case "vip-us-east":
                        result3 = "US East VIP";
                        break;
                    case "vip-us-west":
                        result3 = "US West VIP";
                        break;
                    default:
                        result3 = "Unknown";
                        break;
                }
                break;
            case "30":
                result3 = server.roles.cache.array();
                break;
            case "31":
                result3 = server.splash;
                break;
            case "32":
                result3 = server.splashURL({dynamic: true, format: "png"});
                break;
            case "33":
                result3 = server.systemChannel;
                break;
            case "34":
                result3 = server.systemChannelID;
                break;
            case "35":
                switch(server.verificationLevel) {
                    case 0:
                        result3 = "None";
                        break;
                    case 1:
                        result3 = "Low";
                        break;
                    case 2:
                        result3 = "Medium";
                        break;
                    case 3:
                        result3 = "High";
                        break;
                    case 4:
                        result3 = "Very High";
                        break;
                    default:
                        result3 = "Unknown";
                        break;
                }
                break;
            case "36":
                result3 = server.verified;
                break;
            case "37":
                result3 = server.voice && server.voice.connection;
                break;
            case "38":
                result3 = await server.fetchBans(true).then(bans => bans.array());
                break;
            case "39":
                result3 = await server.fetchInvites().then(invites => invites.array());
                break;
            case "40":
                result3 = server.vanityURLCode;
                break;
            case "41":
                result3 = server.vanityURLCode && `https://discord.gg/${server.vanityURLCode}`;
                break;
            case "42":
                result3 = await server.fetchWebhooks().then(webhooks => webhooks.array());
                break;
            case "43":
                result3 = server.banner;
                break;
            case "44":
                result3 = server.bannerURL({dynamic: true, format: "png"});
                break;
            case "45":
                result3 = server.description;
                break;
            case "46":
                result3 = server.embedChannel;
                break;
            case "47":
                result3 = server.embedChannelID;
                break;
            case "48":
                result3 = server.maximumMembers;
                break;
            case "49":
                result3 = server.maximumPresences;
                break;
            case "50":
                result3 = server.partnered;
                break;
            case "51":
                result3 = server.premiumSubscriptionCount;
                break;
            case "52":
                result3 = server.premiumTier;
                break;
            case "53":
                result3 = server.publicUpdatesChannel;
                break;
            case "54":
                result3 = server.publicUpdatesChannelID;
                break;
            case "55":
                result3 = server.rulesChannel;
                break;
            case "56":
                result3 = server.rulesChannelID;
                break;
            case "57":
                result3 = server.widgetChannel;
                break;
            case "58":
                result3 = server.widgetChannelID;
                break;
            case "59":
                result3 = server.widgetEnabled;
                break;
            case "60":
                result3 = await server.fetchAuditLogs().then(a => a.entries.array());
                break;
            case "61":
                result3 = await server.fetchPreview();
                break;
            case "62":
                result3 = this.getDBB().Data.data.dbb.prefixes.servers[server.id];
                break;
        }



        this.StoreOutputValue(result1, "result1", cache);
        this.StoreOutputValue(result2, "result2", cache);
        this.StoreOutputValue(result3, "result3", cache);
        this.RunNextBlock("action", cache);
    }
}