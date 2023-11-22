module.exports = {
    name: "Check bot audio size",

    description: "Check if the audio size.",

    category: "Audio Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to get the bot audio information.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "number",
            "name": "Number",
            "description": "Description: The number to set.",
            "types": ["number", "undefined", "text", "null", "unspecified"]
        }
    ],

    options: [
        {
            "id": "comparison_type",
            "name": "Comparison Type",
            "description": "Description: The type of comparison between the two values.",
            "type": "SELECT",
            "options": {
                "equal": "Equal To",
                "not_equal": "Not Equal",
                "equals_exactly": "Equal Exactly",
                "not_equal_exactly": "Not Equal Exactly",
                "greater_than": "Greater Than",
                "less_than": "Less Than",
                "greater_than_or_equal": "Greater Than or Equal To",
                "less_than_or_equal": "Less Than or Equal To"
            }
        }
    ],

    outputs: [
        {
            "id": "action1",
            "name": "Action if True",
            "description": "Type: Runs the next block.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action if False",
            "description": "Type: Number\n\nDescription: The number.",
            "types": ["action"]
        },
        {
            "id": "outputnumber",
            "name": "Number",
            "description": "Description: The Nummer who is actually quere.",
            "types": ["number"]
        }
    ],

    async code(cache) {
        const server = this.GetInputValue("server", cache);
        const comparison_type = this.GetOptionValue("comparison_type", cache) + "";
        
        const number = this.GetInputValue("number", cache);

        const serverQueue = this.getServerQueue(server.id);
        let quere_length;
        try {
            value1 = serverQueue.queue.length;
            value2 = parseInt(number);
        } catch(exep) {
            value1 = 0;
            value2 = 0;
        };

        let result  = false;
        switch(comparison_type) {
            case "equal":
                result = value1 == value2;
                break;
            case "not_equal":
                result = value1 != value2;
                break;
            case "equals_exactly":
                result = value1 === value2;
                break;
            case "not_equal_exactly":
                result = value1 !== value2;
                break;
            case "greater_than":
                result = value1 > value2;
                break;
            case "less_than":
                result = value1 < value2;
                break;
            case "greater_than_or_equal":
                result = value1 >= value2;
                break;
            case "less_than_or_equal":
                result = value1 <= value2;
                break;
        }
        this.StoreOutputValue(value1, "outputnumber", cache);
        this.RunNextBlock(result ? "action1" : "action2", cache);
    }
}