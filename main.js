const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
client.fs = fs;
const axios = require('axios');

client.on('ready', () => {
  console.log(`SISTEMA NSFW ATIVO`);
  setInterval(send4kImage, 60000);
  setInterval(sendpussyImage, 60000);
  setInterval(sendanalImage, 60000);
  setInterval(sendassImage, 60000);
  setInterval(sendboobsImage, 60000);
  setInterval(sendfeetImage, 60000);
  setInterval(sendhentaiImage, 60000);
  setInterval(sendpgifImage, 60000);
  setInterval(sendhassImage, 60000);
  setInterval(sendhkitsuneImage, 60000);
  setInterval(sendhnekoImage, 60000);
  setInterval(sendhmidriffImage, 60000);
  setInterval(sendyaoiImage, 60000);
});

async function send4kImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=4k');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.c4k);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendpussyImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=pussy');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.cpussy);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendanalImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=anal');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.canal);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendassImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=ass');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.cass);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendboobsImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=boobs');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.cboobs);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendpgifImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=pgif');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.cpgif);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendfeetImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=feet');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.cfeet);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhentaiImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hentai');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.chentai);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}


async function sendhassImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hass');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.chass);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhkitsuneImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hkitsune');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.chkitsune);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhmidriffImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hmidriff');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.chmidriff);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhnekoImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hneko');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.chneko);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendyaoiImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=yaoi');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(config.cyaoi);

    if (channel) {
      const server = client.guilds.cache.get(config.servidor);

      if (server) {
        const embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor(server.name, server.iconURL());

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

 client.login(config.token)

process.on('multipleResolves', (type, reason, promise) => {
    console.log(`⚠️ » Erro detectado\n\n` + type, promise, reason)
});
process.on('unhandledRejection', (reason, promise) => {
    console.log(`⚠️ » Erro Detectado:\n\n` + reason, promise)
});
process.on('uncaughtException', (error, origin) => {
    console.log(`⚠️ » Erro Detectado:\n\n` + error, origin)
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
    console.log(`⚠️ » Erro Detectado:\n\n` + error, origin)
});
