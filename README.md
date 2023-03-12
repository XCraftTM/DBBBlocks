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
[Play Audio in Queue](play_audio_in_queue.js)<br>[Create Queue in Voice Channel](create_queue_in_vc.js)<br>[Control Queue](control_queue.js)<br>[Find Queue](find_queue.js)<br>[Create Queue Progressbar](create_queue_progressbar.js)<br>[Delete Queue](delete_queue.js)<br>[Discord Audio Player Dependency](discord_audio_player_dependency.js)<br>[Get Queue Info](get_queue_info.js)<br>[Get Queued Tracks](get_queue_tracks.js)<br>[Get Track Info](get_track_info.js)<br>[Switch Audio Channel](switch_audio_channel.js)<br>[Change Queue Volume](change_queue_volume.js)<br>[Get Currently Playing Track](get_currently_playing_track.js)<br>[Apply Queue Filter](apply_queue_filter.js)


### Events
[Player Debug Event](player_debug_event.js)<br>[Player Error Event](player_error_event.js)<br>[Queue End Event](queue_end_event.js)<br>[Track Add Event](track_add_event.js)<br>[Tracks Add Event](tracks_add_event.js)<br>[Track End Event](track_end_event.js)<br>[Track Start Event](track_start_event.js)
