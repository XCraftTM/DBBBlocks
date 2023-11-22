module.exports = {
    name: "Check If Odd Or Even",

    description: "Checks If Odd or Even With Options",

    category: ".ENEMY",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "Input1",
            "name": "Input Number",
            "description": "Acceptable Types: Number - Check if odd or even.",
            "types": ["number"],
            "required": true
        },
        {
            "id": "Input2",
            "name": "Value If Even",
            "description": "Value to Apply If Even.",
             "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": false
        },
		{
            "id": "Input3",
            "name": "Value If Odd",
            "description": "Value To Apply If Odd",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": false
        }
    ],

    options: [],

    outputs: [
	    {
            "id": "action",
            "name": "Action(Normal)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
	
        {
            "id": "action2",
            "name": "Action(If Even)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
		
        {
            "id": "action3",
            "name": "Action(If Odd)",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },		
		{
            "id": "outputtext",
            "name": "Output Value",
            "description": "Output Value",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },

		{
            "id": "outputtext2",
            "name": "Boolean",
            "description": "Type: Text\n\nDescription: Outputs True Or False Boolean",
            "types": ["boolean"]
        }
		
    ],

    code(cache) {
    const TF = this.GetInputValue("Input1", cache);
	const evenInput = this.GetInputValue("Input2", cache) + "";
    const oddInput = this.GetInputValue("Input3", cache) + "";
	
   if(TF % 2==0){
   output = true
   this.StoreOutputValue(evenInput, "outputtext", cache);
   this.StoreOutputValue(output, "outputtext2", cache);
   this.RunNextBlock("action2", cache);
   //The number is even
   }
    else {
   output = false
   this.StoreOutputValue(oddInput, "outputtext", cache);
   this.StoreOutputValue(output, "outputtext2", cache);
   this.RunNextBlock("action3", cache);
   //The number is odd
   }
	
	this.RunNextBlock("action", cache);
  }
	


	//Created by EnemyYegar. Modify as needed
	
	
	
	
}