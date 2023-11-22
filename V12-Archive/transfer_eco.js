module.exports = {
    name: "Transfer Currency (Data)",

    description: "Transfer currency from Sending Member to Receiving Member",

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
            "name": "Amount to send",
            "description": "Description: The amount of currnecy to add",
            "types": ["number", "unspecified"],
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
            "description": "Type: Action\n\nDescription: Excucutes following block if error (Sender negative value or trying to send ",
            "types": ["action"]
        },
		{
			"id": "newsend",
            "name": "New currency of Sending Member",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["number"]
		},
		{
			"id": "newreceiving",
            "name": "New currency of Receiving Member",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["number"]
		}
    ],

code(cache) {
    const name = this.GetInputValue("name", cache) + "";
    let value = this.GetInputValue("value", cache);
    const target = this.GetInputValue("target", cache);    
    const sender = this.GetInputValue("sender", cache);    
    let datasender;
    let datareceiver;
    datasender = this.getData(name, typeof sender == "object" ? sender.id : sender, "member");
    datareceiver = this.getData(name, typeof target == "object" ? target.id : target, "member");

    const value2 = parseInt(value);

    if (((datasender-value2) >= Number('0')) && (value2 >= Number('0')) && datareceiver !== ("undefined") && datasender !== ("undefined") && (!isNaN(datasender)) && (!isNaN(datareceiver))) {
    // Sender value change
    this.setData(name, (datasender-value2), typeof sender == "object" ? sender.id : sender, "member");
    // Receiving value change
    this.setData(name, (datareceiver+value2), typeof target == "object" ? target.id : target, "member");
    // Setup data for next blocks
    this.StoreOutputValue((datasender-value2), "newsend", cache);
    this.StoreOutputValue((datareceiver+value2), "newreceiving", cache);
    this.RunNextBlock("action", cache);
}  else {
    this.RunNextBlock("actionerror", cache);
}
}
}