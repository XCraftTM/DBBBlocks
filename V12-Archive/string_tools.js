module.exports = {
    name: "Text Tools",

    description: "A collection of Lodash tools for manipulating strings.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "input",
            "name": "Input 1",
            "description": "Acceptable Types: Text, Undefined, Unspecified, Number, Boolean\n\nDescription: See \"Descriptions\", \"Descriptions pt.2\", or \"Descriptions pt.3\" for information about what to put here.",
            "types": ["unspecified", "undefined", "boolean", "number", "text"],
            "required": true
        },
        {
            "id": "input-alt",
            "name": "Input 2",
            "description": "Acceptable Types: Text, Number, Boolean, Date, Null, Undefined, Unspecified\n\nDescription: See \"Descriptions\", \"Descriptions pt.2\", or \"Descriptions pt.3\" for information about what to put here.",
            "types": ["unspecified", "undefined", "null", "boolean", "date", "number", "text"]
        },
        {
            "id": "input-alt-2",
            "name": "Input 3",
            "description": "Acceptable Types: Text, Number, Boolean, Date, Null, Undefined, Unspecified\n\nDescription: See \"Descriptions\", \"Descriptions pt.2\", or \"Descriptions pt.3\" for information about what to put here.",
            "types": ["unspecified", "undefined", "null", "boolean", "date", "number", "text"]
        }
    ],

    options: [
        {
            "id": "action",
            "name": "Action Type",
            "description": "Hover over the three boxes below to see a description of these options.",
            "type": "SELECT",
            "options": {
                "deburr": "Deburr",
                "endswith": "Ends With",
                "sanatize": "Sanatize",
                "lowercase": "Lowercase",
                "upercase": "Uppercase",
                "parseint": "Parse Int",
                "repeat": "Repeat",
                "replace": "Replace",
                "split": "Split",
                "startswith": "Starts With",
                "trim": "Trim",
                "truncate": "Truncate",
                "wordlist": "Word List"
            }
        },
        {
            "id": "",
            "name": "𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓𝖘\nHover over these boxes to see\nwhat each type of action does.",
            "description": "Deburr:\n    Description: Removes burrs from letters like à and é.\n    Input 1: The text that you want to deburr.\n    output: Text\n\nEnds With:\n    Description: Checks to see if input 1 ends with input 2.\n    Input 1: The text you want to check.\n    Input 2: The text you want to text if \"Input 1\" ends with.\n    output: Boolean\n\nSanatize:\n    Description: Escapes regex special characters. Useful for sanatizing user input if you plan on doing any regex with user input.\n    Input 1: The text you want to sanatize.\n    output: Text\n\nLowercase:\n    Description: Replaces all capital characters with their lowercase equivalant.\n    Input 1: The text you want to be made lowercase.\n    output: Text\n\nUppercase:\n    Description: Replaces all lowercase characters with their uppercase equivalant.\n    Input 1: The text you want to be made uppdercase.\n    output: Text",
            "type": "SELECT",
            "options": {
                "a": "Descriptions"
            }
        },
        {
            "id": "",
            "name": " ",
            "description": "Parse Int:\n    Description: Converts a string to an intergert of the specified radix.\n    Input 1: The text you want to parse as an int.\n    Input 2: The radix of the desired output. (Optional) If none is provided, 10 is used.\n    output: Number\n\nRepeat:\n    Description: Repeats the \"input 1\" string \"input 2\" number of times.\n    Input 1: The text that you want repeated.\n    Input 2: The number of times that you want your string repeated.\n    output: Text\n\nReplace:\n    Description: Replaces the \"input 2\" from \"input 1\" with \"input 3\".\n    Input 1: The text that contains what you want to change.\n    Input 2: The text that you want to change into \"Input 3\".\n    Input 3: What to replace \"Input 2\" with.\n    output: Text\n\nSplit:\n    Description: Generates a list by splitting \"Input 1\" at every \"Input 2\".\n    Input 1: The text you want split.\n    Input 2: The seperator that you want \"Input 1\" split at.\n    output: List",
            "type": "SELECT",
            "options": {
                "a": "Descriptions pt.2"
            }
        },
        {
            "id": "",
            "name": " ",
            "description": "Starts With:\n    Description: Checks to see if \"Input 1\" starts with \"Input 2\".\n    Input 1: The text you want to check.\n    Input 2: The text you want to see if \"Input 1\" starts with.\n    output: Boolean\n\nTrim:\n    Description: Removes leading and trailing whitespaces from \"Input 1\".\n    Input 1: The text that you want to trim.\n    output: Text\n\nTruncate:\n    Description: If \"Input 1\" is longer than \"Input 2\", The last characters are chopped off and replaced with \"Input 3\" or \"[...]\" if \"Input 3\" is not supplied.\n    Input 1: The text that you want to truncate.\n    Input 2: The desired output length.\n    Input 3: What to put at the end of the truncated string. (optional) If none is provided, \"[...]\" is used.\n    output: Text\n\nWord List:\n    Description: Splits \"Input 1\" into a list of its words.\n    Input 1: The text you want put into the list of its words.\n    Output: List",
            "type": "SELECT",
            "options": {
                "a": "Descriptions pt.3"
            }
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
            "id": "outputtext",
            "name": "Output",
            "description": "Type: Text\n\nDescription: The result of whatever action you selected.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        }
    ],

    async code(cache) {
        await this.require('console-aio');
        const _ = await this.require('lodash');

        const action = this.GetOptionValue("action", cache);
        const input1 = this.GetInputValue("input", cache);
        const input2 = this.GetInputValue("input-alt", cache);
        const input3 = this.GetInputValue("input-alt-2", cache);

        let result = "";

        switch(action) {
            case "deburr": //Removes burrs from letters like à and é
                result = _.deburr(input1);
                //i.e. 'déjà vu' => 'deja vu'
                break;
            case "endswith": //Checks to see if input ends with input2
                result = _.endsWith(input1, input2);
                //i.e. {input1: "abc", input2: "c"} => true
                //i.e. {input1: "abc", input2: "f"} => false
                break;
            case "sanitize": //Escapes regex special characters. Useful for sanatizing user input if you plan on doing any regex with user input
                result = _.escapeRegExp(input1);
                //i.e. '[google](https://google.com/)' => '\[google\]\(https://google\.com/\)'
                break;
            case "lowercase": //Replaces all capital characters with their lowercase equivalant
                result = _.toLower(input1);
                //i.e. 'PlEaSe SoMeOnE HeLp mE' => 'please someone help me'
                break;
            case "uppercase": //Replaces all lower case characters with their uppercase equivalant
                result = _.toUpper(input1);
                //i.e. 'PlEaSe SoMeOnE HeLp mE' => 'PLEASE SOMEONE HELP ME'
                break;
            case "parseint": //Converts a string to an intergert of the specified radix
                if(input2) { result = _.parseInt(input1, input2); } 
                else { result = _.parseInt(input1); }
                //i.e. {input1: "174"} => 69
                //i.e. {input1: "174", input2: 16} => AE
                break;
            case "repeat": //Repeats the input string input2 number of times
                result = _.repeat(input1, input2);
                //i.e. {input1: "abc", input2: 6} => "abcabcabcabcabcabc"
                break;
            case "replace": //Replaces the input2 from input with input3
                result = _.replace(input1, input2, input3);
                //i.e. {input1: "Hi Greg!", input2: "Greg", input3: "Idiot!"} => "Hi Idiot!"
                break;
            case "split": //Generates a list(aka an array) by splitting input1 at every input2
                result = _.split(input1, input2);
                //ie.e {input1: "a-b-c-d", input2: "-"} => ["a", "b", "c", "d"]
                break;
            case "startswith": //Checks to see if input starts with input2
                result = _.startsWith(input, input2);
                //i.e. {input1: "abc", input2: "a"} => true
                //i.e. {input1: "abc", input2: "g"} => false
                break;
            case "trim": //Removes leading and trailing whitespaces from input1
                result = _.trim(input1);
                //i.e. '       test    ' => 'test'
                break;
            case "truncate": //If its longer than input2, The last characters are chopped off and replaced with input3 or "[...]" if input3 is not supplied
                if(input3) { result = _.truncate(input1, { 'length': input2, 'separator': /\b/, 'omission': input3 }); }
                else { result = _.truncate(input1, { 'length': input2, 'separator': /\b/, 'omission': '[...]' }); }
                //i.e. {input1: 'Sup dude, my name is austin!', input2: 13} => "Sup dude[...]"
                //i.e. {input1: 'Sup dude, my name is austin!', input2: 10, input3: '--'} => "Sup dude--"
                break;
            case "wordlist": //Splits input1 into a list(aka an array) of its words
                result = _.words(input1);
                //i.e. "hello, how are you" => ["hello", "how", "are", "you"]
                break;
            default: 
                console.error("Invalid action selected.");
                break;
        }
        
        this.StoreOutputValue(result, "outputtext", cache);
        this.RunNextBlock("action", cache);
    }
}
