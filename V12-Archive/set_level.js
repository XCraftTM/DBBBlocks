module.exports = {
    name: "Set Level (Data)",

    description: "Set a Level",

    category: "Easy Levels",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "name",
            "name": "Data name of Level",
            "description": "Description: The name of the level (data)",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "value",
            "name": "Amount to set to",
            "description": "Description: The amount of levels to set",
            "types": ["number", "unspecified"],
            "required": true
        },
        {
            "id": "target",
            "name": "Member",
            "description": "Description: The member to set the level of",
            "types": ["object", "text", "unspecified"]
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
            "id": "actionerror",
            "name": "Action (Error)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
		{
			"id": "newcur",
            "name": "Amount of new currency",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["object", "text", "unspecified"]
		}
    ],

    code(cache) {
        const name = this.GetInputValue("name", cache) + "";
        let value = this.GetInputValue("value", cache);
        const target = this.GetInputValue("target", cache);	
		let data;
		const value2 = parseInt(value);
		
		if (value2 >= Number('0')) {
        data = this.getData(name, typeof target == "object" ? target.id : target, "member");
		this.setData(name, value2, typeof target == "object" ? target.id : target, "member");
        this.StoreOutputValue(value, "newcur", cache);
        this.RunNextBlock("action", cache);
		} else {
			this.RunNextBlock("actionerror", cache);
		}


    }
}