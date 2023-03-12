module.exports = {
    name: "Edit Message Embed (FIXED)",

    description: "Edits the embed to insert into a message.",

    category: "Message Embed Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "message_embed",
            "name": "Message Embed",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message embed to edit.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "color",
            "name": "Color",
            "description": "Acceptable Types: Text, Number, Unspecified\n\nDescription: The new color for this message embed. (OPTIONAL)",
            "types": ["text", "number", "unspecified"]
        },
        {
            "id": "thumbnail",
            "name": "Thumbnail URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new thumbnail URL for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "author_icon",
            "name": "Author Icon URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new author icon URL for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "author_name",
            "name": "Author Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new author name for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "author_url",
            "name": "Author URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new author URL for this message embed. This requires the embed author name to highlight it! (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "title",
            "name": "Title",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new title for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "url",
            "name": "URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new URL for this message embed. This requires the embed title to highlight it! (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "description",
            "name": "Description",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new description for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "image",
            "name": "Image URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new image URL for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "footer_icon",
            "name": "Footer Icon URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new footer icon URL for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "footer_text",
            "name": "Footer Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The new footer text for this message embed. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "timestamp",
            "name": "Timestamp (Date)",
            "description": "Acceptable Types: Date, Number, Unspecified\n\nDescription: The new timestamp (Date) for this message embed. If a boolean as \"true\", this uses the current time. (OPTIONAL)",
            "types": ["date", "number", "unspecified"]
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
            "id": "message_embed",
            "name": "Message Embed",
            "description": "Type: Object\n\nDescription: This message embed edited.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const { EmbedBuilder } = require('discord.js');
        const message_embed = this.GetInputValue("message_embed", cache);
        const color = this.GetInputValue("color", cache, false, "#2f3136");
        const thumbnail = this.GetInputValue("thumbnail", cache, true);
        const author_icon = this.GetInputValue("author_icon", cache);
        const author_name = this.GetInputValue("author_name", cache);
        const author_url = this.GetInputValue("author_url", cache);
        const title = this.GetInputValue("title", cache, true);
        const url = this.GetInputValue("url", cache, true);
        const description = this.GetInputValue("description", cache, true);
        const image = this.GetInputValue("image", cache, true);
        const footer_icon = this.GetInputValue("footer_icon", cache);
        const footer_text = this.GetInputValue("footer_text", cache);
        const timestamp = this.GetInputValue("timestamp", cache, true);

        const embed = new EmbedBuilder()
        if(color) {embed.setColor(color)} else {embed.setColor(message_embed['data'].color)};
        if(thumbnail) {embed.setThumbnail(thumbnail)} else {message_embed['data'].hasOwnProperty('thumbnail') ? embed.setThumbnail(message_embed['data'].thumbnail.url) : ""};
        if(author_icon || author_name || author_url) {
            embed.setAuthor({
            name: author_name || "\u200b",
            url: author_icon,
            icon_url: author_url
        })} else {message_embed['data'].hasOwnProperty('author') ? embed.setAuthor({
            name: message_embed['data'].author.hasOwnProperty('name') ? message_embed['data'].author.name : "\u200b",
            url: message_embed['data'].author.hasOwnProperty('url') ? message_embed['data'].author.url : undefined,
            icon_url: message_embed['data'].author.hasOwnProperty('icon_url') ? message_embed['data'].author.icon_url : undefined
        }) : ""};
        if(title) {embed.setTitle(title.value)} else {message_embed['data'].hasOwnProperty('title') ? embed.setTitle(message_embed['data'].title) : ""};
        if(url) {embed.setURL(url.value)} else {message_embed['data'].hasOwnProperty('url') ? embed.setURL(message_embed['data'].url) : ""};
        if(description) {embed.setDescription(description.value)} else {message_embed['data'].hasOwnProperty('description') ? embed.setDescription(message_embed['data'].description) : ""};
        if(image) {embed.setImage(image.value)} else {message_embed['data'].hasOwnProperty('image') ? embed.setImage(message_embed['data'].image.url) : ""};
        if(footer_icon || footer_text) {
            embed.setFooter({
            text: footer_text || "\u200b",
            icon_url: footer_icon
        })} else {message_embed['data'].hasOwnProperty('footer') ? embed.setFooter({
            text: message_embed['data'].footer.hasOwnProperty('text') ? message_embed['data'].footer.text : "\u200b",
            icon_url: message_embed['data'].footer.hasOwnProperty('icon_url') ? message_embed['data'].footer.icon_url : ""
        }) : ""};
        if(timestamp) {embed.setTimestamp(timestamp.value)} else {message_embed['data'].hasOwnProperty('timestamp') ? embed.setTimestamp(message_embed['data'].timestamp.value) : ""};

        this.StoreOutputValue(embed, "message_embed", cache);
        this.RunNextBlock("action", cache);
    }
}