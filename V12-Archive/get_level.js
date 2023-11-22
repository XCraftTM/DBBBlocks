module.exports = {
    name: "Get Level (Data)",

    description: "Get the level of a member",

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
            "id": "target",
            "name": "Member",
            "description": "Description: The member to get the level off",
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
            "name": "level",
            "description": "Description: Amount of levels of member",
            "types": ["object", "text", "unspecified", "number"]
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