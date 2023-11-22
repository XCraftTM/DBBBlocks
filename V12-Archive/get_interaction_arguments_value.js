module.exports = {
    name: "Get Interaction Argument Value",

    description: "Gets the Argument Value from an Interaction(e.g. Slash Command) by @XCraftTM",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "arguments",
            "name": "Arguments",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The Arguments List",
            "types": ["list", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "number",
            "name": "Argument Number",
            "description": "Description: The position to get the item from the list.",
            "type": "SELECT",
            "options": {
                "1": "1",
				"2": "2",
                "3": "3",
                "4": "4",
                "5": "5"
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
            "id": "name",
            "name": "Name",
            "description": "Type: text\n\nDescription: The Property Name Obtained.",
            "types": ["text", "unspecified"]
        },
		{
            "id": "type",
            "name": "Type",
            "description": "Type: number\n\nDescription: The Property Type Obtained.",
            "types": ["number", "unspecified"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Type: unspecified\n\nDescription: The Property Value Obtained.",
            "types": ["unspecified"]
        }
    ],

    code(cache) {
        const arguments = this.GetInputValue("arguments", cache);
        const number = this.GetOptionValue("number", cache);
		
		let value;
        switch(number) {
            case "1":
                value = arguments[0];
                break;
			case "2":
                value = arguments[1];
                break;
            case "3":
                value = arguments[2];
                break;
            case "4":
                value = arguments[3];
                break;
            case "5":
                value = arguments[4];
                break;
        }

        this.StoreOutputValue(value["name"], "name", cache);
		this.StoreOutputValue(value["type"], "type", cache);
		this.StoreOutputValue(value["value"], "value", cache);
        this.RunNextBlock("action", cache);
    }
}