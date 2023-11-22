module.exports = {
    name: "Queue Loop",

    description: "Loops the list. For each item in the list, this will return its position number and value.",

    category: ".MJ",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "list",
            "name": "List",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to loop.",
            "types": ["list", "unspecified"],
            "required": true
        },
        {
            "id": "wait",
            "name": "Wait",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: Wait [ms] between each song from queue",
            "types": ["number", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Looped Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks for each item in the list.",
            "types": ["action"]
        },
          {
            "id": "action2",
            "name": "Action (When finished)",
            "description": "Type: Action\n\nDescription: Executes the following blocks for each item in the list.",
            "types": ["action"]
        },
        {
            "id": "song",
            "name": "Song output",
            "description": "Type: Number\n\nDescription: The item :)",
            "types": ["number"]
        },
    ],

   async code(cache) {
        const list = this.GetInputValue("list", cache);
        const ytsr = await this.require("ytsr");
        let time = this.GetInputValue("wait", cache) || 0;
        const sleep = ms => {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        for (const [index, value] of Object.entries(list))  {
            //IS ONLY ID OR FULL URL?//
            let cheq = value.includes("watch?v=");
            let svalue;
            let title;
            
            //SOUNDCLOUD//
            if (value.includes("sndcdn")) {
                const SoundCloud = require("soundcloud-scraper");
                const client = new SoundCloud.Client();
                const scurl = value.split("&url=")[1];
                
                const song = await client.getSongInfo(scurl).catch((err) => {console.log("ERR")});
                let titleraw;
                if (!song) {
                    titleraw = "Unnamed SoundCloud";
                } else {
                    titleraw = song.title;
                }
                title = titleraw;
            } //YOUTUBE//
            else {
                let title2;
                //IF ID ADD FULL URL//
                if (!cheq) {
                    svalue = "https://www.youtube.com/watch?v=" + value;
                    //Final search//
                    const res = await ytsr(svalue, { limit: "2"})
       		        //Get First Result//
                    const foundobj = res.items["1" - 1];   
                    //CONTROLLER//
                    let titleraw;
                    if (foundobj === undefined) {
                        titleraw = "undefined";
                    } 
                    else {
                        const foundval = foundobj.title + foundobj.url;

                        let check = foundval.includes(value);
                 
                        let result;
                        if (!check) {
                            result = res.items["1"];
                        }
                        else {
                            result = foundobj;
                        }
                        titleraw = result.title;
                    }
                    title2 = titleraw;
                } else {
                    //Final search//
                    const res = await ytsr(value, { limit: "2"})
                    //Get First Result//
                    const foundobj = res.items["1" - 1];
                    //CONTROLLER//
                    console.log("HERE");
                    const foundval = foundobj.title + foundobj.url;
                    let check = foundval.includes(value);
                
                    let result;
                    if (!check) {
                        result = res.items["1"];
                    }
                    else {
                        result = foundobj;
                    }    
                    title2 = result.title;
                }
                title = title2;
            } 
            let num = parseInt(index) + 1;
                               
            this.StoreOutputValue("\`✨" + "" + num + "\` | \`" + title + "\`" + "\n\n", "song", cache);
            this.RunNextBlock("action", cache);
            await sleep(time);
        }
        
      this.RunNextBlock("action2", cache);
    }
}