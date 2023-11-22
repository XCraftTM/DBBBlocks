module.exports = {
    name: "Get Currency (Data)",

    description: "Get the currency of a member",

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
            "id": "target",
            "name": "Member",
            "description": "Description: The member to get the currency off",
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
			"id": "newcur",
            "name": "Currnency",
            "description": "Description: Amount of currency of member",
            "types": ["number"]
		}
    ],

    code(cache) {
        const name = this.GetInputValue("name", cache) + "";
        const target = this.GetInputValue("target", cache);	
		let data;
		
        data = this.getData(name, typeof target == "object" ? target.id : target, "member");

        this.StoreOutputValue(data, "newcur", cache);
        this.RunNextBlock("action", cache);
    }
}