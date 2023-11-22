module.exports = {
    name: "Check if hex is color",

    description: "Gets the hex code of a color name",

    category: ".Panso",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "color",
            "name": "Color Hex",
            "description": "Acceptable Types: Action\n\nDescription: The color you want to get info from",
            "types": ["text", "unspecified"],
            "required": true
        },
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action if true",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action if false",
            "description": "Type: Text\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },

    ],

    async code(cache) {
        let input = this.GetInputValue("color", cache) + ""
        input = input.replace("#", "")

        if(input.length == 6){
            var list = input.split("")
           if(parseInt(list[0] + list[1], 16) <= 255 &&  parseInt(list[2] + list[3], 16) <= 255 && parseInt(list[4] + list[5], 16) <= 255){
            this.RunNextBlock("action", cache);
           }
           else{
               this.RunNextBlock("action2", cache)
           }
        }
        else{
            this.RunNextBlock("action2", cache)
        }
    }
}