module.exports = {
    name: "Get Data.JSON",

    description: "Gets the locally stored data.json",

    category: "Data Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
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
            "id": "data",
            "name": "Data.JSON",
            "description": "Data.JSON",
            "types": ["unspecified"]
        }
    ],

    code(cache) {



		const data = this.getDBB().Data.data.discord;
		
    this.StoreOutputValue(data, "data", cache);	
    this.RunNextBlock("action", cache);
        
    }
}