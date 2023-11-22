module.exports = {
    name: "Create Table (Advanced)",

    description: "No description.",

    category: ".Panso",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "data",
            "name": "Source",
            "description": "Acceptable Types: Text\n\nDescription: The sheet code from the url.",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "delimiter",
            "name": "Delimiter",
            "description": "The delimiting character. Leave blank to auto-detect from a list of most common delimiters, or any values passed in through delimitersToGuess. It can be a string or a function. If a string, it can be of any length (so multi-character delimiters are supported). If a function, it must accept the input as first parameter and it must return a string which will be used as delimiter. In both cases it cannot be found in Papa.BAD_DELIMITERS.",
            "types": ["text", "unspecified"],
        },
        {
            "id": "quoteChar",
            "name": "Quote Character",
            "description": "The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read.",
            "types": ["text", "unspecified"],
        },
        {
            "id": "escapeChar",
            "name": "Escape Character",
            "description": 'The character used to escape the quote character within a field. If not set, this option will default to the value of quoteChar, meaning that the default escaping of quote character within a quoted field is using the quote character two times. (e.g. "column with ""quotes"" in text")',
            "types": ["text", "unspecified"],
        },
        {
            "id": "header",
            "name": "Header",
            "description": "If true, the first row of parsed data will be interpreted as field names. An array of field names will be returned in meta, and each row of data will be an object of values keyed by field name instead of a simple array. Rows with a different number of fields from the header row will produce an error. Warning: Duplicate field names will overwrite values in previous fields having the same name.",
            "types": ["boolean", "unspecified"],
        },
        {
            "id": "dynamicTyping",
            "name": "dynamicTyping",
            "description": "If true, numeric and boolean data will be converted to their type instead of remaining strings. Numeric data must conform to the definition of a decimal literal. Numerical values greater than 2^53 or less than -2^53 will not be converted to numbers to preserve precision. European-formatted numbers must have commas and dots swapped. If also accepts an object or a function. If object it's values should be a boolean to indicate if dynamic typing should be applied for each column number (or header name if using headers). If it's a function, it should return a boolean value for each field number (or name if using headers) which will be passed as first argument.",
            "types": ["boolean", "unspecified"],
        },
        {
            "id": "preview",
            "name": "preview",
            "description": "If > 0, only that many rows will be parsed.",
            "types": ["number", "unspecified"],
        },
        {
            "id": "encoding",
            "name": "encoding",
            "description": "The encoding to use when opening local files. If specified, it must be a value supported by the FileReader API.",
            "types": ["text", "cache"],
        },
        {
            "id": "worker",
            "name": "worker",
            "description": "Whether or not to use a worker thread. Using a worker will keep your page reactive, but may be slightly slower.",
            "types": ["boolean", "cache"],
        },
        {
            "id": "comments",
            "name": "Comments",
            "description": "A string that indicates a comment (for example, " + "#" + "or '//'). When Papa encounters a line starting with this string, it will skip the line.",
            "types": ["text", "cache"],
        },
        {
            "id": "error",
            "name": "Error",
            "description": "A callback to execute if FileReader encounters an error. The function is passed two arguments: the error and the File.",
            "types": ["text", "unspecified"],
        },
        {
            "id": "downloadRequestHeaders",
            "name": "Download Request Headers",
            "description": "If defined, should be an object that describes the headers, example: downloadRequestHeaders: {'Authorization': 'token 123345678901234567890',}",
            "types": ["object", "unspecified"],
        },
        {
            "id": "downloadRequestBody",
            "name": "Download Request Body",
            "description": "No 	Use POST request on the URL of the download option. The value passed will be set as the body of the request..",
            "types": ["unspecified"],
        },
        {
            "id": "skipEmptyLines",
            "name": "Skip Empty Lines",
            "description": "If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to 'greedy', lines that don't have any content (those which have only whitespace after parsing) will also be skipped.",
            "types": ["boolean", "cache"],
        },
        {
            "id": "fastMode",
            "name": "Fast Mode",
            "description": 'Fast mode speeds up parsing significantly for large inputs. However, it only works when the input has no quoted fields. Fast mode will automatically be enabled if no " characters appear in the input. You can force fast mode either way by setting it to true or false.',
            "types": ["boolean", "cache"],
        },
        {
            "id": "withCredentials",
            "name": "With Credentials",
            "description": 'A boolean value passed directly into XMLHttpRequest' + "s" + "withCredentials" + "property",
            "types": ["boolean", "cache"],
        },
        {
            "id": "delimitersToGuess",
            "name": "Delimeters to Guess",
            "description": "An array of delimiters to guess from if the delimiter option is not set.",
            "types": ["list", "unspecified"],
        },
    ],

    options: [
        {
            "id": "type",
            "name": "Source Type",
            "description": "Type: Action\n\nDescription: Executes the following blocks for each item in the list.",
            "type": "SELECT",
            "options": {
                1: "Direct (Text)",
                2: "Local File (Path)",
                3: "Remote File (URL)",
                "4": "Web Page (URL)"
            }
        },
        {
            "id": "newline",
            "name": "New Line",
            "description": "Description: The newline sequence.",
            "type": "SELECT",
            "options": {
                "": "Auto Detect",
                "\r": "Carriage Return (\\r)",
                "\n": "Line Feed (\\n)",
                "\r\n": "Both (\\r\\n)"
            }
        },
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks for each item in the list.",
            "types": ["action"]
        },
        {
            "id": "data",
            "name": "Table",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["object", "unspecified"]
        },
        {
            "id": "meta",
            "name": "Extra Info",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["object", "unspecified"]
        },
        {
            "id": "errors",
            "name": "Errors",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["list", "unspecified"]
        },

    ],

  async  code(cache) {
    const fs = await this.require("fs")
    const Papa = await this.require("papaparse");
    var source = this.GetInputValue("data", cache)
    const type = this.GetOptionValue("type", cache)

    const endblock = (result) => {
        this.StoreOutputValue(result.data, "data", cache)
        this.StoreOutputValue(result.errors, "errors", cache)
        this.StoreOutputValue(result.meta, "meta", cache)
        this.RunNextBlock("action", cache)
    }

    const delimiter = this.GetInputValue("delimiter", cache) + ""
    const newline = this.GetOptionValue("newline", cache)
    const quoteChar = this.GetInputValue("quoteChar", cache) || '"' 
    const escapeChar = this.GetInputValue("escapeChar", cache) || quoteChar
    const header = this.GetInputValue("header", cache) ? true : false
    const dynamicTyping = this.GetInputValue("dynamicTyping", cache) ? true : false
    const preview =  isNaN(parseInt(this.GetInputValue("preview", cache))) ? parseInt(this.GetInputValue("preview", cache)) : 0
    const encoding = this.GetInputValue("encoding", cache) + ""
    const worker = this.GetInputValue("worker", cache) ? true : false
    const comments = this.GetInputValue("comments", cache) ? this.GetInputValue("worker", cache) + "" : false
    const error = this.GetInputValue("error", cache)
    const download = type == "2" ? true : false 
    const downloadRequestHeaders = this.GetInputValue("downloadRequestHeaders", cache)
    const downloadRequestBody = this.GetInputValue("downloadRequestBody", cache)
    const skipEmptyLines = this.GetInputValue("skipEmptyLines", cache) ? true : false
    const fastMode = this.GetInputValue("fastMode", cache) ? true : false
    const withCredentials = this.GetInputValue("withCredentials", cache) ? true : false
    const delimitersToGuess = this.GetInputValue("delimitersToGuess", cache) || [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]


    const config = {
        delimiter: delimiter,	// auto-detect
        newline: newline,	// auto-detect
        quoteChar: quoteChar,
        escapeChar: escapeChar,
        header: header,
        dynamicTyping: dynamicTyping,
        preview: preview,
        encoding: encoding,
        worker: worker,
        comments: comments,
        error: error,
        download: download,
        downloadRequestHeaders: downloadRequestHeaders,
        downloadRequestBody: downloadRequestBody,
        skipEmptyLines: skipEmptyLines,
        fastMode: fastMode,
        withCredentials: withCredentials,
        delimitersToGuess: delimitersToGuess
    }

    let result
    switch(type){
        case "1":
            result = Papa.parse(source)
            endblock(result)
            break;
        case "2":
            source = fs.readFileSync(source, "utf8");
            result = Papa.parse(source)
            endblock(result)
            break;
        case "3":
            Papa.parse(await require('node-fetch')(source).then(result => result.text()),{
                complete: async function(result, file){
                    endblock(result)
                }})

            break;
    }



    }
}

/*
const config = {
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    complete: undefined,
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    downloadRequestBody: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    chunkSize: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
}
*/