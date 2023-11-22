
module.exports = {
    name: "Gamedig With Port",

    description: "Get the server object from alot of games - With Added Port input (MissDaily)",

    category: ".MOD",


    inputs: [		
	    {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
		
    ],

    options: [
    {
        "id": "ip",
        "name": "Server IP",
        "description": "The IP of the game server",
        "types": "TEXT"
    },
    {
        "id": "port",
        "name": "Port",
        "description": "A input for Server Port if multiple servers on 1 IP",
        "types": "TEXT"
    },
    {
        "id": "type",
        "name": "Game",
        "description": "The game (check npmjs.org/package/gamedig for useable games)",
        "types": "TEXT"
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
            "name": "Game Server Object",
            "description": "The same value as the input",
            "types": ["object", "unspecified"]
        }
    ],




    async code(cache) {
     const gamedig = await this.require('gamedig');
     const ip = this.GetOptionValue("ip", cache);    
     const type = this.GetOptionValue("type", cache);
     const port = this.GetOptionValue("port", cache);   	

     const output = await gamedig.query({
		 type: type,
	     host: ip,
         port: port
	 })
	 
     this.StoreOutputValue(output, "output", cache);
     this.RunNextBlock('action', cache);			
}}