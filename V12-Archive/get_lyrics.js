module.exports = {
  name: "Get Lyrics",

  description: "Gets the lyrics of your song from genius.com",

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
      "name": "Title",
      "description": "Your song title to search lyrics for",
      "types": ["text", "unspecified"],
      "required": true
    },
    {
      "id": "artist",
      "name": "Artist",
      "description": "The artist of the song (OPTIONAL)",
      "types": ["text", "unspecified"]
    },
    {
      "id": "key",
      "name": "Client Access Token",
      "description": "Get it from here \n\nhttps://genius.com/api-clients",
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
    "id": "result",
    "name": "Result",
    "description": "The lyrics if there is one",
    "types": ["text", "unspecified"]
   }
  ],

  async code(cache) {

    const { getLyrics, getSong } = await this.require('genius-lyrics-api');
    const key = this.GetInputValue("key", cache);
    const title = this.GetInputValue("title", cache);
    let artist = this.GetInputValue("artist", cache);
    if (artist == undefined) {
      artist = '';
    }

    const options = {
      apiKey: key,
      title: title,
      artist: artist,
      optimizeQuery: true
    };

    getLyrics(options).then((lyrics) => {
    this.StoreOutputValue(lyrics, "result", cache);
    this.RunNextBlock("action", cache)});
  }
}