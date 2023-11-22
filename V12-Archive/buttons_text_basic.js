module.exports = {
    name: "Buttons Text [Basic]",

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
        },
        {
            "id": "label",
            "name": "Label / Emoji",
            "description": "Type: Text\n\nDescription: The Label or Emoji of the Button.",
            "type": "TEXT"
        },
		{
            "id": "id",
            "name": "ID / URL",
            "description": "Type: Text\n\nDescription: The ID or URL of the Button.",
            "type": "TEXT"
        }
    ],

    outputs: [
        {
            "id": "style",
            "name": "Style",
            "description": "Type: Text\n\nDescription: The Style of your choice for the Button",
            "types": ["text"]
        },
        {
            "id": "label",
            "name": "Label / Emoji",
            "description": "Type: Text\n\nDescription: The Label or Emoji of the Button.",
            "types": ["text"]
        },
        {
            "id": "id",
            "name": "ID / URL",
            "description": "Type: Text\n\nDescription: The ID or URL of the Button.",
            "types": ["text"]
        }
    ],

    code(cache) {
        this.StoreOutputValue(this.GetOptionValue("style", cache), "style", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("label", cache), "label", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("id", cache), "id", cache, "inputBlock");
    }
}