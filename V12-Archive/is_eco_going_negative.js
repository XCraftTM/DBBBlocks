module.exports = {
    name: "Is Currency GOING TO BE Negative?",

    description: "Checks if the currency is negative. Value 1 is base value, Value 2 is the value to retract.",

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
            "id": "value1",
            "name": "Value 1",
            "description": "Description: The base value",
            "types": ["number", "unspecified"],
            "required": true
        },
        {
            "id": "value2",
            "name": "Value 2",
            "description": "Description: The value to retract",
            "types": ["number", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action (If Positive)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if true.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If Negative)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if false.",
            "types": ["action"]
        }
    ],

    code(cache) {
    const value1 = this.GetInputValue("value1", cache);
    const value2 = this.GetInputValue("value2", cache);
	
	const isnega = (value1-value2);

    if (isnega >= 0) {
        this.RunNextBlock("action1", cache);
     } else {
        this.RunNextBlock("action2", cache);
     }
    }
}