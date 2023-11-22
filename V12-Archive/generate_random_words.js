module.exports = {
    name: "Generate random word(s)",

    description: "Generates random words with set stuff",

    category: "Message Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "amount",
            "name": "Amount of strings",
            "description": "The amount of word strings to generate",
            "types": ["number"],
            "required": true
        },
        {
            "id": "perstring",
            "name": "Words per string",
            "description": "The amount of words generated in a string",
            "types": ["number"],
            "required": true
        },
        {
            "id": "sep",
            "name": "Separator",
            "description": "The separator between the text",
            "types": ["text"]
        },
        {
            "id": "upcase",
            "name": "Uppercase?",
            "description": "True = uppercase || false = lowercase || nothing = lowercase",
            "types": ["boolean"]
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
            "name": "Generated words",
            "description": "The words generated",
            "types": ["list"]
        }
    ],

    async code(cache) {
        const randomWords = await this.require("random-words");
        var amount = this.GetInputValue("amount", cache);		
        var perstring = this.GetInputValue("perstring", cache);
        var sep = this.GetInputValue("sep", cache);
        var upcase = this.GetInputValue("upcase", cache);
		var uppercase;
		
		if (isNaN(sep)) {sep = ' ';}
		if (isNaN(upcase)) {upcase = false;}
		
		if (upcase == true){
			var uppercase = (word)=> word.toUpperCase();
		} else {
			var uppercase = '';
		}
		
        const output = (randomWords({exactly:amount, wordsPerString:perstring, separator:sep, formatter:uppercase}))

        this.StoreOutputValue(output, "output", cache);	
        this.RunNextBlock("action", cache);
    }
}