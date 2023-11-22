module.exports = {
    name: "Blacklist",

    description: "Adds/Removes user to Blacklist",

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
            "description": "The user to perform the blacklist on",
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
            "id": "perform_type",
            "name": "Perform Type",
            "description": "The blacklist action to perform on user",
            "type": ["SELECT"],
            "options": {
                1: "Add",
                2: "Remove"
            }
        },
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

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {
        let tmp = this.GetInputValue("comname", cache);
        if(tmp == undefined)
        {
            tmp = "";
        }
        const name =  "BLACKLISTED" + tmp + "";
        const perform_type = this.GetOptionValue("perform_type", cache);
        const target = this.GetInputValue("target", cache);
        const data_type = this.GetOptionValue("data_type", cache);

        if(data_type == 1) {
            result = "member"
        }else{
            result = "user"
        };
        
        if(perform_type == 1) {
            this.setData(name, true, target.id, result);
        }else{
            this.setData(name, false, target.id, result);
        };
        this.RunNextBlock("action", cache);
    }
}