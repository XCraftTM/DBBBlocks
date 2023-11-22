module.exports = {
    name: "Button Style",

    description: "Block to use in your buttons.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "style",
            "name": "Style",
            "description": "Type: Text\n\nDescription: The Style of the Button. [blurple], [grey], [green], [red], [url]",
            "type": "SELECT",
            "options": {                
                "blurple": "Blurple / Primary",
                "grey": "Grey / Secondary",
                "green": "Green / Success",
                "red": "Red / Destructive",
                "url": "Link / Url"
            }
        }
    ],

    outputs: [
        {
            "id": "style",
            "name": "Style",
            "description": "Type: Text\n\nDescription: The Style of your choice for the Button",
            "types": ["text"]
        }
    ],

    code(cache) {
        this.StoreOutputValue(this.GetOptionValue("style", cache), "style", cache, "inputBlock");        
    }
}