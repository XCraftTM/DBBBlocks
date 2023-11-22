module.exports = {
    name: "Brainfuck",

    description: "brainfucks your fucked brain",

    category: "Brainfuck",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "code",
            "name": "Code",
            "description": "Description: the Brainfuck code",
            "types": ["text", "unspecified"],
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
			"id": "out",
            "name": "output",
            "description": "Type: Action\n\nDescription: Outputs whatever you set it to",
            "types": ["unspecified"]
		}
    ],

    code(cache) {
        const brainfuck = require('brainfuck');
        const this_s = this
        
        const code = this.GetInputValue("code", cache) + "";
        brainfuck.exec(code, function(err, output) {
            if(err) {console.error(err)};
            console.log(output);
            this_s.StoreOutputValue(output, "out", cache);
            this_s.RunNextBlock("action", cache);
        });
    }
}