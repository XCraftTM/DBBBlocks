 module.exports = {
    name: "Translate",

    description: "Translate any language to any language",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "types": ["action"]           
        },
        {
            "id": "text",
            "name": "Text to translate",
	        "description": "The text to translate",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "custom",
            "name": "Custom lanuage",
	        "description": "Custom lanuage (en/es/ja or anything else)",
            "types": ["text", "unspecified"]
        }
    ],

    options: [
	        {
            "id": "type",
            "name": "Translation Language",
            "description": "The language to translate to",
            "type": "SELECT",
            "options": {
                1: "English",
                2: "Custom"
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
            "name": "Translated output",
            "description": "The translated output",
            "types": ["text", "unspecified"]
        },
        {
            "id": "auto",
            "name": "Auto Corrected?",
            "description": "Is the output auto corrected?",
            "types": ["boolean", "unspecified"]
        },
        {
            "id": "didyoucheck",
            "name": "Is the engine sure?",
            "description": "Is the engine sure that the input text has been translated right? \nTrue = Sure \nFalse = Not sure",
            "types": ["boolean", "unspecified"]
        },	
        {
            "id": "didyoumean",
            "name": "Did you mean?",
            "description": "The output if the engine is not sure the sentence is correct",
            "types": ["text", "unspecified"]
        }		
    ],

    async code(cache) {
        const translate = await this.require('@vitalets/google-translate-api');
        const translateable = this.GetInputValue("text", cache);
        const custom = this.GetInputValue("custom", cache);
        const type = parseInt(this.GetOptionValue("type", cache));
		
		let result;

		    switch(type) {
        case 1:
            result = "en";
            break;
        case 2:
            result = custom;
            break;
			}
			
		if (!isNaN(result)) { 
		   result = "en";
		}
		
        const res = await translate(translateable, {to: result})
		const output = res.text;
		const auto = res.from.text.autoCorrected;
		const didyoumean = res.from.text.value;
		const check = !res.from.text.didYouMean;
		
		this.StoreOutputValue(check ,"didyoucheck", cache);
		this.StoreOutputValue(didyoumean ,"didyoumean", cache);				
		this.StoreOutputValue(auto ,"auto", cache);		
		this.StoreOutputValue(output ,"output", cache);
        this.RunNextBlock('action', cache);
    }
};