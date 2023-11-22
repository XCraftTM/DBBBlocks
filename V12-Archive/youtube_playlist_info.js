module.exports = {
    name: "YouTube Playlist Info",

    description: "Plays the audio of each video from a YouTube playlist on the voice channel.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "playlist_id",
            "name": "YouTube Playlist URL/ID",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The URL of the YouTube playlist.",
            "types": ["text", "unspecified"],
            "required": true
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
            "id": "number_audios",
            "name": "List",
            "description": "Type: Number\n\nDescription: The list of Objects.",
            "types": ["list"]
        }
    ],

    async code(cache) {
	const ytpl = await this.require("ytpl");

    const server = this.GetInputValue("server", cache);
        const playlist_id = this.GetInputValue("playlist_id", cache) + "";
        const max_results = this.GetInputValue("max_results", cache, true);
        const seek = this.GetInputValue("seek", cache, true);
        const volume = this.GetInputValue("volume", cache, true);
        const bitrate = this.GetInputValue("bitrate", cache, true);
        const custom_position = parseInt(this.GetInputValue("custom_position", cache));
        const audio_behavior_type = this.GetOptionValue("audio_behavior_type", cache) + "";
        const audio_quality_type = this.GetOptionValue("audio_quality_type", cache) + "";

        const videos = await ytpl(playlist_id, {limit: max_results ? parseInt(max_results.value) : 50}).then(result => result.items);

        const options = {
            type: "yt",
            quality: audio_quality_type
        }

        if(seek) options.seek = parseInt(seek.value);
        if(volume) options.volume = volume.volume;
        if(bitrate) options.bitrate = seek.bitrate;


        const list = [];
        for (const video of videos) {
            list.push(Object.assign({
                url: video.id,
                playlist: await ytpl.getPlaylistID(playlist_id)
            }, options))
        }

        this.StoreOutputValue(list, "number_audios", cache);
        this.RunNextBlock("action", cache);
    }
}