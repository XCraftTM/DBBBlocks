module.exports = {
    name: "Add Level (Data)",

    description: "Add Levels to your Levels",

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
            "description": "Description: The name of the Level (data)",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "value",
            "name": "Amount to add",
            "description": "Description: The amount of Levels to add",
            "types": ["number", "unspecified"],
            "required": true
        },
        {
            "id": "target",
            "name": "Member",
            "description": "Description: The member to add the Levels to",
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
            "name": "New Level",
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
		data = this.getData(name, typeof target == "object" ? target.id : target, "member");
				
				
		if (value2 >= Number('0') && data !== ("undefined") && (!isNaN(data))){

		this.setData(name, (data+value2), typeof target == "object" ? target.id : target, "member");
        this.StoreOutputValue((value2+data), "newcur", cache);
        this.RunNextBlock("action", cache);
		} else {
		this.RunNextBlock("actionerror", cache);
		}
    }
}