module.exports = {
    name: "Get SoundCloud Info",
  
    description: "Gets the SoundCloud track info from a link /by M&RT!N!×J",
  
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
        "description": "SoundCloud song URL",
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
      "id": "title",
      "name": "Title",
      "description": "song title",
      "types": ["text"]
     },
     {
      "id": "artist",
      "name": "Artist",
      "description": "song artist",
      "types": ["text"]
     },
     {
      "id": "image",
      "name": "Image URL",
      "description": "album image URL",
      "types": ["text"]
     },
    ],
  
    async code(cache) {
        const SoundCloud = require("soundcloud-scraper");
        const client = new SoundCloud.Client();
        const link = this.GetInputValue("url", cache);
        const isurl = link.includes("&utm");
        
        if (isurl) {
        const url1 = link.split("&utm")[0];
        const isurl2 = url1.includes("?in");
            if (isurl2) {
                const url2 = link.split("?in")[0];
                await client.getSongInfo(url2).then((res) => {
                    this.StoreOutputValue(res.title, "title", cache);
                    this.StoreOutputValue(res.author.name, "artist", cache);
                    this.StoreOutputValue(res.thumbnail, "image", cache);
                    this.RunNextBlock("action", cache);
            }).catch((error) => console.error(error));} 
            else {
                await client.getSongInfo(url1).then((res) => {
                    this.StoreOutputValue(res.title, "title", cache);
                    this.StoreOutputValue(res.author.name, "artist", cache);
                    this.StoreOutputValue(res.thumbnail, "image", cache);
                    this.RunNextBlock("action", cache);
            }).catch((error) => console.error(error));}
        }
        else {
            const isurl2 = link.includes("?in");
            if (isurl2) {
                const url2 = link.split("?in")[0];
                await client.getSongInfo(url2).then((res) => {
                    this.StoreOutputValue(res.title, "title", cache);
                    this.StoreOutputValue(res.author.name, "artist", cache);
                    this.StoreOutputValue(res.thumbnail, "image", cache);
                    this.RunNextBlock("action", cache);
            }).catch((error) => console.error(error));} 
            else {
                await client.getSongInfo(link).then((res) => {
                    this.StoreOutputValue(res.title, "title", cache);
                    this.StoreOutputValue(res.author.name, "artist", cache);
                    this.StoreOutputValue(res.thumbnail, "image", cache);
                    this.RunNextBlock("action", cache);
            }).catch((error) => console.error(error));}
        }
    }
  }
  