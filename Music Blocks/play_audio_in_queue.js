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
        }
    ],

    options: [
        {
            "id": "leaveonempty",
            "name": "Leave on Empty Queue?",
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
            "id": "track",
            "name": "Track",
            "description": "Type: Object, List, Unspecified\n\nDescription: The Track Object/List",
            "types": ["object", "list", "unspecified"]
        }
    ],

    async code(cache) {
        const song = this.GetInputValue("song", cache);
        const vc = this.GetInputValue("voicechannel", cache);

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

        const { useMasterPlayer } = require("discord-player");
        const player = useMasterPlayer();
        const res = await player.play(vc, song, {
            nodeOptions: {
                metadata: {
                    channel: vc
                },
                autoSelfDeaf: autoselfdeaf,
                volume: initialvolume,
                leaveOnEmpty: leaveonempty,
                leaveOnEnd: leaveonend
            }
        });

        if(res.searchResult.playlist) {
            this.StoreOutputValue(res.searchResult.tracks, "track", cache);
        } else {
            this.StoreOutputValue(res.track, "track", cache);
        }
        this.RunNextBlock("action", cache);
    }
}