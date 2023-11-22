module.exports = {
    name: "Get minecraft player skin image link",

    description: "Get minecraft player skin image link.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "player_name",
            "name": "Minecraft Player (Name)",
            "description": "Acceptable Types: Action\n\nDescription: The name of the minecraft skin.",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "type",
            "name": "Type",
            "description": "Description: The type of the image.",
            "type": "SELECT",
            "options": {
                "Avatars": "Avatars (The head in 2d)",
                "Head_Renders": "Head Renders (The head in 3d)",
                "Body_Renders": "Body Renders (The body in 3d)",
                "Skins": "Skins",
                "Capes": "Capes"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "link",
            "name": "Image link",
            "description": "Acceptable Types: Action\n\nDescription: The link to the skin image.",
            "types": ["text", "unspecified"]
        }
    ],

    async code(cache) {
        let link;
        const MinecraftAPI = await this.require('minecraft-api');
        const player_name = this.GetInputValue("player_name", cache) + '';
        const uuid = await MinecraftAPI.uuidForName(player_name);
        const type = this.GetOptionValue("type", cache);

        switch(type) {
            case "Avatars":
                link = "https://crafatar.com/avatars/" + uuid;
                break;
            case "Head_Renders":
                link = "https://crafatar.com/renders/head/" + uuid;
                break;
            case "Body_Renders":
                link = "https://crafatar.com/renders/body/" + uuid;
                break;
            case "Skins":
                link = "https://crafatar.com/skins/" + uuid;
                break;
            case "Capes":
                link = "https://crafatar.com/capes/" + uuid;
                break;
        }

        this.StoreOutputValue(link, "link", cache);
        this.RunNextBlock("action", cache);

    }
}