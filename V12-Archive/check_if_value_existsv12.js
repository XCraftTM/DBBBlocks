module.exports = {
    name: "Check If Value Exists With Bool",

    description: "Checks if the value exists.",

    category: ".Panso",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to check if exists.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action (If True)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if the value exists.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If False)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if the value does not exists.",
            "types": ["action"]
        },
        {
            "id": "boolean",
            "name": "Boolean",
            "description": "Type: Boolean\n\nDescription: Sendsa a true/false depending on what happened.",
            "types": ["boolean"]
        },
      
      
    ],

    code: function(cache) {
        const value = this.GetInputValue("value", cache);
      let bool = value
        var idk
        var one = true
        var two = false

        
        if(bool = true){
          var idk = true;
        }
        if(bool = false){
          var idk = false
        }
      
        
        this.StoreOutputValue(value ? one : two, "boolean", cache);
        this.RunNextBlock(value ? "action1" : "action2", cache);
    }
}