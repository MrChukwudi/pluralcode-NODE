const { v4: uuidv4 } = require("uuid");

const posts = [
	{
		id: uuidv4(),
		title: "Learning Express",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae ab, provident molestias accusamus quia dolorum nobis laborum iusto eveniet quaerat, veritatis placeat, tenetur ipsum necessitatibus quibusdam ducimus maiores? Velit.",
		author: "Charles",
		date: new Date(),
		likes: 10,
		comments: [
			{
				id: uuidv4(),
				body: "This is a comment",
				author: "Timi",
			},
		],
	},
	{
		id: uuidv4(),
		title: "Bomb Blast 2002",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae ab, provident molestias accusamus quia dolorum nobis laborum iusto eveniet quaerat, veritatis placeat, tenetur ipsum necessitatibus quibusdam ducimus maiores? Velitnnnn djjdjjd jjeje.",
		author: "Desire",
		date: new Date(),
		likes: 100,
		comments: [
			{
				id: uuidv4(),
				body: "This is a comment",
				author: "Timi",
			},
			{
				id: uuidv4(),
				body: "first to comment",
				author: "Sylvester",
			},
			{
				id: uuidv4(),
				body: "This is not my business",
				author: "YGN",
			},
		],
	},
];

module.exports = posts;
