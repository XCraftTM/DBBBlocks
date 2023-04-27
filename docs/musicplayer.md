# Music Blocks

## Setup

First Update your Library with:  

```
npm i discord-player@latest
```

<br>

Required Dependencies for Downloading and playing Music:  

```
npm install @discordjs/opus  
npm install ffmpeg-static (If on Linux, do: apt install ffmpeg)
npm install @distube/ytdl-core 
```

(These will also be installed with `discord audio player dependency`-Block)

## Troubleshooting
A quick follow-up for discord-player v6, if you are getting weird errors like `something is not a constructor` or `version.split is not a function` or something similar, please try the following:

Remove `node_modules`, `package-lock.json` or any lockfiles you have, run `npm cache clean --force` or similar command equivalent to your package manager and then run `npm install` (or the install command of your package manager)

## Examples

### Play Music in Voice Channel

![PlayinVC](https://i.imgur.com/JgwKUyq.png)

### Setup Slash Command Autocomplete

![AutoCompleteSlashCommands](https://cdn.discordapp.com/attachments/1081509800464109638/1085955745671032994/image.png);