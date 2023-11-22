module.exports = {
    name: "Length Convert",

    description: "Converts an amount of distance.",

    category: "Unit Convert",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "length",
            "name": "Length",
            "description": "Acceptable Types: Number, Text, Unespecified\n\nDescription: The number that will be converted.",
            "types": ["number", "text", "unspecified", "null"]
        },
    ],

    options: [
        {
            "id": "input",
            "name": "Convert From:",
            "description": "Description: The type of the data. If not \"None\", you need to put a value in the \"Server/Member/User\" input depending on which option you selected here.",
            "type": "SELECT",
            "options": {
                "mm": "Millimeter",
                "cm": "Centimeter",
                "m": "Meter",
                "km": "Kilometer",
                "ml": "Mile",
                "y": "Yard",
                "f": "Foot",
                "i": "Inch",
            },
        },
        {
            "id": "output",
            "name": "To:",
            "description": "bla",
            "type": "SELECT",
            "options": {
                "mm": "Millimeter",
                "cm": "Centimeter",
                "m": "Meter",
                "km": "Kilometer",
                "ml": "Mile",
                "y": "Yard",
                "f": "Foot",
                "i": "Inch",
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
            "description": "Type: Unspecified\n\nDescription: The value of the data.",
            "types": ["number", "unspecified"]
        }
    ],

    code(cache) {
        const length = this.GetInputValue("length", cache)
        const input = this.GetOptionValue("input", cache)
        const output = this.GetOptionValue("output", cache)

        let mm
        switch(input){
            case "mm":
                mm =  length
                break;
            case "cm":
                mm = length * 10
                break;
            case "m":
                mm = length * 1000
                break;
            case "km":
                mm = length * 1000000
                break;
            case "ml":
                mm = length * 1609350
                break;
            case "y":
                mm = length * 914.4
                break;
            case "f":
                mm = length * 304.8
                break;
            case "i":
                mm = length * 25.4
                break;
        }

        let r
        switch(output){
            case "mm":
                r =  mm
                break;
            case "cm":
                r = mm / 10
                break;
            case "m":
                r = mm / 1000
                break;
            case "km":
                r = mm / 1000000
                break;
            case "ml":
                r = mm / 1609350
                break;
            case "y":
                r = mm / 914.4
                break;
            case "f":
                r = mm / 304.8
                break;
            case "i":
                r = mm / 25.4
                break;
        }


        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }
}