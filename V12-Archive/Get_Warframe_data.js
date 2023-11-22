module.exports = {
    name: "Get Warframe Information",

    description: "interact with api.warframestat.us",

    category: "Data Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        }
    ],

    options: [

        {
            "id": "inputA",
            "name": "Mode:",
            "description": "Select a Modus",
            "type": "SELECT",
            "options": {
                "A": "Get Alerts",
                "B": "Get CambionDrift",
                "C": "Get CetusCycle",
                "D": "Get Conclave Challenges",
                "E": "Get Events",
                "F": "Get Invasions",
                "G": "Get News",
                "H": "Get Nightwaves",
                "I": "Get Sortie",
                "J": "Get FlashSales",
                "K": "Get ConstructionProgress",
                "L": "Get GlobalUpgrades",
                "M": "Get Arbitration(Instable)",
                "N": "Get KuvaMission(Instable)"
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
            "id": "result",
            "name": "result",
            "description": "Type: Unspecified\n\nDescription: The value of the variable.",
            "types": ["object","list"]
        }
    ],

    async code(cache) {
        const Client = await this.require('warframestats.js');
        const inputa = this.GetOptionValue("inputA", cache)
        const warframe = new Client();




        let r
        switch (inputa) {
            case "A":
                r = await warframe.getAlerts("pc")
                break;
            case "B":
                r = await warframe("pc")
                break;
            case "C":
                r = await warframe.getCetusCycle("pc")
                break;
            case "D":
                r = await warframe.getConclaveChallenges("pc")
                break;
            case "E":
                r = await warframe.getEvents("pc")
                break;
            case "F":
                r = await warframe.getInvasions("pc")
                break;
            case "G":
                r = await warframe.getNews("pc")
                break;
            case "H":
                r = await warframe.getNightwave("pc")
                break;
            case "I":
                r = await warframe.getSortie("pc")
                break;
            case "J":
                r = await warframe.getFlashSales("pc")
                break;
            case "K":
                r = await warframe.getCetusCycle("pc")
                break;
            case "L":
                r = await warframe.getCetusCycle("pc")
                break;
            case "M":
                r = await warframe.getCetusCycle("pc")
                break;
            case "N":
                r = await warframe.getCetusCycle("pc")
                break;
        }



        this.StoreOutputValue(r, "result", cache);
        this.RunNextBlock("action", cache);
    }

}