// discordcreatorscratch.js

const Discord = require('discord.js');

class DiscordCreatorScratch {
    constructor() {
        this.client = new Discord.Client();
        this.token = ''; // Initialize with an empty string, or you can provide a default value
    }

    getInfo() {
        return {
            id: 'DiscordCreatorScratch',
            name: 'Discord Creator Scratch',
            blocks: [
                {
                    opcode: 'setBotToken',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set bot token to [TOKEN]',
                    arguments: {
                        TOKEN: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'YOUR_BOT_TOKEN',
                        },
                    },
                },
                {
                    opcode: 'startBot',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Start bot',
                },
            ],
        };
    }

    setBotToken({ TOKEN }) {
        this.token = TOKEN;
    }

    startBot() {
        if (!this.token) {
            console.error('Bot token not set. Use the "Set bot token" block.');
            return;
        }

        this.client.login(this.token);
    }
}

Scratch.extensions.register(new DiscordCreatorScratch());
