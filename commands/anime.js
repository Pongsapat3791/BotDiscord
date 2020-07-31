module.exports = {
	name: 'anime',
	description: 'Random Image!!',
	execute(message) {

        number = 114;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: [ "./anime/" + imageNumber + ".png"]} )

    },
      
    
};