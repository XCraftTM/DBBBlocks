module.exports = {
    name: "Number Convert",

    description: "Converts numbers between different numeral systems.",

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
            "types": ["text", "number", "unspecified"]
        },
    ],

    options: [
        {
            "id": "input",
            "name": "Convert From:",
            "description": "Description: The type of data you are implementing in the input",
            "type": "SELECT",
            "options": {
                "2": "Base 2 (Binary)",
                "3": "Base 3",
                "4": "Base 4",
                "5": "Base 5",
                "6": "Base 6",
                "7": "Base 7",
                "8": "Base 8 (Octal)",
                "9": "Base 9",
                "10": "Base 10 (Decimal)",
                "11": "Base 11",
                "12": "Base 12",
                "13": "Base 13",
                "14": "Base 14",
                "15": "Base 15",
                "16": "Base 16 (Hexadecimal)",
                "17": "Base 17",
                "18": "Base 18",
                "19": "Base 19",
                "20": "Base 20",
                "21": "Base 21",
                "22": "Base 22",
                "23": "Base 23",
                "24": "Base 24",
                "25": "Base 25",
                "26": "Base 26",
                "27": "Base 27",
                "28": "Base 28",
                "29": "Base 29",
                "30": "Base 30",
                "31": "Base 31",
                "32": "Base 32",
                "33": "Base 33",
                "34": "Base 34",
                "35": "Base 35",
                "36": "Base 36",
            },
        },
        {
            "id": "output",
            "name": "To:",
            "description": "The data type you want the block to convert to",
            "type": "SELECT",
            "options": {
                "2": "Base 2 (Binary)",
                "3": "Base 3",
                "4": "Base 4",
                "5": "Base 5",
                "6": "Base 6",
                "7": "Base 7",
                "8": "Base 8 (Octal)",
                "9": "Base 9",
                "10": "Base 10 (Decimal)",
                "11": "Base 11",
                "12": "Base 12",
                "13": "Base 13",
                "14": "Base 14",
                "15": "Base 15",
                "16": "Base 16 (Hexadecimal)",
                "17": "Base 17",
                "18": "Base 18",
                "19": "Base 19",
                "20": "Base 20",
                "21": "Base 21",
                "22": "Base 22",
                "23": "Base 23",
                "24": "Base 24",
                "25": "Base 25",
                "26": "Base 26",
                "27": "Base 27",
                "28": "Base 28",
                "29": "Base 29",
                "30": "Base 30",
                "31": "Base 31",
                "32": "Base 32",
                "33": "Base 33",
                "34": "Base 34",
                "35": "Base 35",
                "36": "Base 36",
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
            "types": ["text", "number", "unspecified"]
        }
    ],

    code(cache) {
        const number = this.GetInputValue("number", cache)
        const input = this.GetOptionValue("input", cache)
        const output = this.GetOptionValue("output", cache)

        var decimal = parseInt(number, parseInt(input))
        var r = decimal.toString(parseInt(output))


        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }
}