module.exports = {
    name: "Play Song",

    description: "Plays audio (e.g. YouTube, Spotify, SoundCloud, ...)",

    category: ".Audio V2",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "voicechannel",
            "name": "Voice Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The Voice Channel to join...",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "song",
            "name": "Song Name/URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The Song URL/Name you want to Play.",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "emptycooldown",
            "name": "Empty VC Cooldown",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: If you set the bot to leave on Empty VC, then you can set a cooldown when he should leave",
            "types": ["number", "unspecified"]
        },
        {
            "id": "endcooldown",
            "name": "Queue End Cooldown",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: If you set the bot to leave on End, then you can set a cooldown when he should leave.",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "id": "leaveonempty",
            "name": "Leave on Empty VC?",
            "description": "Description: Leave on Empty Queue?",
            "type": "SELECT",
            "options": {
                false: "False/No",
                true: "True/Yes"
            }
        },
        {
            "id": "autoselfdeaf",
            "name": "Deaf Bot?",
            "description": "Description: Deaf Bot? (More Privacy)",
            "type": "SELECT",
            "options": {
                true: "True/Yes",
                false: "False/No"
            }
        },
        {
            "id": "leaveonened",
            "name": "Leave on End?",
            "description": "Description: Leave on End?",
            "type": "SELECT",
            "options": {
                false: "False/No",
                true: "True/Yes"
            }
        },
        {
            "id": "initialvolume",
            "name": "Initial Volume",
            "description": "Description: The Volume the bot should have!",
            "type": "TEXT"
        },
        {
            "id": "action",
            "name": "Action",
            "description": "Description: If the Song should play instantly or be added to the queue!",
            "type": "SELECT",
            "options": {
                "add": "Add to Queue",
                "play": "Play Now"
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
            "id": "actionerr",
            "name": "Action (Error)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if this Block has an error.",
            "types": ["action"]
        },
        {
            "id": "track",
            "name": "Track",
            "description": "Type: Object, List, Unspecified\n\nDescription: The Track Object/List",
            "types": ["object", "list", "unspecified"]
        },
        {
            "id": "err",
            "name": "Error Message",
            "description": "Type: Text, Unspecified\n\nDescription: The Error Message, if an error was thrown!",
            "types": ["text", "unspecified"]
        }
    ],

    async code(cache) {
        const song = this.GetInputValue("song", cache);
        const vc = this.GetInputValue("voicechannel", cache);

        const emptycooldown = this.GetInputValue("emptycooldown", cache) || 0;
        const endcooldown = this.GetInputValue("endcooldown", cache) || 0;

        var leaveonempty = this.GetOptionValue("leaveonempty", cache);
        var autoselfdeaf = this.GetOptionValue("autoselfdeaf", cache);
        var leaveonend = this.GetOptionValue("leaveonened", cache);
        var initialvolume = parseInt(this.GetOptionValue("initialvolume", cache)) || 50;

        if (leaveonempty == "true") {
            leaveonempty = true;
        } else {
            leaveonempty = false;
        }

        if (autoselfdeaf == "true") {
            autoselfdeaf = true;
        } else {
            autoselfdeaf = false;
        }

        if (leaveonend == "true") {
            leaveonend = true;
        } else {
            leaveonend = false;
        }
        const { useMasterPlayer, useQueue } = require("discord-player");
        const action = this.GetOptionValue("action", cache);

        const player = useMasterPlayer();
        try {
            const res = await player.play(vc, song, {
                nodeOptions: {
                    metadata: {
                        channel: vc
                    },
                    autoSelfDeaf: autoselfdeaf,
                    volume: initialvolume,
                    leaveOnEmpty: leaveonempty,
                    leaveOnEmptyCooldown: emptycooldown,
                    leaveOnEnd: leaveonend,
                    leaveOnEndCooldown: endcooldown,
                    connectionTimeout: 999999999
                }
            })
            if (action == "play") {
                if(res.queue.isPlaying()) {
                    res.queue.node.skipTo(res.track);
                }
            }
            if (!res.queue.isPlaying()) await res.queue.node.play();
            this.StoreOutputValue(res.track, "track", cache);
            this.RunNextBlock("action", cache);
        } catch (err) {
            console.error(err);
            this.StoreOutputValue(err.message, "err", cache);
            this.RunNextBlock("actionerr", cache);
            return;
        }
    }
}