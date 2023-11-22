module.exports = {
    name: "Get Last.fm Stats (Loop)",
  
    description: "Gets the Last.fm last played song \n by M&RT!N!×J",
  
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
        "name": "Profile Name",
        "description": "Enter your username on Last.fm",
        "types": ["text", "unspecified"],
        "required": true
      },
      {
        "id": "limit",
        "name": "Limit",
        "description": "Results limit",
        "types": ["number", "unspecified"],
        "required": true
      }
    ],
  
    options: [
      {
        "id": "api",
        "name": "API Key",
        "description": "API Key available on Last.fm site",
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
      "id": "actiondone",
      "name": "Action (Done)",
      "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
      "types": ["action"]
   },
     {
        "id": "action2",
        "name": "Action (Error)",
        "description": "Type: Action Error\n\nDescription: Executes the following blocks when this block finishes with error.",
        "types": ["action"]
     },
     {
      "id": "name",
      "name": "Name",
      "description": "Artist name list",
      "types": ["text", "unspecified"]
     },
     {
      "id": "url",
      "name": "URL",
      "description": "Artist URL list",
      "types": ["text", "unspecified"]
     },
     {
      "id": "count",
      "name": "Scrobbles",
      "description": "Artist Scrobble number list",
      "types": ["text", "unspecified"]
     },
     {
      "id": "rank",
      "name": "Position",
      "description": "Artist ranking position list",
      "types": ["text", "unspecified"]
     },
     {
      "id": "index",
      "name": "Index",
      "description": "Number (Index)",
      "types": ["number", "unspecified"]
     },
     {
        "id": "error",
        "name": "Error Message",
        "description": "error",
        "types": ["text", "unspecified"]
       },
    ],
  
    async code(cache) {
      try {
        const fetch = await this.require("node-fetch");
        const api = this.GetOptionValue("api", cache);
        const user = this.GetInputValue("user", cache);
        const limit = parseInt(this.GetInputValue("limit", cache));
        //Top artists URL
        const url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=" + user + "&api_key=" + api + "&limit=" + limit + "&format=json";
          
        const res = await fetch(url, {method: "get",headers: "",timeout: 7000});
        const data = "json" == "json" ? await res.json() : await res.text();
        const artist = data.topartists.artist.map(o => o.name);
        
        
        for (const [index, value] of Object.entries(artist)) {
          this.StoreOutputValue(data.topartists.artist[index].name, "name", cache);
          this.StoreOutputValue(data.topartists.artist[index].url, "url", cache);
          this.StoreOutputValue(data.topartists.artist[index].playcount, "count", cache);
          this.StoreOutputValue(data.topartists.artist[index]['@attr'].rank, "rank", cache);  
          this.StoreOutputValue(parseInt(index) + 1, "index", cache);
          this.RunNextBlock("action", cache)     
        } 
        this.RunNextBlock("actiondone", cache)

      } catch (error) {
        this.StoreOutputValue(error, "error", cache);
        this.RunNextBlock("action2", cache);
      }
    }}
  