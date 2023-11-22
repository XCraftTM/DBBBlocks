module.exports = {
  name: "Rank Card",

  description: "Canvas rankcard By D_D_K#0001",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "user",
      "name": "User",
      "descripton": "User Username",
      "types": ["object", "unspecified"],
      "required": true
    },
    {
      "id": "color",
      "name": "Color",
      "description": "The color of content",
      "types": ["text", "unspecified"]
    },
    {
      "id": "current-xp",
      "name": "Current Xp",
      "descripton": "Member current xp value",
      "types": ["number", "unspecified"],
      "required": true
    },
    {
      "id": "level-cap",
      "name": "Level Cap value",
      "descripton": "value what member passed xp count to level-up",
      "types": ["number", "unspecified"],
      "required": true
    },
    {
      "id": "background",
      "name": "Image background",
      "description": "The background of Rank Cards",
      "types": ["text", "unspecified"]
    },
    {
      "id": "rank_of_user",
      "name": "User Rank",
      "descripton": "Rank of the user",
      "types": ["number", "unspecified"],
    },
    {
      "id": "level_of_user",
      "name": "User Level",
      "descripton": "Level of the user",
      "types": ["number", "unspecified"],
    },
    {
      "id": "status_boolean",
      "name": "User Status",
      "descripton": "Are you want to add user status to rank card",
      "types": ["boolean","unspecified"],
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
      "id": "attachment",
      "name": "Attachment",
      "description": "The png file created",
      "types": ["object", "unspecified"]
    }
  ],

  async code(cache) {
    const canvacord = require("canvacord");
    const Discord = require("discord.js");
    const color = this.GetInputValue("color", cache, false , "#ffffff");
    const current_xp = this.GetInputValue("current-xp", cache);
    const level_cap = this.GetInputValue("level-cap", cache);
    const rank_of_user = this.GetInputValue("rank_of_user", cache);
    const level_of_user = this.GetInputValue("level_of_user", cache);
    const user = this.GetInputValue("user", cache);
    const username = user.username;
    const background = this.GetInputValue("background", cache);
    const boolean_status = this.GetInputValue("status_boolean", cache);
    const discriminator = user.discriminator;
    const avatar = user.displayAvatarURL({dynamic: false, format: "png"});
    const rank = new canvacord.Rank()
      .setRankColor(color, "COLOR")
      .setLevelColor(color, "COLOR")
      .setAvatar(avatar)
      .setCurrentXP(current_xp, color)
      .setRequiredXP(level_cap, color)
      .setProgressBar(color, "COLOR")
      .renderEmojis(true)
      .setUsername(username, color)
      .setDiscriminator(discriminator, color)

      if(background) rank.setBackground("IMAGE", background);
      if(rank_of_user) rank.setRank(rank_of_user, true);
      if(level_of_user) rank.setLevel(level_of_user, true);
      if(boolean_status === true) {rank.setStatus(user.presence.status, true, 5)};
    rank.build()
      .then(async data => {
        //add rankcard to attachment
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        this.StoreOutputValue(attachment, "attachment", cache);
        this.RunNextBlock("action", cache);
    });
  }
}