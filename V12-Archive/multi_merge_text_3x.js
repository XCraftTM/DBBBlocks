module.exports = {
    name: "Multi Merge Text [x3]",

    description: "Merges and outputs different texts with the same block.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "text1",
            "name": "Text 1",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 1 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
        {
            "id": "text2",
            "name": "Text 2",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 2 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
        {
            "id": "text3",
            "name": "Text 3",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 3 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
    ],

    options: [
        {
            "id": "mergedtext1",
            "name": "Text 1",
            "description": "Description: The source text to add the Text. Use the folowing codes to implement the Text: \"${text1}\", \"${text2}\", \"${text3}\".",
            "type": "TEXT"
        },
        {
            "id": "mergedtext2",
            "name": "Text 2",
            "description": "Description: The source text to add the Text. Use the folowing codes to implement the Text: \"${text1}\", \"${text2}\", \"${text3}\".",
            "type": "TEXT"
        },
        {
            "id": "mergedtext3",
            "name": "Text 3",
            "description": "Description: The source text to add the Text. Use the folowing codes to implement the Text: \"${text1}\", \"${text2}\", \"${text3}\".",
            "type": "TEXT"
        },
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "mergedtext1",
            "name": "Text 1",
            "description": "Type: Text\n\nDescription: The text merged.",
            "types": ["text"]
        },
        {
            "id": "mergedtext2",
            "name": "Text 2",
            "description": "Type: Text\n\nDescription: The text merged.",
            "types": ["text"]
        },
        {
            "id": "mergedtext3",
            "name": "Text 3",
            "description": "Type: Text\n\nDescription: The text merged.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const text1 = this.GetInputValue("text1", cache) + "";
        const text2 = this.GetInputValue("text2", cache) + "";
        const text3 = this.GetInputValue("text3", cache) + "";

        const __text1 = this.GetOptionValue("mergedtext1", cache) + "";
        const __text2 = this.GetOptionValue("mergedtext2", cache) + "";
        const __text3 = this.GetOptionValue("mergedtext3", cache) + "";

        this.StoreOutputValue(eval("`" + __text1.replace(/`/g, "\\`") + "`"), "mergedtext1", cache);
        this.StoreOutputValue(eval("`" + __text2.replace(/`/g, "\\`") + "`"), "mergedtext2", cache);
        this.StoreOutputValue(eval("`" + __text3.replace(/`/g, "\\`") + "`"), "mergedtext3", cache);
        
        this.RunNextBlock("action", cache);
    }
}