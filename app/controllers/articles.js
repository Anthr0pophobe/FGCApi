const { response } = require('express');
const { prisma } = require('../../services/prismaClient');

const index = async (res, req) => {
	try {
		const articles = await prisma.articles.findMany();
		if (!articles.length) {
			res.json({
				succes: true,
				message: 'Aucun article trouvé',
				code: 200,
			});
		}
		res.json({
			succes: 'true',
			data: { articles },
			code: 200,
		});
	} catch (error) {
		return res.json({
			success: 'false',
			error: error,
			code: 400,
		});
	}
};

const show = async (req, res) => {
	const {
		params: { articleId },
	} = req;
	try {
		const article = await prisma.articles.findUnique({
			where: {
				id: parseInt(articleId, 10),
			},
			select: {
				titre: true,
				date: true,
				contenu: true,
			},
		});
		return res.json({
			succes: 'true',
			data: article,
			code: 200,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			succes: 'false',
			message: 'Artcile not found',
			code: 404,
		});
	}
};

module.exports = {
	index,
	show,
};
