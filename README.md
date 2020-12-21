# game-ping

Game Ping lets you mention all users currently playing the given game.

Use by simply typing in chat `!game "game name"`

1. Create new Discord application here - https://discord.com/developers/applications
2. Copy Client ID into config.json
3. On the discord developers site with your new application selected click Bot then Add Bot
4. Enable the two toggles "Presence Intent" and "Server Memebers Intent"
5. Navigate to OAuth2, scroll down and select bot, then scroll down and select "Send Messages" and "Mention Everyone"
6. Copy the url and paste it in your browser, add it to your desired server.
7. In the root project folder Run; `npm install`, `npx tsc` and `node build/index.js`
8. Use by typing !game "game name" in the chat and it will @mention everyone playing that game.
