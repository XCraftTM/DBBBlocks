module.exports = {
    name: "Time Convert",

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
            "id": "time",
            "name": "Time",
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
                "ms": "Miliseconds",
                "s": "Seconds",
                "m": "Minutes",
                "h": "Hours",
                "d": "Days",
                "w": "Weeks",
                "mon": "Months",
                "y": "Years"
            },
        },
        {
            "id": "output",
            "name": "To:",
            "description": "bla",
            "type": "SELECT",
            "options": {
                "ms": "Miliseconds",
                "s": "Seconds",
                "m": "Minutes",
                "h": "Hours",
                "d": "Days",
                "w": "Weeks",
                "mon": "Months",
                "y": "Years"
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
        const time = this.GetInputValue("time", cache)
        const input = this.GetOptionValue("input", cache)
        const output = this.GetOptionValue("output", cache)

        var ms
        switch(input){
            case "y":
                ms = time * 1000 * 60 * 60 * 24 * 365
                break;
            case "mon":
                ms = time * 1000 * 60 *60 * 24 * 30
                break;
            case "w":
                ms = time * 1000 * 60 * 60 * 24 * 7
                break;
            case "d":
                ms = time * 1000 * 60 * 60 * 24
                break;
            case "h":
                ms = time * 1000 * 60 * 60
                break;
            case "m":
                ms = time  * 1000 * 60
                break;
            case "s":
                ms = time * 1000
                break;
            case "ms":
                ms = time
                break;
        }

        let r
        switch(output){
            case "ms":
                r = ms
                break;
            case "s":
                r = ms / 1000
            case "m":
                r = ms / 1000 / 60
                break;
            case "h":
                r = ms / 1000 / 60 / 60
                break;
            case "d":
                r = ms / 1000 / 60 / 60 / 24
                break;
            case "w":
                r = ms / 1000 / 60 / 60 / 24 / 7
                break;
            case "mon":
                r = ms / 1000 / 60 / 60 / 24 / 30
                break;
            case "y":
                r = ms / 1000 / 60 / 60 / 24 / 365
                break;
        }


        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }
}