module.exports = {
    name: "Control Economy",

    description: "Add/Subtract/Set a numeral value to a data or just get it's info.",

    category: "Easy Economy 2.0",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "currency",
            "name": "Currency Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name for this data.",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: The member for the data.",
            "types": ["object", "text", "unspecified"],
            "required": true
        },
        {
            "id": "amount",
            "name": "Amount",
            "description": "Acceptable Types: Number, Text, Unspecified\n\nDescription: The number for this data.",
            "types": ["number", "text", "unspecified"],
        },

    ],

    options: [
        {
            "id": "action_type",
            "name": "Action Type",
            "description": "Description: The type of action for this data. Inserted a number in the \"Amount\" input add to the current number in the data or use a negative number to subtract.",
            "type": "SELECT",
            "options": {
                "set": "Set",
                "add": "Add",
                "subtract": "Subtract",
                "get": "Get"
            },

        },
        {
            "id": "filter",
            "name": "Negative Filter",
            "description": "Description: Triggers the error action if it finds the data going negative. It will not detect the amount input",
            "type": "SELECT",
            "options": {
                "yes": "Yes",
                "no": "No",
            },

        },
    ],

    outputs: [
        {
            "id": "action1",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (Error)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if this block founds an error.",
            "types": ["action"]
        },
        {
            "id": "currency",
            "name": "New currency",
            "description": "Type: Action\n\nDescription: The new member's currency.",
            "types": ["number", "unspecified"]
        }
    ],

    code(cache) {
        const name = this.GetInputValue("currency", cache) + ""
        const amount = parseInt(this.GetInputValue("amount", cache))
        const member = this.GetInputValue("member", cache).id + this.GetInputValue("member", cache).guild.id 
        const action = this.GetOptionValue("action_type", cache)
        const old_data = this.getData(name, member, "member") ? this.getData(name, member, "member") : 0 
        const filter = this.GetOptionValue("filter", cache)

        if(action == "get"){
            this.StoreOutputValue(this.getData(name, member, "member"), "currency", cache)
            this.RunNextBlock("action1", cache)
        }
        else {
         if(isNaN(amount)){this.RunNextBlock("action2", cache)}
         else if(filter == "yes" && action == "subtract" && old_data - amount < 0){this.RunNextBlock("action2", cache)}
         else if(filter == "yes" && action == "add" && old_data + amount < 0){this.RunNextBlock("action2", cache)}
         else if(filter == "yes" && action == "set" && amount < 0){this.RunNextBlock("action2", cache)}
         else{
             switch(action){
                 case "set":
                     this.setData(name, amount, member, "member")
                     break;
                 case "add":
                     this.setData(name, old_data + amount, member, "member")
                     break;
                 case "subtract":
                     this.setData(name, old_data - amount, member, "member")
                     break;
             }
             const new_data = this.getData(name, member, "member")
             this.StoreOutputValue(new_data, "currency", cache)
             this.RunNextBlock("action1", cache)
           }
       }
    }
}