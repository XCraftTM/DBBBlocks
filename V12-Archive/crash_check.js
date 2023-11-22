module.exports = {
    name: "Check if Video/Gif Link Crash",

    description: "Checks if a Link to a gif/video crashes Discord Chromium.",

    category: ".EXCORDO",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "string",
            "name": "Input Link",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member to kick from the server.",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
          "id": "action",
          "name": "Action (If True)",
          "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
          "types": ["action"]
       },
       {
        "id": "action2",
        "name": "Action (If False)",
        "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
        "types": ["action"]
       }
    ],

    async code(cache) {
        const crashDetector = await this.require("gif-discord-crash-detector");
        const string = this.GetInputValue("string", cache);

        crashDetector.DisableLog();
        let crashFound = await crashDetector.isCrashVideo(string, 'temp_file_name_you_want.mp4');
        if (crashFound) {
            this.StoreOutputValue(crashFound, "result", cache);
        }
        if (crashFound) {
            this.RunNextBlock("action", cache);
          } else {
            this.RunNextBlock("action2", cache);
          }
    }
}

