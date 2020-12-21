import config from './privateconfig.json';
import Discord from 'discord.js';

const client = new Discord.Client();
const prefix = '!';

client.on('message', function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args: string[] = commandBody.split(' ');
    const command = args[0].toLowerCase();

    if (command === 'game') {
        let membersInWantedGamed: string[] = [];

        const game = commandBody
            .substr(commandBody.indexOf(' ') + 1)
            .toLowerCase();
        console.log('game: ' + game);

        message
            .guild!.members.fetch()
            .then((members) => {
                members.map((member) => {
                    member.presence.activities.map((activity) => {
                        if (activity.name.toLowerCase() === game) {
                            membersInWantedGamed.push(
                                '<@' + member.user.id + '>'
                            );
                        }
                    });
                });

                if (membersInWantedGamed.length > 0) {
                    console.log(membersInWantedGamed);
                    message.channel.send(membersInWantedGamed.join(''));
                }
            })
            .catch((err) => {
                console.log('error: ' + err);
            });
    }
});

client.login(config.BOT_TOKEN);
