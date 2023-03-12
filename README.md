# DBB Blocks
This Stores Discord Bot Builder Blocks created by the Community


## Music Blocks

### Setup

> If you used Discord Player Before then remove `@discord-player/downloader`:<br>npm remove @discord-player/downloader

First Update your Library with:
```
npm i discord-player@latest
```

Required Dependencies for Downloading and playing Music:
```
npm install @discordjs/opus
npm install ffmpeg-static
npm install play-dl
```
(These will also be installed with `discord audio player dependency`-Block)


### Blocks
[Play Audio in Queue](play_audio_in_queue.js)

[Create Queue in Voice Channel](create_queue_in_vc.js)

[Control Queue](control_queue.js)

[Find Queue](find_queue.js)

[Create Queue Progressbar](create_queue_progressbar.js)

[Delete Queue](delete_queue.js)

[Discord Audio Player Dependency](discord_audio_player_dependency.js)

[Get Queue Info](get_queue_info.js)

[Get Queued Tracks](get_queue_tracks.js)

[Get Track Info](get_track_info.js)

[Switch Audio Channel](switch_audio_channel.js)

[Change Queue Volume](change_queue_volume.js)

[Get Currently Playing Track](get_currently_playing_track.js)

[Apply Queue Filter](apply_queue_filter.js)


### Events
[Player Debug Event](player_debug_event.js)

[Player Error Event](player_error_event.js)

[Queue End Event](queue_end_event.js)

[Track Add Event](track_add_event.js)

[Tracks Add Event](tracks_add_event.js)

[Track End Event](track_end_event.js)

[Track Start Event](track_start_event.js)
