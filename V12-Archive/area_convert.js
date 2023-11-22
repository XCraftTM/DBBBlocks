module.exports = {
    name: "Area Convert",

    description: "Converts area units.",

    category: "Unit Convert",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "number",
            "name": "Number",
            "description": "Acceptable Types: Number, Text, Unespecified\n\nDescription: The number that will be converted.",
            "types": ["number", "unspecified"]
        },
    ],

    options: [
        {
            "id": "input",
            "name": "Convert From:",
            "description": "Description: The type of data you are implementing in the input",
            "type": "SELECT",
            "options": {
                "mm": "Square Millimeter",
                "m": "Square Meter",
                "cm": "Square Centimeter",
                "km": "Square Kilometer",
                "hect": "Hectare",
                "M": "Square Mile",
                "Y": "Square Yard",
                "F": "Square Foot",
                "I": "Square Inch",
                "A": "Acre"
            },
        },
        {
            "id": "output",
            "name": "To:",
            "description": "The data type you want the block to convert to",
            "type": "SELECT",
            "options": {
                "mm": "Square Millimeter",
                "m": "Square Meter",
                "cm": "Square Centimeter",
                "km": "Square Kilometer",
                "hect": "Hectare",
                "M": "Square Mile",
                "Y": "Square Yard",
                "F": "Square Foot",
                "I": "Square Inch",
                "A": "Acre"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Value",
            "description": "Type: text, number, unspecified\n\nDescription: The result number.",
            "types": ["number", "unspecified"]
        }
    ],

    code(cache) {
        const number = this.GetInputValue("number", cache)
        const input = this.GetOptionValue("input", cache)
        const output = this.GetOptionValue("output", cache)

        let mm
        switch(input){
            case "mm":
                mm = number
                break;
            case "m":
                mm = number * 1000000
                break;
            case "cm":
                mm = number * 100
                break;
            case "km":
                mm = number * 1000000000000
                break;
            case "hect":
                mm = number * 10000000000
                break;
            case "M":
                mm = number * 2589990000000
                break;
            case "Y":
                mm = number * 836127.36
                break;
            case "F":
                mm = number * 92903.04
                break;
            case "I":
                mm = number * 645.16
                break;
            case "A":
                mm = number * 4046856422.4
                break;
        }

        let r
        switch(output){
            case "mm":
                r = mm
                break;
            case "m":
                r = mm / 1000000
                break;
            case "cm":
                r = mm / 100
                break;
            case "km":
                r = mm / 1000000000000
                break;
            case "hect":
                r = mm / 10000000000
                break;
            case "M":
                r = mm / 2589990000000
                break;
            case "Y":
                r = mm / 836127.36
                break;
            case "F":
                r = mm / 92903.04
                break;
            case "I":
                r = mm / 645.16
                break;
            case "A":
                r = mm / 4046856422.4
                break;
        }


        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }
}