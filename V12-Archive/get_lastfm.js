module.exports = {
    name: "Get Last.fm",
  
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
      }
    ],
  
    options: [
      {
        "id": "api",
        "name": "API Key",
        "description": "API Key available on Last.fm site",
        "type": "TEXT"
    },
    {
      "id": "secret",
      "name": "Secret Key",
      "description": "Secret Key available on Last.fm site",
      "type": "TEXT"
    }
    ],
  
    outputs: [
      {
        "id": "action1",
        "name": "Action",
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
      "id": "realname",
      "name": "Account name",
      "description": "user profile name",
      "types": ["text", "unspecified"]
     },
     {
      "id": "count",
      "name": "Scrobbles",
      "description": "Number of scrobbles",
      "types": ["number", "unspecified"]
     },
     {
      "id": "profilepic",
      "name": "Profile picture",
      "description": "Profile picture",
      "types": ["text", "unspecified"]
     },
     {
      "id": "userurl",
      "name": "User URL",
      "description": "user profile url",
      "types": ["text", "unspecified"]
     },
     {
      "id": "date",
      "name": "Date of creation",
      "description": "Date of profile creation",
      "types": ["text", "unspecified"]
     },
     {
      "id": "songname",
      "name": "Now: Song",
      "description": "song name",
      "types": ["text", "unspecified"]
     },
     {
      "id": "artistname",
      "name": "Now: Artist",
      "description": "artist name",
      "types": ["text", "unspecified"]
     },

     {
      "id": "url",
      "name": "Now: URL",
      "description": "url",
      "types": ["text", "unspecified"]
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
        const { LastFmNode } = require("@wheredidhugo/lastfm"),
          api = this.GetOptionValue("api", cache),
          secret = this.GetOptionValue("secret", cache),
          user = this.GetInputValue("user", cache),
          url = "https://www.last.fm/user/" + user;
          apiurl = "http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=" + user + "&api_key=" + api + "&format=json";
          lastfm = new LastFmNode({
            api_key: api,
            secret: secret,
          }),
          
        
         
          trackStream = lastfm.stream(user);

          const res = await fetch(apiurl, {method: "get",headers: "",timeout: 7000});
          const data = "json" == "json" ? await res.json() : await res.text();
          const countraw = data.user.playcount;
          const count = countraw.toLocaleString("en-US")
          this.StoreOutputValue(count, "count", cache);
          this.StoreOutputValue(data.user.realname, "realname", cache);
          this.StoreOutputValue(data.user.image[2]['#text'], "profilepic", cache);
          
          const getdate = new Date(parseInt((data.user.registered['#text'])*1000));
          const date = getdate.getDate() + ". " + (getdate.getMonth()+1) + ". " + getdate.getFullYear();
          this.StoreOutputValue(date, "date", cache);

          
          
    
        trackStream.on("lastPlayed", ((track) => {
          this.StoreOutputValue(track.name, "songname", cache);
          this.StoreOutputValue(track.artist["#text"], "artistname", cache);
          this.StoreOutputValue(track.url, "url", cache);
          this.StoreOutputValue(url, "userurl", cache);
          this.RunNextBlock("action1", cache);
        }));

        
        trackStream.start();
    
        setTimeout(() => {
          trackStream.stop();
        }, 1000);

      } catch (error) {
        this.StoreOutputValue(error, "error", cache);
        this.RunNextBlock("action2", cache);
      }
    }}
  