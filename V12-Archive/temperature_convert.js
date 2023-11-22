module.exports = {
    name: "Temperature Convert",

    description: "Converts an temperature.",

    category: "Unit Convert",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "temperature",
            "name": "Temperature",
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
                "c": "Celsius",
                "k": "Kelvin",
                "f": "Fahrenheit",
            },
        },
        {
            "id": "output",
            "name": "To:",
            "description": "bla",
            "type": "SELECT",
            "options": {
                "c": "Celsius",
                "k": "Kelvin",
                "f": "Fahrenheit",
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
        const temperature = this.GetInputValue("temperature", cache)
        const input = this.GetOptionValue("input", cache)
        const output = this.GetOptionValue("output", cache)

        const tempConverter = temp => {
            const degree = temp[temp.length-1];
         let converted;
             if(degree === "C") {
               converted = (parseInt(temp) * 9 / 5 + 32).toFixed(2) + "F";
            }else {
               converted = ((parseInt(temp) -32) * 5 / 9).toFixed(2) + "C";
           };
           return converted;
          };

        let Celsius
        switch(input){
            case "c":
                Celsius =  temperature + "C"
                break;
            case "k":
                Celsius = temperature - 272.15 + "C"
                break;
            case "f":
                Celsius = tempConverter(temperature + "F")
                break;
        }

        let r
        switch(output){
            case "mm":
                case "c":
                    r =  parseInt(Celsius)
                    break;
                case "k":
                    r = parseInt(Celsius) + 272.15
                    break;
                case "f":
                    r = parseInt(tempConverter(Celsius)) 
                    break;
        }


        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }
}