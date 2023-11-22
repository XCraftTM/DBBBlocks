module.exports = {
    name: "Progressbar",

    description: "customizable progress bar generator",

    category: "Data Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "current",
            "name": "current",
            "description": "current % (min 0) number value",
            "types": ["number"]
        },
        {
            "id": "total",
            "name": "total",
            "description": "Total % (max 100) number value",
            "types": ["number"]
        }

    ],

    options: [

        {
            "id": "input",
            "name": "Styles:",
            "description": "2 Different Styles",
            "type": "SELECT",
            "options": {
                "A": "splitBar",
                "B": "filledBar"
                
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
            "name": "result",
            "description": "Type: Unspecified\n\nDescription: The value of the variable.",
            "types": ["text"]
        }
    ],

   async code(cache) {
        const progressbar  = await this.require('string-progressbar');
        const current = this.GetInputValue("current", cache);
        const total = this.GetInputValue("total", cache);
        const input = this.GetOptionValue("input", cache);

        let r
        switch (input) {
            case "A":
                r = progressbar.splitBar(total, current)
                break;
            case "B":
                r = progressbar.filledBar(total, current)
                break;
        }


        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }

}