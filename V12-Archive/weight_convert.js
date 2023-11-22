module.exports = {
    name: "Weight Convert",

    description: "Converts an amount of time.",

    category: "Unit Convert",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "weight",
            "name": "Weight",
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
                "mg": "Milligram",
                "g": "Gram",
                "kg": "Kilogram",
                "t": "Ton",
                "p": "Pound",
                "o": "Ounce",
                "c": "Carrat"
            },
        },
        {
            "id": "output",
            "name": "To:",
            "description": "bla",
            "type": "SELECT",
            "options": {
                "mg": "Milligram",
                "g": "Gram",
                "kg": "Kilogram",
                "t": "Ton",
                "p": "Pound",
                "o": "Ounce",
                "c": "Carrat"
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
        const weight = this.GetInputValue("weight", cache)
        const input = this.GetOptionValue("input", cache)
        const output = this.GetOptionValue("output", cache)

        let mg
        switch(input){
            case "mg":
                mg = weight
                break;
            case "g":
                mg = weight * 1000 
                break;
            case "kg":
                mg = weight * 1000000
                break;
            case "t":
                mg = weight * 1000000000
                break;
            case "p":
                mg = weight * 453592
                break;
            case "o":
                mg = weight  * 28349.5
                break;
            case "c":
                mg = weight * 200
                break;
        }

        let r
        switch(output){
            case "mg":
                r = mg
                break;
            case "g":
                r = mg / 1000 
                break;
            case "kg":
                r = mg / 1000000
                break;
            case "t":
                r = mg / 1000000000
                break;
            case "p":
                r = mg / 453592
                break;
            case "o":
                r = mg  / 28349.5
                break;
            case "c":
                r = mg / 200
                break;
        }


        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }
}