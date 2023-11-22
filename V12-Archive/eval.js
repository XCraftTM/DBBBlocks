
module.exports = {
    name: "Eval",

    description: "The eval command (Do not make the eval command usable for everyone)",

    category: "Server Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "content",
            "name": "Eval Command",
            "description": "The command to execute",
            "types": ["text", "unspecified"],
			"required": true
        },	
        {
            "id": "message",
            "name": "Message",
            "description": "The original message which contained the eval command",
            "types": ["object", "unspecified"],
			"required": true
        }
		
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "output",
            "name": "Eval Output",
            "description": "The output of the eval command",
            "types": ["text"]
        }
    ],




    code(cache) {
        const content = this.GetInputValue("content", cache);
        const message = this.GetInputValue("message", cache);
		const channel = message.channel;
		const member = message.member;

        const output = eval(content);
		
        this.StoreOutputValue(output, "output", cache);
        this.RunNextBlock("action", cache);
    }
}