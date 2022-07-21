const { prisma } = require('../../services/prismaClient');

const index = async (req, res) => {
	try {
		const jeux = await prisma.jeu.findMany({
			include: {
				PersoAppartientA: {
					include: {
						Personnages: true,
					},
				},
			},
		});
		res.json({
			succes: 'true',
			data: jeux,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: 'false', data: { error } });
	}
};

module.exports = {
	index,
};
