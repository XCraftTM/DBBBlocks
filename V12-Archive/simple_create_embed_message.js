module.exports = {
    name: "Simple Create Message Embed",

    description: "Creates a simple, self contained Embed. By EnemyYegar",

    category: "Message Embed Stuff",
	
	options: [
        {
            "id": "color",
            "name": "Color",
            "description": "Description: The color to set.",
            "type": "COLOR"
        },
		{
            "id": "thumbnail",
            "name": "Thumbnail URL",
            "description": "Description: Thumbnail.",
            "type": "TEXT"
        },
		{
            "id": "author_icon",
            "name": "Author Icon URL",
            "description": "Description: Author Icon URL",
            "type": "TEXT"
        },		
		{
            "id": "author_name",
            "name": "Author Name",
            "description": "Description: Author Name.",
            "type": "TEXT"
        },		
		{
           "id": "author_url",
            "name": "Author URL",
            "description": "Description: Author URL.",
            "type": "TEXT"
        },
		{
            "id": "title",
            "name": "Title",
            "description": "Description: Title.",
            "type": "TEXT"
        },		
		{
            "id": "url",
            "name": "URL",
            "description": "Description: URL.",
            "type": "TEXT"
        },		
		{
            "id": "description",
            "name": "Description",
            "description": "Description: Description.",
            "type": "TEXT"
        },
		{
            "id": "image",
            "name": "Image URL",
            "description": "Description: Image URL.",
            "type": "TEXT"
        },		
		{
             "id": "footer_icon",
            "name": "Footer Icon URL",
            "description": "Description: Footer Icon.",
            "type": "TEXT"
        },			
		{
            "id": "footer_text",
            "name": "Footer Text",
            "description": "Description: Footer Text.",
            "type": "TEXT"
        }		
	],

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "timestamp",
            "name": "Timestamp (Date)",
            "description": "Acceptable Types: Date, Number, Boolean, Unspecified\n\nDescription: The timestamp (Date) for this message embed. If a boolean as \"true\", this uses the current time. (OPTIONAL)",
            "types": ["date", "number", "boolean", "unspecified"]
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
            "id": "message_embed",
            "name": "Message Embed",
            "description": "Type: Object\n\nDescription: This message embed created.",
            "types": ["object"]
        }

    ],

    code: function(cache) {
		const color = this.GetOptionValue("color", cache, false, "#2f3136");
        const thumbnail = this.GetOptionValue("thumbnail", cache, true);
        const author_icon = this.GetOptionValue("author_icon", cache);
        const author_name = this.GetOptionValue("author_name", cache, true);
        const author_url = this.GetOptionValue("author_url", cache);
        const title = this.GetOptionValue("title", cache, true);
        const url = this.GetOptionValue("url", cache, true);
        const description = this.GetOptionValue("description", cache, true);
        const image = this.GetOptionValue("image", cache, true);
        const footer_icon = this.GetOptionValue("footer_icon", cache);
        const footer_text = this.GetOptionValue("footer_text", cache, true);
        const timestamp = this.GetInputValue("timestamp", cache, true);
        const discordJS = require("discord.js");
        const embed = new discordJS.MessageEmbed()
        .setColor(color);

        if(thumbnail) embed.setThumbnail(thumbnail.value);
        if(author_icon || author_name || author_url) embed.setAuthor((author_name && author_name.value) || "\u200b", author_icon, author_url);
        if(title) embed.setTitle(title.value);
        if(url) embed.setURL(url.value);
        if(description) embed.setDescription(description.value);
        if(image) embed.setImage(image.value);
        if(footer_icon || footer_text) embed.setFooter((footer_text && footer_text.value) || "\u200b", footer_icon);
        if(timestamp) embed.setTimestamp(timestamp.value === true ? undefined : timestamp.value);

        this.StoreOutputValue(embed, "message_embed", cache);
        this.RunNextBlock("action", cache);
		
    }
}