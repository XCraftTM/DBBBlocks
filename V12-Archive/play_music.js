module.exports = {
    name: "Play Music",

    description: "Plays the audio",

    category: ".MJ",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: The server to play this music. Supports server ID.",
            "types": ["object", "text", "unspecified"],
            "required": true
        },
        {
            "id": "url",
            "name": "URL/ Search",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The URL of the YouTube, YouTube Music, Spotify or Soundcloud song or playlist (album).",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "seek",
            "name": "Seek",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The time to seek to. Default: \"0\" or the current seek. (OPTIONAL)",
            "types": ["number", "unspecified"]
        },
        {
            "id": "volume",
            "name": "Volume",
            "description": "Acceptable Types: Number, Boolean, Unspecified\n\nDescription: The volume to play at. Put the boolean \"false\" to disable volume transforms for this stream to improve performance. Default: \"1\" or the current volume. (OPTIONAL)",
            "types": ["number", "boolean", "unspecified"]
        },
        {
            "id": "bitrate",
            "name": "Bitrate",
            "description": "Acceptable Types: Number, Text, Unspecified\n\nDescription: The bitrate (quality) of the audio in kbps. If set to \"auto\", the voice channel's bitrate will be used. Default: \"auto\" or the current bitrate. (OPTIONAL)",
            "types": ["number", "text", "unspecified"]
        },
        {
            "id": "custom_position",
            "name": "Custom Position",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The custom position to add the audio to the server queue. Starts at \"0\". (Only use this input if you selected the option \"Custom Position\")",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "id": "audio_behavior_type",
            "name": "Audio Behavior Type",
            "description": "Description: The type of audio behavior.",
            "type": "SELECT",
            "options": {
                "add_last": "Add To Server Queue (Last Position)",
                "add_first": "Add To Server Queue (First Position)",
                "add_random": "Add To Server Queue (Random Position)",
                "add_custom": "Add To Server Queue (Custom Position)",
                "play_now": "Play Now"
            }
        },
        {
            "id": "audio_quality_type",
            "name": "Audio Quality Type",
            "description": "Description: The type of audio quality.",
            "type": "SELECT",
            "options": {
                "highestaudio": "Highest Audio Quality",
                "lowestaudio": "Lowest Audio Quality"
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
            "id": "id",
            "name": "ID",
            "description": "Type: Action\n\nDescription: Identificator + Type",
            "types": ["text", "unspecified"]
        },
        {
            "id": "url",
            "name": "URL",
            "description": "Type: Action\n\nDescription: YouTube/SoundCloud URL",
            "types": ["text", "unspecified"]
        }
    ],

    async code(cache) {
        const server = this.GetInputValue("server", cache);
        const urlraw = this.GetInputValue("url", cache) + "";
        const seek = this.GetInputValue("seek", cache, true);
        const volume = this.GetInputValue("volume", cache, true);
        const bitrate = this.GetInputValue("bitrate", cache, true);
        const custom_position = parseInt(this.GetInputValue("custom_position", cache));
        const audio_behavior_type = this.GetOptionValue("audio_behavior_type", cache) + "";
        const audio_quality_type = this.GetOptionValue("audio_quality_type", cache) + "";

        const _server = typeof server == "object" ? server.id : server + "";

        const ytdl = await this.require("ytdl-core-discord");



        //IF YT MUSIC LINK -> YT LINK, ELSE NOTHING//
        let url;
        if(urlraw.includes("music.youtube")) {
            const result = urlraw.split("music.")[1];
            let urledit;
            //IF INCLUDES FEATURE=SHARE, ELSE ADD HTTPS//
            if (result.includes("&feature=share")) {
                urledit = "https://" + result.split("&feature=share")[0];
            } else {
                urledit = "https://" + result;
            }    
            url = urledit;
        } else if(urlraw.includes("soundcloud")) {
            let urledit1;
            if (urlraw.includes("?")) {
                urledit1 = urlraw.split("?")[0];
            } else {
                urledit1 = urlraw;
            }
            let urledit2;
            if (urledit1.includes("&utm")) {
                urledit2 = urledit1.split("&utm")[0];
            } else {
                urledit2 = urledit1;
            }
            let urledit3;
            if (urledit2.includes("?in")) {
                urledit3 = urledit2.split("?in")[0];       
            } else {
                urledit3 = urledit2;
            };
            url = urledit3;
        } else {
            url = urlraw;
        }
        //<--END-->//

        //IDENTIFICATOR//
        let identificator;
        let type;
        if (url.includes("spotify.com/track")) {
            identificator = "spotify";
            type = "song";
        } else if (url.includes("spotify.com/album")) {
            identificator = "spotify";
            type = "playlist";
        } else if (url.includes("spotify.com/playlist")) {
            identificator = "spotify";
            type = "playlist";
        } else if (url.includes("watch?v")) {
            identificator = "yt";
            type = "song";
        } else if (url.includes("playlist?list")) {
            identificator = "yt";
            type = "playlist";
        } else if (url.includes("soundcloud")) {
            type = "soundcloud";
        } else {
            identificator = "meowvalid";
            type = "song";
        };
        //<--END-->//

        //SONG OR PLAYLIST??//

        //SONG//
        if(type === "song") {
            //✅ SPOTIFY SONG//
            //#region
            if(identificator === "spotify") {
                const fetch = require('isomorphic-unfetch');
                const { getPreview } = require("spotify-url-info")(fetch);
                const spotifyraw = await getPreview(url);
                const spotifytext = spotifyraw.title + spotifyraw.artist;
                const ytsr = await this.require("ytsr");
                const res = await ytsr(spotifytext, { limit: "1"});
                const yturl = res.items[0].url;
                const options = {
                    type: "yt",
                    quality: audio_quality_type,
                    url: ytdl.getVideoID(yturl)
                };
                if(seek) options.seek = parseInt(seek.value);
                if(volume) options.volume = volume.volume;
                if(bitrate) options.bitrate = seek.bitrate;

                let position = -1;
                switch (audio_behavior_type) {
                    case "add_last":
                        break;
                    case "add_first":
                    case "play_now":
                        position = 0;
                        break;
                    case "add_random":
                        const serverQueue = this.getServerQueue(_server);
                        position = serverQueue ? Math.round(Math.random() * serverQueue.queue.length) : 0;
                        break;
                    case "add_custom":
                        position = custom_position;
                        break;
                }
                this.addQueue(_server, options, position, audio_behavior_type == "play_now");
                this.StoreOutputValue(identificator + " " + type, "id", cache);
                this.StoreOutputValue(yturl, "url", cache);
                this.RunNextBlock("action", cache);
            } 
            //#endregion
            //✅ YOUTUBE SONG//
            //#region
            else if (identificator === "yt") {
                const options = {
                    type: "yt",
                    quality: audio_quality_type,
                    url: ytdl.getVideoID(url)
                };
                if(seek) options.seek = parseInt(seek.value);
                if(volume) options.volume = volume.volume;
                if(bitrate) options.bitrate = seek.bitrate;

                let position = -1;
                switch (audio_behavior_type) {
                    case "add_last":
                        break;
                    case "add_first":
                    case "play_now":
                        position = 0;
                        break;
                    case "add_random":
                        const serverQueue = this.getServerQueue(_server);
                        position = serverQueue ? Math.round(Math.random() * serverQueue.queue.length) : 0;
                        break;
                    case "add_custom":
                        position = custom_position;
                        break;
                }
                this.addQueue(_server, options, position, audio_behavior_type == "play_now");
                this.StoreOutputValue(identificator + " " + type, "id", cache);
                this.StoreOutputValue(url, "url", cache);
                this.RunNextBlock("action", cache);
            }
            //#endregion
            //✅ MEOWVALID//
            //#region
            else if (identificator === "meowvalid"){
                const ytsr = await this.require("ytsr");
                const res = await ytsr(url, { limit: "1"});
                const yturl = res.items[0].url;
                const options = {
                    type: "yt",
                    quality: audio_quality_type,
                    url: ytdl.getVideoID(yturl)
                };
                if(seek) options.seek = parseInt(seek.value);
                if(volume) options.volume = volume.volume;
                if(bitrate) options.bitrate = seek.bitrate;

                let position = -1;
                switch (audio_behavior_type) {
                    case "add_last":
                        break;
                    case "add_first":
                    case "play_now":
                        position = 0;
                        break;
                    case "add_random":
                        const serverQueue = this.getServerQueue(_server);
                        position = serverQueue ? Math.round(Math.random() * serverQueue.queue.length) : 0;
                        break;
                    case "add_custom":
                        position = custom_position;
                        break;
                }
                this.addQueue(_server, options, position, audio_behavior_type == "play_now");
                this.StoreOutputValue(identificator + " " + type, "id", cache);
                this.StoreOutputValue(yturl, "url", cache);
                this.RunNextBlock("action", cache);
            }
            //#endregion
        }

        //PLAYLIST//
        else if (type === "playlist"){
            //✅ SPOTIFY PLAYLIST//
            //#region
            if (identificator === "spotify"){
                const fetch = require('isomorphic-unfetch');
                const { getPreview, getTracks } = require("spotify-url-info")(fetch);
                const ytsr = await this.require("ytsr");

                const splistraw = await getTracks(url);
                const splistobj = splistraw.map(o => o.external_urls.spotify);
        
                for (const [index, value] of Object.entries(splistobj)) {
                    const song = await getPreview(value);
                    const search = song.artist + " " + song.title;
                    const found = (await ytsr(search, { limit: "1"})).items[0].url;

                    const options = {
                        type: "yt",
                        quality: audio_quality_type,
                        url: ytdl.getVideoID(found)
                    };
                    if(seek) options.seek = parseInt(seek.value);
                    if(volume) options.volume = volume.volume;
                    if(bitrate) options.bitrate = seek.bitrate;
    
                    let position = -1;
                    switch (audio_behavior_type) {
                        case "add_last":
                            break;
                        case "add_first":
                        case "play_now":
                            position = 0;
                            break;
                        case "add_random":
                            const serverQueue = this.getServerQueue(_server);
                            position = serverQueue ? Math.round(Math.random() * serverQueue.queue.length) : 0;
                            break;
                        case "add_custom":
                            position = custom_position;
                            break;
                    }
                    this.addQueue(_server, options, position, audio_behavior_type == "play_now");
                }
                this.StoreOutputValue(identificator + " " + type, "id", cache);
                const firstraw = await getPreview(splistobj[0]);
                const firsturl = (await ytsr(firstraw.artist + " " + firstraw.title, { limit: "1"})).items[0].url;
                this.StoreOutputValue(firsturl, "url", cache);
                this.RunNextBlock("action", cache);
            }
            //#endregion
            //✅ YOUTUBE PLAYLIST//
            //#region
            else if (identificator === "yt"){
                const options = {
                    type: "yt",
                    quality: audio_quality_type
                }
        
                if(seek) options.seek = parseInt(seek.value);
                if(volume) options.volume = volume.volume;
                if(bitrate) options.bitrate = seek.bitrate;
        
                const ytpl = await this.require("ytpl");
        
                const videos = await ytpl(url, {limit: "50"}).then(result => result.items);
        
                const list = [];
                for (const video of videos) {
                    list.push(Object.assign({
                        url: video.id,
                        playlist: await ytpl.getPlaylistID(url)
                    }, options))
                }
        
                let position = -1;
                switch (audio_behavior_type) {
                    case "add_last":
                        // position = -1;
                        break;
                    case "add_first":
                    case "play_now":
                        position = 0;
                        break;
                    case "add_random":
                        const serverQueue = this.getServerQueue(_server);
                        position = serverQueue ? Math.round(Math.random() * serverQueue.queue.length) : 0;
                        break;
                    case "add_custom":
                        position = custom_position;
                        break;
                }
                const firsturl = "https://www.youtube.com/watch?v=" + videos[0];
                this.addQueue(_server, list, position, audio_behavior_type == "play_now");
                this.StoreOutputValue(identificator + " " + type, "id", cache);
                this.StoreOutputValue(firsturl, "url", cache);
                this.RunNextBlock("action", cache);
            }
            //#endregion
        } 

        //SC PLAYLIST AND SONG//
        else if (type === "soundcloud"){
            //✅ SOUNDCLOUD//
            //#region
            const SoundCloud = require("soundcloud-scraper");
            const clientid = "yr5iFe5iIekBob5oJHfSmVQnjvn15MkH";
            const client = new SoundCloud.Client();
            const fs = require("fs");
            const fetch = require("node-fetch").default;
            const song = await client.getSongInfo(url).catch((err) => {
                console.log("Not Valid SoundCloud Song URL | Maybe Playlist?");
            });
            //SONG
            if (song) {
                const furl = song.trackURL;
                const fetched = await fetch(`${furl}?client_id=${clientid}`, {
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
                        "Accept": "/",
                        "Accept-Encoding": "gzip, deflate, br"
                    },
                    redirect: "manual"
                });
                const proc = await fetched.json();
                const stream = proc.url + "&url=" + url;

                const options = {
                    type: "url",
                    url: stream
                };
                if(seek) options.seek = parseInt(seek.value);
                if(volume) options.volume = volume.volume;
                if(bitrate) options.bitrate = seek.bitrate;
    
                let position = -1;
                switch (audio_behavior_type) {
                    case "add_last":
                        break;
                    case "add_first":
                    case "play_now":
                        position = 0;
                        break;
                    case "add_random":
                        const serverQueue = this.getServerQueue(_server);
                        position = serverQueue ? Math.round(Math.random() * serverQueue.queue.length) : 0;
                        break;
                    case "add_custom":
                        position = custom_position;
                        break;
                }
                this.addQueue(_server, options, position, audio_behavior_type == "play_now");
                this.StoreOutputValue(url, "url", cache);
                this.StoreOutputValue("song" + " " + type, "id", cache);
                this.RunNextBlock("action", cache);
            } 
            //PLAYLIST//
            else {
                const plist = await client.getPlaylist(url).catch((err) => {
                    console.log("Not Valid SoundCloud Playlist URL");
                });
                if (plist) {
                    const splistraw = plist.tracks.map(o => o.trackURL);        
                    for (const [index, value] of Object.entries(splistraw)) {
                        const urlorigin = plist.tracks[index].url;
                        const fetched = await fetch(`${value}?client_id=${clientid}`, {
                            headers: {
                                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
                                "Accept": "/",
                                "Accept-Encoding": "gzip, deflate, br"
                            },
                            redirect: "manual"
                        });
                        const proc = await fetched.json();
                        const stream = proc.url + "&url=" + urlorigin;
    
                        const options = {
                            type: "url",
                            url: stream
                        };
                        if(seek) options.seek = parseInt(seek.value);
                        if(volume) options.volume = volume.volume;
                        if(bitrate) options.bitrate = seek.bitrate;
    
                        let position = -1;
                        switch (audio_behavior_type) {
                            case "add_last":
                                break;
                            case "add_first":
                            case "play_now":
                                position = 0;
                                break;
                            case "add_random":
                                const serverQueue = this.getServerQueue(_server);
                                position = serverQueue ? Math.round(Math.random() * serverQueue.queue.length) : 0;
                                break;
                            case "add_custom":
                                position = custom_position;
                                break;
                        }
                        this.addQueue(_server, options, position, audio_behavior_type == "play_now");
                    }
                    const firsturl = await client.getSongInfo(plist.tracks[0].url).catch((err) => {
                        console.log("Not Valid SoundCloud Song URL");
                    });
                    this.StoreOutputValue(firsturl, "url", cache);
                    this.StoreOutputValue("playlist" + " " + type, "id", cache);
                    this.RunNextBlock("action", cache);
                } 
                //INVALID URL//
                else if (!plist) {
                    console.log("Not valid SoundCloud URL");
                }
            }
            //#endregion
        //<--END-->//
        }
    //<--END-->//
    }
}