const { prisma } = require('../../services/prismaClient');

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

module.exports = {
	index,
	show,
};
