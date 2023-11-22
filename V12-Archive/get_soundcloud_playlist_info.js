module.exports = {
    name: "Get SoundCloud Playlist Info",
  
    description: "Gets the SoundCloud playlist info from link /by M&RT!N!×J",
  
    category: ".MJ",
  
    inputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
        "types": ["action"]
      },
      {
        "id": "url",
        "name": "URL",
        "description": "Spotify playlist URL",
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
      "description": "Result",
      "types": ["object", "unspecified"]
     },
    ],
  
    async code(cache) {
        const SoundCloud = require("soundcloud-scraper");
        const client = new SoundCloud.Client();
        const link = this.GetInputValue("url", cache);

        await client.getPlaylist(link).then((res) => {
          const input = res.tracks.map(o => o.url);
          this.StoreOutputValue(input, "result", cache);
          this.RunNextBlock("action", cache);
          }).catch((error) => console.error(error));
        }
  }