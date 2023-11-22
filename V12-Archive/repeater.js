module.exports = {
    name: "Repeater",

    description: "Starts a repeater that puts out an action",

    category: "Extras",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "time",
            "name": "Delay",
            "description": "Time in milliseconds between repeats",
            "types": ["number"],
            "required": true
        },
        {
            "id": "amount",
            "name": "Amount of repeats",
            "description": "Amount of times to loop the action(loop) action",
            "types": ["number"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "actiononce",
            "name": "Action (Once)",
            "description": "This action will run once before the repeater starts",
            "types": ["action"]
        },
        {
            "id": "actionloop",
            "name": "Action (Loop)",
            "description": "This is the repeating output (depending on delay and amount)",
            "types": ["action"]
        },
        {
            "id": "actionend",
            "name": "Action (End)",
            "description": "This is the action that will trigger once the repeater is finished",
            "types": ["action"]
        }
    ],

    code(cache) {
    const time = this.GetInputValue("time", cache);
    const amount = this.GetInputValue("amount", cache);
    let i = 0;
    this.RunNextBlock("actiononce", cache);    

    var interval = setInterval(() => {
		if (i==amount){
            this.RunNextBlock("actionend", cache);
			clearInterval(interval);
		} else {
			i++;
		    this.RunNextBlock("actionloop", cache);
		}

    }, time);
    }
}