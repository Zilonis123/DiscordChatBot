const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
const x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by 0_0");
});
client.on("message", async message => {
    // when client detects a message
    if (message.author.bot) return; // if the author of the message is a bot ignore the case
    message.content = message.content
        .replace(/@(everyone)/gi, "everyone")
        .replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
        return message.reply(`**:x: Please dont mention anyone while talking to me I feel attacked 😭**`);
    }
    message.channel.startTyping();
    if (!message.content)
    return message.channel.send("I can only reply to text messages");
    x.chat({
        message: message.content,
        name: client.user.username,
        owner: "Zero",
        user: message.author.id,
        language: "en"
    }).then(reply => {
      message.reply({
        embed: {
            title: "ChatBot",
            color: "#5539cc",
            description: `**${reply}**`,
            timestamp: new Date(),
            footer: {
            text: `${client.user.username}`
        }
      }
    });
  });
  message.channel.stopTyping();
});

client.login('ODUxNzM3MDM0NTUyNjM5NTA4.YL8n7Q.pSxVFa3kw6ZlRsdVo1g_73RtIUc'); //login using the token
