module.exports = {
    name: "Captcha",

    description: "Gives the member a captcha.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "membere",
            "name": "Member",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member to send the captcha.",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks if the member passes the captcha",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If Failed)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if the member fails the captcha",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const Captcha = require("captcha-generator-better");
		const Discord = require('discord.js')
		let member = this.GetInputValue("membere", cache);
			let captcha = new Captcha();
			member.send(
				"**Complete the captcha to continue.**",
				new Discord.MessageAttachment(captcha.JPEGStream, "captcha.jpeg")
			).then(msg =>{
				let collector = msg.channel.createMessageCollector(m => true);
				collector.on("collect", m => {
					if (m.content.toUpperCase() === captcha.value) this.RunNextBlock("action1", cache);
					else this.RunNextBlock("action2", cache);
					collector.stop();
				});
		});
    }
}