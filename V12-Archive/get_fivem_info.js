module.exports = {
    name: "Get FiveM Server Info",

    description: "Gets the info off of a FiveM server",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "ip",
            "name": "IP:PORT",
            "description": "The IP:PORT (Example = 	92.41.38.207:30120) ",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "type",
            "name": "FiveM Server Info",
            "description": "The info to get from the FiveM server",
            "type": "SELECT",
            "options": {
                1: "Server Player Count [Number]",
                2: "Server Players [List]",
                3: "Server Max Players [Number]",
                4: "Get Server Resources [List]",
                5: "Get Server Tags [Text]",
                6: "Get Server Object [Object]",
                7: "Is OneSync enabled? [Boolean]",
                8: "Get Server Language [Text]",
                9: "Get Server Name [Text]",
                10: "Get Enhanced Host Support [Boolean]",
                11: "Get Server License Key Token [Text]",
                12: "Does Server Allow Mod Menu's? [Boolean]"
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
            "id": "result",
            "name": "Result",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the message.",
            "types": ["unspecified"]
        }
    ],

    async code(cache) {
        const ip = this.GetInputValue("ip", cache);
        const type = parseInt(this.GetOptionValue("type", cache));
		const FiveM = await this.require("fivem");
		const srv = new FiveM.Server(ip);

        let result;
        switch(type) {
            case 1:
                result = await srv.getPlayers()
                break;
            case 2:
                result = await srv.getPlayersAll()
                break;
            case 3:
                result = await srv.getMaxPlayers()
                break;
            case 4:
                result = await srv.getResources()
                break;
            case 5:
                result = await srv.getTags()
                break;
            case 6:
                result = await srv.getServer()
                break;
            case 7:
                result = await srv.getOnesync()
                break;
            case 8:
                result = await srv.getLocale()
                break;
            case 9:
                result = await srv.getGamename()
                break;
            case 10:
                result = await srv.getEnhancedHostSupport()
                break;
            case 11:
                result = await srv.getlicenseKeyToken()
                break;
            case 12:
                result = await srv.getScriptHookAllowed()
                break;

        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
}