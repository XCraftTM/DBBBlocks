module.exports = {
    name: "Discord Together",

    description: "Make Discord Application games/apps",

    category: "Channel Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },		
        {
            "id": "channel",
            "name": "Voice Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The voice channel to make an invite off",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "textinput",
            "name": "Custom Text Input",
            "description": "Inputs : chess/youtube/poker/betrayal/fishing",
            "types": ["text", "unspecified"]
        },
        {
            "id": "customid",
            "name": "Custom ID",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The custom application ID",
            "types": ["text", "unspecified"]
        }
		
    ],

    options: [
        {
            "id": "type",
            "name": "Type",
            "description": "The type of game to host",
            "type": "SELECT",
            "options": {
                1: "Text Input",
                2: "Youtube",
                3: "Poker",
                4: "Chess",
                5: "Betrayal",
                6: "Fishing",
				7: "Lettertile",
				8: "Wordsnack",
				9: "Doodlecrew",
				10: "Awkword",
				11: "Spellcast",
                12: "Checkers",
                13: "Puttparty",
                14: "Sketchheads",
                15: "Ocho",
				16: "Custom ID"
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
            "id": "textaction",
            "name": "Text Input Error",
            "description": "Type: Action\n\nDescription: Executes the following block if text value is invalid",
            "types": ["action"]
        },
        {
            "id": "link",
            "name": "URL",
            "description": "Type: Action\n\nDescription: The URL. NEEDS TO BE IN EMBED!",
            "types": ["text"]
        }
    ],




    async code(cache) {
        const channel = this.GetInputValue("channel", cache);
        const textinput = this.GetInputValue("textinput", cache);
        const customid = this.GetInputValue("customid", cache);
        const channelID = channel.id;
        const type = parseInt(this.GetOptionValue("type", cache));
        const client = this.client;
        const token = client.token;
		var check = false;

		
		
		
		let result;
        switch(type) {
            case 1:

                if (textinput.toLowerCase() == 'chess') {
				    result = '832012774040141894';
				}
				else if (textinput.toLowerCase() == 'fishing') {
					result = '814288819477020702';
				}
				else if (textinput.toLowerCase() == 'poker') {
					result = '755827207812677713';
				}
				else if (textinput.toLowerCase() == 'youtube') {
					result = '880218394199220334';
				}
				else if (textinput.toLowerCase() == 'betrayal') {
					result = '773336526917861400';
				}
				else if (textinput.toLowerCase() == 'lettertile') {
					result = '879863686565621790';
				}
				else if (textinput.toLowerCase() == 'wordsnack') {
					result = '879863976006127627';
				}
				else if (textinput.toLowerCase() == 'doodlecrew') {
					result = '878067389634314250';
				}
				else if (textinput.toLowerCase() == 'awkword') {
					result = '879863881349087252';
				}
				else if (textinput.toLowerCase() == 'spellcast') {
					result = '852509694341283871';
				}
                else if (textinput.toLowerCase() == 'checkers') {
                    result = '832013003968348200';
                }  
                else if (textinput.toLowerCase() == 'puttparty') {
                    result = '763133495793942528';
                }
                else if (textinput.toLowerCase() == 'sketchheads') {
                    result = '902271654783242291';
                } 
                else if (textinput.toLowerCase() == 'ocho') {
                    result = '832025144389533716';
                }                                
				else{
					this.RunNextBlock("textaction", cache)
					var check = true;
				}
				
                break;
            case 2:
                result = '880218394199220334';
                break;
            case 3:
                result = '755827207812677713';
                break;
            case 4:
                result = '832012774040141894';
                break;
            case 5:
                result = '773336526917861400';
                break;
            case 6:
                result = '814288819477020702';
                break;
			case 7:
                result = '879863686565621790';
                break;
			case 8:
                result = '879863976006127627';
                break;
			case 9:
                result = '878067389634314250';
                break;
			case 10:
                result = '879863881349087252';
                break;
			case 11:
                result = '852509694341283871';
                break;
            case 12:
                result = '832013003968348200';
                break;
            case 13:
                result = '763133495793942528';
                break;
            case 14:
                result = '902271654783242291';
                break;
            case 15:
                result = '832025144389533716';
                break;
            case 16:
                result = customid;
		    break;
			}
		
        const fetch = await this.require("node-fetch");
	const r = await fetch(`https://discord.com/api/v8/channels/${channelID}/invites`, {
			
     method: 'POST',
     headers: { authorization: `Bot ${token}`, 'content-type': 'application/json' },
     body: JSON.stringify({
       max_age: 60,
       max_uses: 1,
       target_type: 2,
       target_application_id: result
     })
  })

  const invite = await r.json()
  
if (check == false) {
  this.StoreOutputValue('https://discord.gg/'+invite.code, "link", cache)
  this.RunNextBlock("action", cache)
}
    }
}