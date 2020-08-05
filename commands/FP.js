

module.exports = {
	name: 'FP',
	description: 'Play sound SSR!!!',
	async execute(message) {
		message.member.voice.channel.join()
			.then(connection => {
				const stream = connection.play('./mp3/Firstshut.mp3');
	
				stream.on("finish", () => {
					message.member.voice.channel.leave();
				});
			});


	},
};


