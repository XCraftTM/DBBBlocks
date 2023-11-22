module.exports = {
    name: "Get Data [with text]",

    description: "Gets the value of the data.",

    category: "Data Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "target",
            "name": "Server/Member/User",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: The server/member/user of the data. Supports server/member/user ID. Only use this input if you have not select the option \"None\" in \"Data Type\". (OPTIONAL)",
            "types": ["object", "text", "unspecified"]
        }
    ],

    options: [
        {
            "id": "data_type",
            "name": "Data Type",
            "description": "Description: The type of the data. If not \"None\", you need to put a value in the \"Server/Member/User\" input depending on which option you selected here.",
            "type": "SELECT",
            "options": {
                "none": "None",
                "server": "Server",
                "member": "Member",
                "user": "User"
            }
        },
        {
            "id": "name",
            "name": "Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name of the data.",
            "types": ["text", "unspecified"],
            "required": true
        },
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Type: Unspecified\n\nDescription: The value of the data.",
            "types": ["unspecified"]
        }
    ],

    code(cache) {
        const name = this.GetOptionValue("name", cache) + "";
        const target = this.GetInputValue("target", cache);
        const data_type = this.GetOptionValue("data_type", cache) + "";

        let value;
        if(["server", "user"].includes(data_type)) {
            value = this.getData(name, typeof target == "object" ? target.id : target, data_type);
        }
        if(data_type == "member") {
            value = this.getData(name, typeof target == "object" ? target.id + target.guild.id: target, data_type);
        }

        if(data_type == "none"){ // "none"
            value = this.getData(name);
        }

        this.StoreOutputValue(value, "value", cache);
        this.RunNextBlock("action", cache);
    }
}