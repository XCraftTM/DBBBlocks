module.exports = {
    name: "Button Style x5",

    description: "Select the style for your buttons.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "style1",
            "name": "Style 1",
            "description": "Type: Text\n\nDescription: The Style of the Button. [blurple], [grey], [green], [red], [url]",
            "type": "SELECT",
            "options": {                
                "blurple": "Blurple / Primary",
                "grey": "Grey / Secondary",
                "green": "Green / Success",
                "red": "Red / Destructive",
                "url": "Link / Url"
            }
        },
        {
            "id": "style2",
            "name": "Style 2",
            "description": "Type: Text\n\nDescription: The Style of the Button. [blurple], [grey], [green], [red], [url]",
            "type": "SELECT",
            "options": {                
                "blurple": "Blurple / Primary",
                "grey": "Grey / Secondary",
                "green": "Green / Success",
                "red": "Red / Destructive",
                "url": "Link / Url"
            }
        },
        {
            "id": "style3",
            "name": "Style 3",
            "description": "Type: Text\n\nDescription: The Style of the Button. [blurple], [grey], [green], [red], [url]",
            "type": "SELECT",
            "options": {                
                "blurple": "Blurple / Primary",
                "grey": "Grey / Secondary",
                "green": "Green / Success",
                "red": "Red / Destructive",
                "url": "Link / Url"
            }
        },
        {
            "id": "style4",
            "name": "Style 4",
            "description": "Type: Text\n\nDescription: The Style of the Button. [blurple], [grey], [green], [red], [url]",
            "type": "SELECT",
            "options": {                
                "blurple": "Blurple / Primary",
                "grey": "Grey / Secondary",
                "green": "Green / Success",
                "red": "Red / Destructive",
                "url": "Link / Url"
            }
        },
        {
            "id": "style5",
            "name": "Style 5",
            "description": "Type: Text\n\nDescription: The Style of the Button. [blurple], [grey], [green], [red], [url]",
            "type": "SELECT",
            "options": {                
                "blurple": "Blurple / Primary",
                "grey": "Grey / Secondary",
                "green": "Green / Success",
                "red": "Red / Destructive",
                "url": "Link / Url"
            }
        },
    ],

    outputs: [
        {
            "id": "style1",
            "name": "Style 1",
            "description": "Type: Text\n\nDescription: The Style of your choice for the Button",
            "types": ["text"]
        },
        {
            "id": "style2",
            "name": "Style 2",
            "description": "Type: Text\n\nDescription: The Style of your choice for the Button",
            "types": ["text"]
        },
        {
            "id": "style3",
            "name": "Style 3",
            "description": "Type: Text\n\nDescription: The Style of your choice for the Button",
            "types": ["text"]
        },
        {
            "id": "style4",
            "name": "Style 4",
            "description": "Type: Text\n\nDescription: The Style of your choice for the Button",
            "types": ["text"]
        },
        {
            "id": "style5",
            "name": "Style 5",
            "description": "Type: Text\n\nDescription: The Style of your choice for the Button",
            "types": ["text"]
        }
    ],

    code(cache) {
        this.StoreOutputValue(this.GetOptionValue("style1", cache), "style1", cache, "inputBlock");   
        this.StoreOutputValue(this.GetOptionValue("style2", cache), "style2", cache, "inputBlock");     
        this.StoreOutputValue(this.GetOptionValue("style3", cache), "style3", cache, "inputBlock");          
        this.StoreOutputValue(this.GetOptionValue("style4", cache), "style4", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("style5", cache), "style5", cache, "inputBlock");
    }
}