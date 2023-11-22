module.exports = {
    name: "Transfer Economy",

    description: "Transfer currency from Sending Member to Receiving Member",

    category: "Easy Economy 2.0",

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
            "name": "Currency Name",
            "description": "Description: The name of the currency (data)",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "amount",
            "name": "Amount",
            "description": "Description: The amount of currnecy to add",
            "types": ["number", "text","unspecified"],
            "required": true
        },
        {
            "id": "sender",
            "name": "Sending Member",
            "description": "Description: The member who is sending currency",
            "types": ["object", "text", "unspecified"]
        },
        {
            "id": "target",
            "name": "Receiving Member",
            "description": "Description: The member to add the currency to",
            "types": ["object", "text", "unspecified"]
        }
    ],

    options: [
        {
            "id": "filter",
            "name": "Negative Filter",
            "description": "Description: If true, it will throw an error when it detects a negative number.",
            "type": "SELECT",
            "options": {
                "yes": "Yes",
                "no": "No",
            },

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
            "id": "actionerror",
            "name": "Action (Error)",
            "description": "Type: Action\n\nDescription: Excucutes following block if error (Sender negative value or trying to send ",
            "types": ["action"]
        },
		{
			"id": "newsend",
            "name": "Sending Member's Currency",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["number"]
		},
		{
			"id": "newreceiving",
            "name": "Receiving Member's Currency",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["number"]
		}
    ],

code(cache) {
            const name = this.GetInputValue("name", cache) + "";
            const amount = parseInt(this.GetInputValue("amount", cache))
            const target = this.GetInputValue("target", cache).id + this.GetInputValue("target", cache).guild.id   
            const sender = this.GetInputValue("sender", cache).id + this.GetInputValue("sender", cache).guild.id
            const target_eco = this.getData(name, target, "member") ? this.getData(name, target, "member") : 0 
            const sender_eco = this.getData(name, sender, "member") ? this.getData(name, sender, "member") : 0 

            if(isNaN(amount)){this.RunNextBlock("actionerror", cache)}
            else if(amount < 0 && this.GetOptionValue("filter", cache) == "yes"){this.RunNextBlock("actionerror", cache)}
            else if(sender_eco < amount && this.GetOptionValue("filter", cache) == "yes"){this.RunNextBlock("actionerror", cache)}
            else{

                this.setData(name, target_eco + amount, target, "member" )
                this.setData(name, sender_eco - amount, sender, "member")

                const new_target_eco = this.getData(name, target, "member")
                const new_sender_eco = this.getData(name, sender, "member")
            
                this.StoreOutputValue(new_sender_eco, "newsend", cache)
                this.StoreOutputValue(new_target_eco, "newreceiving", cache)
                this.RunNextBlock("action", cache)
            }
    }
}