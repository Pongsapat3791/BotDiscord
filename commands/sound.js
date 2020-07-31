

module.exports = {
	name: 'conan',
	description: 'Play sound SSR!!!',
	async execute(message) {
		message.member.voice.channel.join()
			.then(connection => {
				const stream = connection.play('./mp3/ปลุกOnichanJap.mp3');
	
				stream.on("finish", () => {
					message.member.voice.channel.leave();
				});
			});


	},
};


