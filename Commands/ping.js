exports.run = (client, message) => {
  message.channel.send('speedtest')
    .then(msg => {
      msg.edit(`Done! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'speedtest',
  description: 'Network Speed Test',
  usage: '!speedtest'
};
