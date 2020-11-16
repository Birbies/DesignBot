const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const designs = [];
const memes = [];

const prefix = '&';
const commandParts = ["help", "design", "submit", "designs", "meme", "memes", "add", "role"];
const commands = ['help', 'design', 'submit designs', 'meme', 'submit memes', "add role"];
const roles = {
	"Artist": "777028029641392129"
};
client.on("message", function(message) {
	if(message.author.bot || !message.content.startsWith(prefix)) {
		return;
	} 
	else {
		let input = message.content.substring(1).split(" ");
		let command = '';
		let arguments = '';
		for(let i of input) {
			for(let j of commandParts) {
				if(i == j) {
					command += " " + j;
				}
			}
		}
		if(command) {
			argument = input.join(" ").replace(command.trim(), '');
		}
		message.reply(command);
		message.reply(argument);
		if(!commands.includes(input.length > 2 ? input[0].concat(' ' + input[1]) : input[0])) {
			message.reply("your command is invalid. Check your spelling and see if you put any arguments!");
		}
		else {
			let command = '';
			let arguments = '';
			for(let i of input) {
				for(let j of commands) {
					if(i == j) {
						command += j;
					}
					else {
						arguments += j;
					}
				}
			}
			let reply;
			if(command == "help") {
				reply = new Discord.MessageEmbed()
					.setColor("#FFFFFF")
					.setTitle("Help has arrived!")
					.setDescription("What do you need help with?")
					.addFields({
						name: "Commands",
						value: `${prefix}help - need help?
								${prefix}design - see a random design!
								${prefix}submit designs - submit design(s).
								${prefix}meme - marvel at a meme!
								${prefix}submit memes - submit meme(s). 
								
								
								**Submitting memes and designs**:
								First of all, make sure the meme or design is **not** NFSW, please. These types of images will be ignored.
								Use the imgBB image hoster to make things easier for us! (imgbb.com) Make sure it is not on autodelete, is either a .png or a .jpg, and is in this format:
									\`\`https://i.ibb.co/[image ID]/[image name].png\`\` 
									
									
								**Bot Invite Link**: https://discord.com/oauth2/authorize?client_id=777299326715428885&scope=bot`
				});
				message.channel.send(reply);
			} 
			else if(command == 'design') {
				message.channel.send("SMEL");
			}
			else if(command == 'submit designs') {
				reply = new Discord.MessageEmbed()
							.setDescription("Staff will review your design soon!");
				message.channel.send(reply);
			}
			else if(command == 'meme') {
				message.channel.send("What did the greedy child say? MEMEMEMEMEMEMEME!!");
			}
			else if(command == 'submit memes') {
				reply = new Discord.MessageEmbed()
							.setDescription("Staff will review your meme proposal soon!");
				message.channel.send(reply);
			}
			else if(command == 'add role') {
				if(!roles.hasOwnProperty(arguments.trim())) {
					message.reply("Role not found!");
				}
				else {
					message.author.addRole(roles[arguments.trim()]);
					reply = new Discord.MessageEmbed()
								.setDescription(`New role added to ${message.author}!`);
					message.channel.send(reply);
				}
			}
		}
	}
});

client.login(config.BOT_TOKEN);