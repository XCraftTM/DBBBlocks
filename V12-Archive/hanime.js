module.exports = {
  name: "Hanime Search",

  description: "Hanime.tv Search block",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"],
      "required": true
    },
    {
      "id": "search",
      "name": "Search",
      "description": "The Hentai Video Title To Search",
      "types": ["text", "unspecified"]
    },
    {
      "id": "number",
      "name": "Search number",
      "description": "The Hentai Video Result Number (OPTIONAL)",
      "types": ["number", "unspecified"]
    }
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
      "id": "cover",
      "name": "Thumbnail URL",
      "description": "The Hentai Cover Image",
      "types": ["text","unspecified"]
   },

   {
      "id": "name",
      "name": "Title",
      "description": "The Hentai Title",
      "types": ["text","unspecified"]
   },

   {
      "id": "video",
      "name": "URL",
      "description": "The Hentai Video URL",
      "types": ["text","unspecified"]
   },

   {
      "id": "description",
      "name": "Description",
      "description": "The Hentai Description",
      "types": ["text","unspecified"]
   },
   
   {
     "id": "poster",
     "name": "Image URL",
     "description": "The Hentai Poster image",
     "types": ["text","unspecified"]
    },
    {
      "id": "tags",
      "name": "Tags",
      "description": "The Tags Of The Hentai Video",
      "types": ["list", "unspecified"]
     }
   
  ],

  async code(cache) {
      const { HAnimeAPI }  = await this.require('hanime');
      const api = new HAnimeAPI();

      const number = this.GetInputValue("number", cache);
      const search = this.GetInputValue("search", cache);
      const result = await api.search(search);
      const video = await api.get_video(result.videos[number]);

      const name = video.name;
      const description = video.description;
      const video_url = video.video_url;
      const cover_url = video.cover_url;
      const poster_url = video.poster_url;
      const tags = video.tags;

      this.StoreOutputValue(name, "name", cache);
      this.StoreOutputValue(description, "description", cache);
      this.StoreOutputValue(video_url, "video", cache);
      this.StoreOutputValue(cover_url, "cover", cache);
      this.StoreOutputValue(poster_url, "poster", cache);
      this.StoreOutputValue(tags, "tags", cache);
      this.RunNextBlock("action", cache);
  }
}