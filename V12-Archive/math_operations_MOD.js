module.exports = {
    name: "Math Operations [MOD]",

    description: "Performs mathematical operation between two numbers.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "number1",
            "name": "First Number",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The first number to perform a mathematical operation with the second number.",
            "types": ["number", "unspecified"]
        },
        {
            "id": "number2",
            "name": "Second Number",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The second number to perform a mathematical operation with the first number.",
            "types": ["number", "unspecified"]
        },
        {
            "id": "math_operation_type",
            "name": "Operation",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: + (Addition); - (Subtraction); / (Division); * (Multiplication); % (Modulo); ^ (Exponentiation)",
            "types": ["text", "unspecified"],
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
            "id": "number",
            "name": "Number",
            "description": "Type: Number\n\nDescription: The number obtained from the mathematical operation between the two numbers.",
            "types": ["number"]
        }
    ],

    code(cache) {
        const number1 = parseFloat(this.GetInputValue("number1", cache));
        const number2 = parseFloat(this.GetInputValue("number2", cache));
        const math_operation_type = this.GetInputValue("math_operation_type", cache);

        let result;
        switch(math_operation_type) {
            case "+":
                result = number1 + number2;
                break;
            case "-":
                result = number1 - number2;
                break;
            case "/":
                result = number1 / number2;
                break;
            case "*":
                result = number1 * number2;
                break;
            case "%":
                result = number1 % number2;
                break;
            case "^":
                result = number1 ** number2;
                break;
        }

        this.StoreOutputValue(result, "number", cache);
        this.RunNextBlock("action", cache);
    }
}