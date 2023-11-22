module.exports = {
    name: "Get Table Info",

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
            "id": "table",
            "name": "Table",
            "description": "Acceptable Types: Object\n\nDescription: The table you want to get info.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "columnas",
            "name": "Column",
            "description": "Acceptable Types: Text\n\nDescription: The sheet code from the url.",
            "types": ["number", "unspecified"],
        },
        {
            "id": "filas",
            "name": "Row",
            "description": "Acceptable Types: Text\n\nDescription: The sheet code from the url.",
            "types": ["number", "unspecified"],
        },
    ],

    options: [
        {
            "id": "type",
            "name": "Info Type",
            "description": "bla.",
            "type": "SELECT",
            "options": {
                1: "Table Total Columns [Number]",
                2: "Table total rows [Number]",
                3: "Specific Column [List <Text>] (Needs Column)",
                4: "Specific Row [List <Text>] (Needs Row)",
                5: "Specific Cell [Text] (Needs Column and Row)" 
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
            "id": "value",
            "name": "Value",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["unspecified", "list", "text", "number"]
        },
    ],

  async  code(cache) {
      const table = this.GetInputValue("table", cache)
      const column = parseInt(this.GetInputValue("columnas", cache))
      const row = parseInt(this.GetInputValue("filas", cache))
      const type = this.GetOptionValue("type", cache)

      let result
      switch(type){
          case "1":
              result = table[1].length
              break;
            case "2":
                result = table.length
                break;
            case "3":
                var list = []
                for (const [index, value] of Object.entries(table)){
                    list.push(value[column - 1])
                }        
               result = list  
                break;
            case "4":
                result = table[row - 1]
               break;
            case "5":
                result = table[column - 1][row - 1]
      }

      this.StoreOutputValue(result, "value", cache)
      this.RunNextBlock("action", cache)


    }
}