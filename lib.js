const execall = require('execall')

const regex = /(?:`)(.+)(?::`)(?: |(?:\r?\n```.*\r?\n))((?:(?<=\n)[\s\S]*?(?=\s```))|.*)(?:\s```)?/g

module.exports = (source) => {
	const objectsRaw = source.split('---');

	return objectsRaw.map(objectRaw => {
		const matches = execall(regex, objectRaw)

		var object =  {}
		matches.map(match => {
			object[match.subMatches[0].toLowerCase().replace(/ /g, '_')] = match.subMatches[1]
		})
		return object
	})
};
