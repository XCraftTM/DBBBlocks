module.exports = {
    name: "Loop List MOD",

    description: "Loops the list. For each item in the list, this will return its position number and value. With the added possibility of a delay between each loop",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "list",
            "name": "List",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to loop.",
            "types": ["list", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "delay",
            "name": "Loop Delay",
            "description": "Description: How long to wait between each loop.\n\nIf no number is given here, there will be no delay.",
            "type": "NUMBER"
        },
        {
            "id": "type",
            "name": "Time Unit",
            "description": "Description: Defines what time unit to use for the delay option.",
            "type": "SELECT",
            "options": {
                "ms": "Milisecond",
                "s": "Second",
                "m": "Minute"
            }   
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks for each item in the list.",
            "types": ["action"]
        },
        {
            "id": "index",
            "name": "Position Number",
            "description": "Type: Number\n\nDescription: The item's position number in the list. Starts at \"0\".",
            "types": ["number"]
        },
        {
            "id": "value",
            "name": "Item Value",
            "description": "Type: Unspecified\n\nDescription: The value of the list item.",
            "types": ["unspecified"]
        }
    ],

    async code(cache) {
        const list = this.GetInputValue("list", cache);
        let time = this.GetOptionValue("delay", cache) || 0;
        let type = this.GetOptionValue("type", cache);
        if(type != "ms")
        {
            if(type == "s")
            {
                time = time * 1000;
            }
            else
            {
                time = time * 60 * 1000;
            }
        }
        const sleep = ms => {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
        for (const [index, value] of Object.entries(list)) {
            this.StoreOutputValue(index, "index", cache);
            this.StoreOutputValue(value, "value", cache);
            this.RunNextBlock("action", cache);
            await sleep(time);
        }
    }
}

//function sleep(milliseconds) {
//    const date = Date.now();
//    let currentDate = null;
//    do {
//      currentDate = Date.now();
//    } while (currentDate - date < milliseconds);
//}