module.exports = {
    name: "[MOD]Get Twitch User/Stream Info",

    description: "Twitch Stream",

    category: ".MOD",


    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "channel",
            "name": "Twitch Channel",
            "description": "The channels you are listening to (all in lowercase)",
            "types": ["text"]
        },
        {
            "id": "clientid",
            "name": "clientid",
            "description": "Your client ID",
            "types": ["text"]
        },
        {
            "id": "clientsecret",
            "name": "clientsecret",
            "description": "Your client secret",
            "types": ["text"]
        },
    ],

    options: [
        {
        "id": "DataGet",
        "name": "Option",
        "description": "Description: Options",
        "type": "SELECT",
        "options": {
            "1": "Streamer Information",
            "2": "Stream Information",
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
            "id": "Streamresult",
            "name": "object",
            "description": "Type: object",
            "types": ["object"]
        }

    ],

    async code(cache) {
        const { Client  } = await this.require('twitchrequest');
        const channel = this.GetInputValue("channel", cache);
        const clientid = this.GetInputValue("clientid", cache);
        const clientsecret = this.GetInputValue("clientsecret", cache);
        const streamoption = this.GetOptionValue("DataGet", cache);
 
        const options = {
            // The channels you are listening to (all in lowercase)
            channels: [channel],

            // Your client ID
            client_id: clientid,

            // Your client secret
            client_secret: clientsecret,

        };



        const client = new Client(options);

        let TwitchStreamResult;

        switch (streamoption) {
            case "1":
                TwitchStreamResult = await client.getUser(channel);
                break;

            case "2":
                TwitchStreamResult = await client.getStream(channel);
                break;
        }

        this.StoreOutputValue(TwitchStreamResult, "Streamresult", cache);
        this.RunNextBlock("action", cache);
    }
}