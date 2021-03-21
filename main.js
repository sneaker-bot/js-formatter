const { js } = require('./format.js');

async function main(){

	var source = await js.format({

			read_file : true, 
			write_file : true,
			path : './source.js', 
			source : false

	}).catch(err => {
		console.log(err);
	});

	console.log(source);

};

main();