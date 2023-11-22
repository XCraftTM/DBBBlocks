module.exports = {
    name: "Edit Table",

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
            "id": "value",
            "name": "New Value",
            "description": "Acceptable Types: Object\n\nDescription: The table you want to get info.",
            "types": ["unspecified", "list", "text", "number"],
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
                1: "Column (Value must be a list)",
                2: "Row (Value must be a list)",
                3: "Cell" 
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
            "id": "tabla",
            "name": "New Table",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["object", "list", "unspecified"]
        },
    ],

  async  code(cache) {
      const table = this.GetInputValue("table", cache)
      const new_value = this.GetInputValue("value", cache)
      const type = this.GetOptionValue("type", cache)
      let new_table

      switch (type) {
            case "1":
              console.log("uno")
              break;
            case "2":
                console.log("dos")
                break;
            case "3":
                console.log("tres")
                break;
      }



    }
}