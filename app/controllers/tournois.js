const { prisma } = require('../../services/prismaClient');
const { update } = require('./user');

const index = async (req, res) => {
	try {
		const tournois = await prisma.tournois.findMany();
		if (!tournois.length) {
			res.json({
				success: true,
				message: 'Aucun tournoi trouvé',
				code: 404,
			});
		}
		res.json({
			success: true,
			data: { tournois },
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
		params: { tournoiId },
	} = req;
	try {
		const tournoi = await prisma.tournois.findUnique({
			where: {
				id: parseInt(tournoiId, 10),
			},
			include: {
				Tournois_Owner: true,
			},
		});
		return res.json({
			success: true,
			data: tournoi,
			code: 200,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			success: false,
			error: {
				error,
			},
		});
	}
};

const create = async (req, res) => {
	const { body } = req;
	try {
		const createTournoi = await prisma.tournois.create({
			data: {
				...body,
			},
		});
		return res.json({
			success: true,
			data: createTournoi,
			code: 200,
		});
	} catch (error) {
		return res.json({
			success: false,
			data: { error },
			code: 400,
		});
	}
};

const update = async (req, res) => {
	const {
		params: { tournoiId },
	} = req;
	const { body } = req;
	try {
		const updateTournoi = await prisma.tournois.update({
			where: {
				id: parseInt(tournoiId, 10),
			},
			data: {
				...body,
			},
		});
		return res.json({
			success: true,
			data: updateTournoi,
			code: 200,
		});
	} catch (error) {
		return res.json({
			success: true,
			error: { error },
			code: 400,
		});
	}
};

module.exports = {
	index,
	show,
	create,
	update,
};
