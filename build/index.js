"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var privateconfig_json_1 = __importDefault(require("./privateconfig.json"));
var discord_js_1 = __importDefault(require("discord.js"));
var client = new discord_js_1.default.Client();
var prefix = '!';
client.on('message', function (message) {
    if (message.author.bot)
        return;
    if (!message.content.startsWith(prefix))
        return;
    var commandBody = message.content.slice(prefix.length);
    var args = commandBody.split(' ');
    var command = args[0].toLowerCase();
    if (command === 'game') {
        var membersInWantedGamed_1 = [];
        var game_1 = commandBody
            .substr(commandBody.indexOf(' ') + 1)
            .toLowerCase();
        console.log('game: ' + game_1);
        message
            .guild.members.fetch()
            .then(function (members) {
            members.map(function (member) {
                member.presence.activities.map(function (activity) {
                    if (activity.name.toLowerCase() === game_1) {
                        membersInWantedGamed_1.push('<@' + member.user.id + '>');
                    }
                });
            });
            if (membersInWantedGamed_1.length > 0) {
                console.log(membersInWantedGamed_1);
                message.channel.send(membersInWantedGamed_1.join(''));
            }
        })
            .catch(function (err) {
            console.log('error: ' + err);
        });
    }
});
client.login(privateconfig_json_1.default.BOT_TOKEN);
