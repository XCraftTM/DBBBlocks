module.exports = {
    name: "Convert Table To Text",

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
            "name": "Table",
            "description": "Acceptable Types: Text\n\nDescription: The sheet code from the url.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "quotes",
            "name": "Quotes",
            "description": 'Types: Boolean or list of booleans.\n\n	If true, forces all fields to be enclosed in quotes. If an array of true/false values, specifies which fields should be force-quoted (first boolean is for the first column, second boolean for the second column, ...). A function that returns a boolean values can be used to determine the quotes value of a cell. This function accepts the cell value and column index as parameters. Note that this option is ignored for undefined, null and date-object values. The option escapeFormulae also takes precedence over this.',
            "types": ["boolean", "list", "unspecified"],
        },
        {
            "id": "quoteChar",
            "name": "Quote Characters",
            "description": 'The character used to quote fields.',
            "types": ["text", "unspecified"],
        },
        {
            "id": "escapeChar",
            "name": "Escape Characters",
            "description": 'The character used to escape quoteChar inside field values.',
            "types": ["text" ,"unspecified"],
        },
        {
            "id": "delimiter",
            "name": "Delimiter",
            "description": '	The delimiting character. Multi-character delimiters are supported. It must not be found in Papa.BAD_DELIMITERS.',
            "types": ["text", "unspecified"],
        },
        {
            "id": "header",
            "name": "Header",
            "description": 'If false, will omit the header row. If data is an array of arrays this option is ignored. If data is an array of objects the keys of the first object are the header row. If data is an object with the keys fields and data the fields are the header row.',
            "types": ["boolean", "unspecified"],
        },
        {
            "id": "newline",
            "name": "New Line",
            "description": 'The character used to determine newline sequence. It defaults to "\r\n".',
            "types": ["text", "unspecified"],
        },
        {
            "id": "skipEmptyLines",
            "name": "Skip Empty Lines",
            "description": "If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to 'greedy', lines that don't have any content (those which have only whitespace after parsing) will also be skipped.",
            "types": ["boolean", "unspecified"],
        },
        {
            "id": "columns",
            "name": "Columns",
            "description": '	If data is an array of objects this option can be used to manually specify the keys (columns) you expect in the objects. If not set the keys of the first objects are used as column.',
            "types": ["list", "unspecified"],
        },
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks for each item in the list.",
            "types": ["action"]
        },
        {
            "id": "list",
            "name": "Text as Table",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["text", "unspecified"]
        }
    ],

  async  code(cache) {
    const Papa = await this.require("papaparse");
    const data = this.GetInputValue("data", cache)

    const quotes = this.GetInputValue("quotes", cache) || false
    const quoteChar = this.GetInputValue("quoteChar", cache) + ""
    const escapeChar = this.GetInputValue("escapeChar", cache) + ""
    const delimeter = this.GetInputValue("delimeter", cache) || ","
    const header = this.GetInputValue("header", cache) ? true : false
    const newline = this.GetInputValue("newline", cache) || "\r\n"
    const skipEmptyLines = this.GetInputValue("skipEmptyLines", cache) ? true : false
    const columns = this.GetInputValue("columns", cache) ? this.GetInputValue("columns", cache) : null 


    const config = {
        quotes: quotes, //or array of booleans
        quoteChar: quoteChar,
        escapeChar: escapeChar,
        delimiter: delimeter,
        header: header,
        newline: newline,
        skipEmptyLines: skipEmptyLines, //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.
        columns: columns //or array of strings
    }


    const result = Papa.unparse(data, config)
    this.StoreOutputValue(result, "list", cache)
    this.RunNextBlock("action", cache)
    }
}

/* DEFAULT CONFIGURATION

    const config = {
        quotes: false, //or array of booleans
        quoteChar: '"',
        escapeChar: '"',
        delimiter: ",",
        header: true,
        newline: "\r\n",
        skipEmptyLines: false, //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.
        columns: null //or array of strings
    }

*/