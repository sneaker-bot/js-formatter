const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');

module.exports.js = {

	format : (options) => {

		return new Promise((resolve,reject) => {

			try{

				if(options['read_file']){

					function beautify(){

						var source = fs.readFileSync(options['path'], 'utf8');

						esprima.parse(source, {}, (node,meta) => {

							source = escodegen.generate(node);
						});

						if(options['write_file']){

							fs.writeFile('./beautify.js', source, 'utf8', (err) => {

								if(err){

									reject('Error writting file');
								};
							});
						};

						resolve(source);
					};

					beautify();

				}else if(options['source']){

					function beautify_2(){

						var source = options['source'];

						esprima.parse(source, {}, (node,meta) => {

							source = escodegen.generate(node);
						});

						if(options['write_file']){

							fs.writeFile('./beautify.js', source, 'utf8', (err) => {

								if(err){

									reject('Error writting file');
								};
							});
						};

						resolve(source);
					};

					beautify_2();
				};
				
			}catch{

				reject('unknown error occured');
			};
		});
	}
};