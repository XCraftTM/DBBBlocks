 module.exports = {
    name: "Check If User Blacklisted",

    description: "Checks if the user is blacklisted",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "target",
            "name": "User | Member",
            "description": "The user to check if blacklisted",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "comname",
            "name": "Command Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name of the command you wish to blacklist. If no command name is provided, it will work, but only if the check if user blacklisted block that corrosponds to this is also empty",
            "types": ["text", "unspecified"]
        }  
    ],

    options: [
        {
            "id": "data_type",
            "name": "Data Type",
            "description": "Description: The type of the data. If not \"None\", you need to put a value in the \"Server/Member/User\" input depending on which option you selected here.",
            "type": "SELECT",
            "options": {
                1: "Member",
                2: "User"
            }
        }
    ],

    outputs: [ {
        "id": "action1",
        "name": "Action (If True)",
        "description": "Type: Action\n\nDescription: Executes the following blocks if the value exists.",
        "types": ["action"]
    },
    {
        "id": "action2",
        "name": "Action (If False)",
        "description": "Type: Action\n\nDescription: Executes the following blocks if the value does not exists.",
        "types": ["action"]
    }],

    code: function(cache) {
        let tmp = this.GetInputValue("comname", cache);
        if(tmp == undefined)
        {
            tmp = "";
        }
        const name =  "BLACKLISTED" + tmp + "";
        const target = this.GetInputValue("target", cache);
        const data_type = this.GetOptionValue("data_type", cache);

        if(data_type == 1) {
            result = "member"
        }else{
            result = "user"
        }
        data = this.getData(name, target.id, result);
        this.RunNextBlock(data ? "action1" : "action2", cache);
    }
};