# DBB Blocks
This Stores Discord Bot Builder Blocks created by the Community

***

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
[Play Audio in Queue](/Music%20Blocks/play_audio_in_queue.js)<br>[Create Queue in Voice Channel](/Music%20Blocks/create_queue_in_vc.js)<br>[Control Queue](/Music%20Blocks/control_queue.js)<br>[Find Queue](/Music%20Blocks/find_queue.js)<br>[Create Queue Progressbar](/Music%20Blocks/create_queue_progressbar.js)<br>[Delete Queue](/Music%20Blocks/delete_queue.js)<br>[Discord Audio Player Dependency](/Music%20Blocks/discord_audio_player_dependency.js)<br>[Get Queue Info](/Music%20Blocks/get_queue_info.js)<br>[Get Queued Tracks](/Music%20Blocks/get_queue_tracks.js)<br>[Get Track Info](/Music%20Blocks/get_track_info.js)<br>[Switch Audio Channel](/Music%20Blocks/switch_audio_channel.js)<br>[Change Queue Volume](/Music%20Blocks/change_queue_volume.js)<br>[Get Currently Playing Track](/Music%20Blocks/get_currently_playing_track.js)<br>[Apply Queue Filter](/Music%20Blocks/apply_queue_filter.js)


### Events
[Player Debug Event](/Music%20Blocks/player_debug_event.js)<br>[Player Error Event](/Music%20Blocks/player_error_event.js)<br>[Queue End Event](/Music%20Blocks/queue_end_event.js)<br>[Track Add Event](/Music%20Blocks/track_add_event.js)<br>[Tracks Add Event](/Music%20Blocks/tracks_add_event.js)<br>[Track End Event](/Music%20Blocks/track_end_event.js)<br>[Track Start Event](/Music%20Blocks/track_start_event.js)

### Troubleshooting
A quick follow-up for discord-player v6, if you are getting weird errors like `something is not a constructor` or` version.split is not a function` or something similar, please try the following:

Remove `node_modules`, `package-lock.json` or any lockfiles you have, run `npm cache clean --force` or similar command equivalent to your package manager and then run `npm install` (or the install command of your package manager)

## Forum Blocks

### Description
These Blocks are Used to Create And Manage Forum Channel Threads

### Blocks
[Create Thread in Forum](/Forum%20Blocks/create_thread_in_forum.js)  
[Find Forum Tag](/Forum%20Blocks/find_forum_tag.js)  
[Get Forum Info](/Forum%20Blocks/get_forum_info.js)  
[Get Forum Tag Info](/Forum%20Blocks/get_forum_tag_info.js)  
[Get Thread Info](/Forum%20Blocks/get_thread_info.js)  