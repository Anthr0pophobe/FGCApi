const { prisma } = require('../../services/prismaClient');

const index = async (req, res) => {
	try {
		const articles = await prisma.articles.findMany();
		if (!articles.length) {
			res.json({
				succes: true,
				message: 'Aucun article trouvé',
				code: 404,
			});
		}
		res.json({
			succes: true,
			data: { articles },
			code: 200,
		});
	} catch (error) {
		return res.json({
			success: false,
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
			succes: true,
			data: article,
			code: 200,
		});
	} catch (error) {
		return res.json({
			succes: false,
			message: 'Artcile not found',
			code: 404,
		});
	}
};
const create = async (req, res) => {
	try {
		const { body } = req;
		const createArticle = await prisma.articles.create({
			data: {
				...body,
			},
		});
		return res.json({
			success: true,
			data: createArticle,
			code: 200,
		});
	} catch (error) {
		return res.json({
			succes: false,
			error: { error },
		});
	}
};

const update = async (req, res) => {
	const {
		params: { articleId },
	} = req;
	const { body } = req;
	try {
		const updateArticle = await prisma.articles.update({
			where: {
				id: parseInt(articleId, 10),
			},
			data: {
				...body,
			},
		});
		return res.json({
			succes: true,
			data: updateArticle,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: false, data: { error } });
	}
};

module.exports = {
	index,
	show,
	create,
	update,
};
