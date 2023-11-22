module.exports = {
    name: "Captcha",

    description: "generates and sends the user a captcha test.",

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
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes if the user completes the captcha.",
            "types": ["action"]
        }
    ],

    code(cache) {
		const Captcha = require("captcha-generator-better");
		const Discord = require('discord.js')
		let member = this.GetInputValue("membere", cache);
			let captcha = new Captcha();
			member.send(
				"**Enter the text shown in the image below:**",
				new Discord.MessageAttachment(captcha.JPEGStream, "captcha.jpeg")
			).then(msg =>{
				let collector = msg.channel.createMessageCollector(m => true);
				collector.on("collect", m => {
					if (m.content.toUpperCase() === captcha.value) this.RunNextBlock("action", cache);
					else member.send("Verification Failed, You can leave and rejoin the server to retry!");
					collector.stop();
				});
		});
    }
}