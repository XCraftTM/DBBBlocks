 module.exports = {
    name: "Get Minecraft Server Info",

    description: "Gets info off of a minecraft server",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "types": ["action"]           
        },
        {
            "id": "ip",
            "name": "Server IP",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [
	        {
            "id": "type",
            "name": "Type",
            "description": "Description: The server info to get",
            "type": "SELECT",
            "options": {
                1: "Server Name [Text]",
                2: "Server Map [Text]",
                3: "Server Password Protected? [Boolean]",
                4: "Online Players [Number]",
                5: "Max Players [Number]",
                6: "Server Ping [Number]",
                7: "Server Players [List of Objects]",
				8: "Server Object [Object]",
				9: "Server Raw Object [Object]",
				10: "Server Version [Text]"
            }
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
            "id": "output",
            "name": "Output",
            "description": "The output of the server info",
            "types": ["unspecified", "object", "list", "text", "number"]
        }
    ],

    async code(cache) {
        const gamedig = await this.require('gamedig');
        const type = parseInt(this.GetOptionValue("type", cache));		
        const ip = this.GetInputValue("ip", cache);	
		const server = await gamedig.query({
			type: 'minecraft',
            host: ip
        })
		
		let result;
        switch(type) {
		case 1:
		result = server.name;
		break;
		case 2:
		result = server.map;
		break;
		case 3:
		result = server.password;
		break;
		case 4:
		result = server.players.length;
		break;
		case 5:
		result = server.maxplayers;
		break;
		case 6:
		result = server.raw.vanilla.ping;
		break;
		case 7:
		result = server.players;
		break;
		case 8:
		result = server;
		break;
	    case 9:
		result = server.raw.vanilla.raw;
		break;
		case 10:
		result = server.raw.vanilla.raw.version.name;
		break;

		}
		
		if (result.length == 0) {
			result = undefined;
		}
		
        this.StoreOutputValue(result, "output", cache); 		
        this.RunNextBlock('action', cache);		

    }
};