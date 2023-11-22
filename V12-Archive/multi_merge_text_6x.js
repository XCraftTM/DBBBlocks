module.exports = {
    name: "Multi Merge Text [x6]",

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
        {
            "id": "text4",
            "name": "Text 4",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 1 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
        {
            "id": "text5",
            "name": "Text 5",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 2 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
            "types": ["text", "undefined", "null", "object", "boolean", "date", "number", "list", "unspecified"]
        },
        {
            "id": "text6",
            "name": "Text 6",
            "description": "Acceptable Types: Text, Undefined, Null, Object, Boolean, Date, Number, List, Unspecified\n\nDescription: The text 2 to merge with the source text. Supports everything (converts to text automatically). (OPTIONAL)",
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
        {
            "id": "mergedtext4",
            "name": "Text 4",
            "description": "Description: The source text to add the Text. Use the folowing codes to implement the Text: \"${text1}\", \"${text2}\", \"${text3}\".",
            "type": "TEXT"
        },
        {
            "id": "mergedtext5",
            "name": "Text 5",
            "description": "Description: The source text to add the Text. Use the folowing codes to implement the Text: \"${text1}\", \"${text2}\", \"${text3}\".",
            "type": "TEXT"
        },
        {
            "id": "mergedtext6",
            "name": "Text 6",
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
        },
        {
            "id": "mergedtext4",
            "name": "Text 4",
            "description": "Type: Text\n\nDescription: The text merged.",
            "types": ["text"]
        },
        {
            "id": "mergedtext5",
            "name": "Text 5",
            "description": "Type: Text\n\nDescription: The text merged.",
            "types": ["text"]
        },
        {
            "id": "mergedtext6",
            "name": "Text 6",
            "description": "Type: Text\n\nDescription: The text merged.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const text1 = this.GetInputValue("text1", cache) + "";
        const text2 = this.GetInputValue("text2", cache) + "";
        const text3 = this.GetInputValue("text3", cache) + "";
        const text4 = this.GetInputValue("text4", cache) + "";
        const text5 = this.GetInputValue("text5", cache) + "";
        const text6 = this.GetInputValue("text6", cache) + "";

        const __text1 = this.GetOptionValue("mergedtext1", cache) + "";
        const __text2 = this.GetOptionValue("mergedtext2", cache) + "";
        const __text3 = this.GetOptionValue("mergedtext3", cache) + "";
        const __text4 = this.GetOptionValue("mergedtext4", cache) + "";
        const __text5 = this.GetOptionValue("mergedtext5", cache) + "";
        const __text6 = this.GetOptionValue("mergedtext6", cache) + "";

        this.StoreOutputValue(eval("`" + __text1.replace(/`/g, "\\`") + "`"), "mergedtext1", cache);
        this.StoreOutputValue(eval("`" + __text2.replace(/`/g, "\\`") + "`"), "mergedtext2", cache);
        this.StoreOutputValue(eval("`" + __text3.replace(/`/g, "\\`") + "`"), "mergedtext3", cache);
        this.StoreOutputValue(eval("`" + __text4.replace(/`/g, "\\`") + "`"), "mergedtext4", cache);
        this.StoreOutputValue(eval("`" + __text5.replace(/`/g, "\\`") + "`"), "mergedtext5", cache);
        this.StoreOutputValue(eval("`" + __text6.replace(/`/g, "\\`") + "`"), "mergedtext6", cache);

        this.RunNextBlock("action", cache);
    }
}