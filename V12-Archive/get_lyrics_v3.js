module.exports = {
    name: "Get Lyrics V3",
  
    description: "Gets the lyrics /by M&RT!N!×J",
  
    category: ".MOD",
  
    inputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
        "types": ["action"]
      },
      {
        "id": "title",
        "name": "Search",
        "description": "Your song title to search lyrics for",
        "types": ["text", "unspecified"],
        "required": true
      },
    ],
  
    options: [],
  
    outputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
        "types": ["action"]
     },
     {
      "id": "action2",
      "name": "Action [Error]",
      "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes with error.",
      "types": ["action"]
   },
     {
      "id": "songname",
      "name": "Name",
      "description": "Song name",
      "types": ["text"]
    },
    {
      "id": "artist",
      "name": "Artist",
      "description": "Artist name",
      "types": ["text"]
    },
    {
      "id": "thumbnail",
      "name": "Thumbnail",
      "description": "Thumbnail URL",
      "types": ["text"]
    },
    {
      "id": "url",
      "name": "URL",
      "description": "URL",
      "types": ["text"]
    },
     {
      "id": "result",
      "name": "Lyrics",
      "description": "Result",
      "types": ["text"]
    },
    {
      "id": "outerror",
      "name": "Error",
      "description": "Error",
      "types": ["text"]
    },
    ],
  
   
    async code(cache) {
      try {
           const Genius = require("genius-lyrics");
           const Client = new Genius.Client();
           const title = this.GetInputValue("title", cache);
   
           const searches = await Client.songs.search(title);
   
           const firstSong = searches[0];
           await firstSong.lyrics().then((lyrics) => {
                   this.StoreOutputValue(firstSong.title, "songname", cache);
                   this.StoreOutputValue(firstSong.artist.name, "artist", cache);
                   this.StoreOutputValue(firstSong.thumbnail, "thumbnail", cache);
                   this.StoreOutputValue(firstSong.url, "url", cache);
                   this.StoreOutputValue(lyrics, "result", cache);
                   this.RunNextBlock("action", cache);
           }) 
          } catch (error) {
            this.StoreOutputValue(error, "outerror", cache);
            this.RunNextBlock("action2", cache);
      }
    }}