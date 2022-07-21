const { prisma } = require('../../services/prismaClient');

const index = async (req, res) => {
	const {
		params: { jeuId },
	} = req;

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

const show = async (req, res) => {
	const {
		params: { jeuId },
	} = req;
	try {
		const jeu = await prisma.jeu.findUnique({
			where: { id: parseInt(jeuId, 10) },
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
			data: jeu,
			code: 200,
		});
	} catch (error) {
		console.log(error);
		return res.json({ succes: 'false', data: { error } });
	}
};

module.exports = {
	index,
	show,
};
