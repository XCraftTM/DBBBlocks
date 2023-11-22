
module.exports = {
    name: "Gamedig",

    description: "Get the server object from alot of games",

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
            "name": "Server IP",
            "description": "The IP of the game server",
            "types": ["text", "unspecified"]
        },
        {
            "id": "type",
            "name": "Game",
            "description": "The game (check npmjs.org/package/gamedig for useable games)",
            "types": ["text", "unspecified"]
        }
		
    ],

    options: [
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
     const ip = this.GetInputValue("ip", cache);    
     const type = this.GetInputValue("type", cache);   	

     const output = await gamedig.query({
		 type: type,
	     host: ip
	 })
	 
     this.StoreOutputValue(output, "output", cache);
     this.RunNextBlock('action', cache);			
}}