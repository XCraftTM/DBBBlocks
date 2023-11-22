module.exports = {
    name: "Read tags from MP3",

    description: "Can read tags from MP3 file (Locally and online mp3 files)",

    category: "Audio Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "textin",
            "name": "MP3 File",
            "description": "The URL to the MP3 file or the file path (./data/amongus.mp3) for example",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [

    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "This action will happen once its done fetching the tags",
            "types": ["action"]
        },
        {
            "id": "actionerror",
            "name": "Action (Error)",
            "description": "This action will happen when it cant find the URL or file path",
            "types": ["action"]
        },
        {
            "id": "text",
            "name": "Tags",
            "description": "Use Get property from object to get the tags",
            "types": ["object"]
        },
        {
            "id": "error",
            "name": "Error Info",
            "description": "Extra info on the error that happend",
            "types": ["text"]
        }
		
    ],

   async code(cache) {
        const textin = this.GetInputValue("textin", cache);
        const jsmediatags = await this.require("jsmediatags");

        jsmediatags.read((textin), {
          onSuccess: ((tag) => {
			this.StoreOutputValue(tag.tags, "text", cache);
            this.RunNextBlock("action", cache);
           }),
          onError: ((error) => {
			this.StoreOutputValue(error, "error", cache);
            this.RunNextBlock("actionerror", cache);   
           })
        });
    }
}