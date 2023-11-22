module.exports = {
    name: "Create Table",

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
            "id": "columnas",
            "name": "Columns",
            "description": "Acceptable Types: Text\n\nDescription: The sheet code from the url.",
            "types": ["number", "unspecified"],
            "required": true
        },
        {
            "id": "filas",
            "name": "Rows",
            "description": "Acceptable Types: Text\n\nDescription: The sheet code from the url.",
            "types": ["number", "unspecified"],
            "required": true
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
            "id": "tabla",
            "name": "Table",
            "description": "Type: List, Unspecified\n\nDescription: Randomized list.",
            "types": ["object", "list", "unspecified"]
        },
    ],

  async  code(cache) {
    const Papa = await this.require("papaparse");
      const columnas = this.GetInputValue("columnas", cache)
      const filas = this.GetInputValue("filas", cache)

      var tabla = ""

      let filas_count = 0
      let columnas_count = 0

        var looper = setInterval(() => {
            filas_count++
            tabla = tabla + ","
            if(filas_count >= filas){
                tabla = tabla + "\n"
                filas_count = 0
                columnas_count++
                if(columnas_count >= columnas){
                    clearInterval(looper)
                    const result = Papa.parse(tabla).data
                    this.StoreOutputValue(result, "tabla", cache)
                    this.RunNextBlock("action", cache)
                }
            }
        }, 0)



    }
}