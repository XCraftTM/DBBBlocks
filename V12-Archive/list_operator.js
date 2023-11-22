module.exports = {
    name: "List Operator",

    description: "Mathematically operates a list of numbers.",

    category: ".Panso",


    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Activates the block.",
            "types": ["action"] 
        },
        {
            "id": "list",
            "name": "List",
            "description": "Description: THe list of numbers",
            "types": ["list", "undefined", "null"],
            "required": true
        }
    ],

    options: [
        {
            "id": "operator",
            "name": "Operator",
            "description": "Description: The operations to do to the list of numbers.",
            "type": "SELECT",
            "options": {
                "+": "Addition (+)",
                "-": "Substraction (-)",
                "*": "Multiplication (x)",
                "/": "Division (/)",
                "%": "Modulo (%)",
                "**": "Exponentation (^)"
            }

        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Runs next blocks.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Result",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["number"]
        }
    ],

    code(cache) {
        var list = this.GetInputValue("list", cache)
        let operator = this.GetOptionValue("operator", cache);
        let result = 0

        switch(operator){
            case "+":
                result = list.reduce((a, b) => a + b);
                break;
            case "-":
                result = list.reduce((a, b) => a - b);
                break;
            case "*":
                result = list.reduce((a, b) => a * b);
                break;
            case "/":
                result = list.reduce((a, b) => a / b);
                break;
            case "%":
                result = list.reduce((a, b) => a % b);
                break;
            case "**":
                result = list.reduce((a, b) => a ** b);
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
}