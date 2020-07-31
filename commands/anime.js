module.exports = {
	name: 'neko',
	description: 'Image Cat!!!',
	execute(message) {

        number = 114;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: [ "./neko/" + imageNumber + ".png"]} )

    },
      
    
};