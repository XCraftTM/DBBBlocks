module.exports = {
    name: "Get CS:GO Info",
  
    description: "Gets the Counter Strike: Global Offensive stats \n by M&RT!N!×J",
  
    category: ".MJ",
  
    inputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
        "types": ["action"]
      },
      {
        "id": "user",
        "name": "SteamID64",
        "description": "Enter your SteamID64",
        "types": ["text", "unspecified"],
        "required": false
      },
    ],
  
    options: [
      {
        "id": "api",
        "name": "API Key",
        "description": "API Key available on Steam site",
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
      "id": "kills",
      "name": "Kills",
      "description": "overall kills",
      "types": ["number", "unspecified"]
     },
     {
      "id": "death",
      "name": "Deaths",
      "description": "overall deaths",
      "types": ["number", "unspecified"]
     },
     {
        "id": "mvps",
        "name": "MVPs",
        "description": "Most-valuable-player",
        "types": ["number", "unspecified"]
      },
      {
        "id": "kd",
        "name": "K/D",
        "description": "kills/deaths",
        "types": ["number", "unspecified"]
      },
      {
        "id": "twins",
        "name": "LM:T Wins",
        "description": "Last match terrorists wins",
        "types": ["number", "unspecified"]
      },
      {
        "id": "ctwins",
        "name": "LM:CT Wins",
        "description": "Last match counter-terrorists wins",
        "types": ["number", "unspecified"]
      },
      {
        "id": "wins",
        "name": "LM: Team Wins",
        "description": "Last match team wins",
        "types": ["number", "unspecified"]
      },
      {
        "id": "team",
        "name": "LM: Which team?",
        "description": "Last match - which team was your? CT (false) or T (true)?",
        "types": ["boolean", "unspecified"]
      },
       {
        "id": "matchkills",
        "name": "LM: Kills",
        "description": "Last match kills",
        "types": ["number", "unspecified"]
       },
       {
        "id": "matchdeaths",
        "name": "LM: Deaths",
        "description": "Last match team wins",
        "types": ["number", "unspecified"]
       },
       {
        "id": "matchkd",
        "name": "LM: K/D",
        "description": "Last match kills/deaths",
        "types": ["number", "unspecified"]
       },
       {
        "id": "matchdmg",
        "name": "LM: Damage",
        "description": "Last match damage",
        "types": ["number", "unspecified"]
       },
       {
        "id": "matchwon",
        "name": "LM: Win?",
        "description": "Last match - which team won? CT (false) or T (true)? ",
        "types": ["boolean", "unspecified"]
       },
       {
        "id": "wewon",
        "name": "LM: We Won?",
        "description": "Last match won?",
        "types": ["boolean", "unspecified"]
       },
    ],
  
    async code(cache) {
      
        const steamidResolver = require("steamid-resolver");
        const id = this.GetInputValue("user", cache);
        const api = this.GetOptionValue("api", cache);  

        const csgoStats = require('csgo-stats');
        const auth = {key: api, id: id};
        const res = await csgoStats.load(auth);
        const stats = res.body.playerstats.stats;

        this.StoreOutputValue((stats[0].value).toLocaleString("en-US"), "kills", cache);
        this.StoreOutputValue((stats[1].value).toLocaleString("en-US"), "death", cache);
        const kdraw = parseInt(stats[0].value)/parseInt(stats[1].value);
        const kd = kdraw.toFixed(2);
        this.StoreOutputValue(kd, "kd", cache);
        this.StoreOutputValue((stats[97].value).toLocaleString("en-US"), "mvps", cache);
        //LAST MATCH
        this.StoreOutputValue(stats[82].value, "twins", cache);
        this.StoreOutputValue(stats[83].value, "ctwins", cache);
        this.StoreOutputValue(stats[84].value, "wins", cache);

        const team = stats[82].value === stats[84].value;
        if (team) {
          this.StoreOutputValue("true", "team", cache)
        } else {
          this.StoreOutputValue("false", "team", cache)
        };
        this.StoreOutputValue(stats[86].value, "matchkills", cache);
        this.StoreOutputValue(stats[87].value, "matchdeaths", cache);
        const matchkdraw = parseInt(stats[86].value)/parseInt(stats[87].value);
        const matchkd = matchkdraw.toFixed(2);
        this.StoreOutputValue(matchkd, "matchkd", cache);
        this.StoreOutputValue(stats[93].value, "matchdmg", cache);

        const matchwon = stats[82].value > stats[83].value;
        if (matchwon) {
          this.StoreOutputValue("true", "matchwon", cache);
        } else {
          this.StoreOutputValue("false", "matchwon", cache);
        }

        if (matchwon === team) {
          this.StoreOutputValue("true", "wewon", cache);
        } else {
          this.StoreOutputValue("false", "wewon", cache);
        }

        
        this.RunNextBlock("action", cache);


    }}
  