![logo](https://repository-images.githubusercontent.com/Error)

# 🤖 Bot (Discord Music Bot)
> Bot is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v12.0.0 or newer

## 🚀 Getting Started

```
git clone https://github.com/Pongsapat3791/BotDiscord.git
cd BotDiscord
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## ⚙️ Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "//",
  "PRUNING": false
}
```

## 📝 Features & Commands

> Note: The default prefix is '//'

* 🎶 Play music from YouTube via url

`//play https://www.youtube.com/watch?v=dXVzE1Pbyfc`

* 🔎 Play music from YouTube via search query

`//play under the bridge red hot chili peppers`

* 🎶 Play music from Soundcloud via url **(Requires Soundcloud Client Id)**

`//play https://soundcloud.com/blackhorsebrigade/pearl-jam-alive`

* 🔎 Search and select music to play

`//search Pearl Jam`

* 📃 Play youtube playlists via url

`//playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

* 🔎 Play youtube playlists via search query

`//playlist linkin park meteora`
* Now Playing (//np)
* Queue system (//queue, //q)
* Loop / Repeat (//loop)
* Shuffle (//shuffle)
* Volume control (//volume, //v)
* Lyircs (//lyrics, //ly)
* Pause (//pause)
* Resume (//resume, //r)
* Skip (//skip, //s)
* Skip to song # in queue (//skipto, //st)
* Toggle pruning of bot messages (//pruning)
* Help (//help, //h)
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Media Controls via Reactions
![reactions](https://i.imgur.com/j7CevsH.png)

## 🤝 Contributing

1. [Fork the repository](https://github.com/Pongsapat3791/BotDiscord/fork)
2. Clone your fork: `git clone https://github.com/Pongsapat3791/BotDiscord.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

## 📝 Credits && Thx

[@iCrawl](https://github.com/iCrawl) For the queue system used in this application which was adapted from [@iCrawl/discord-music-bot](https://github.com/iCrawl/discord-music-bot)

[@eritislami/evobot](https://github.com/eritislami/evobot)
