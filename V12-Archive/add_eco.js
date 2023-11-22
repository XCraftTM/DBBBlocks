module.exports = {
    name: "Add Currency (Data)",

    description: "Add Currency to your currency",

    category: "Easy Economy",

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
            "name": "Data name of Currency",
            "description": "Description: The name of the currency (data)",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "value",
            "name": "Amount to add",
            "description": "Description: The amount of currnecy to add",
            "types": ["number", "unspecified"],
            "required": true
        },
        {
            "id": "target",
            "name": "Member",
            "description": "Description: The member to add the currency to",
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
            "types": ["number"]
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