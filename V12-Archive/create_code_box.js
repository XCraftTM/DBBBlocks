module.exports = {
    name: "Text to Syntax code",

    description: "convert a normal Text to a Syntax Formated Text made by Reddexx, Thanks Javs for Support",

    category: "Extras",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "textin",
            "name": "Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: Unformated Text as Input",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "syntax",
            "name": "Syntax",
            "description": "Description: Select the Syntax code",
            "type": "SELECT",
            "options": {
                "yml": "yml",
                "js": "Javascript",
                "json": "json",
                "cpp": "C++",
                "css": "CSS",
                "fix": "FIX",
                "tex": "TEX",
                "diff": "diff",
                "elixir": "elixir",
                "md": "MD",
                "none": "none"
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
            "id": "text",
            "name": "Text",
            "description": "Type: Text\n\nDescription: The Formated text.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const textin = this.GetInputValue("textin", cache) + "";
        const syntax = this.GetOptionValue("syntax", cache);
        
		let result;
        switch(syntax) {
            case "yml":
                result = "```yml\n" + textin + "\n```";
                break;
            case "js":
                result = "```js\n" + textin + "\n```";
                break;
            case "json":
                result = "```json\n" + textin + "\n```";
                break;
            case "cpp":
                result = "```cpp\n" + textin + "\n```";
                break;
            case "css":
                result = "```css\n" + textin + "\n```";
                break;
            case "fix":
                result = "```fix \n" + textin + "\n```";
                break;
            case "tex":
                result = "```tex\n" + textin + "\n```";
                break;
            case "diff":
                result = "```diff\n" + textin + "\n```";
                break;
            case "elixir":
                result = "```elixir\n" + textin + "\n```";
                break;
            case "md":
                result = "```md\n" + textin + "\n```";
                break;
            case "none":
                result = "```\n" + textin + "\n```";
                break;
        }

        this.StoreOutputValue(result, "text", cache);
        this.RunNextBlock("action", cache);
    }
}