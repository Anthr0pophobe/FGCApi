const { prisma } = require('../../services/prismaClient');

const index = async (req, res) => {
	try {
		const users = await prisma.users.findMany();
		res.json({
			succes: true,
			data: users,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: false, data: { error } });
	}
};

const show = async (req, res) => {
	const {
		params: { userId },
	} = req;
	try {
		const user = await prisma.users.findUnique({
			where: {
				id: parseInt(userId, 10),
			},

			include: {
				PersoJouer: {
					include: {
						Personnages: true,
					},
				},
				ParticipeA: {
					include: {
						Tournois: true,
					},
				},
			},
		});
		return res.json({
			succes: true,
			data: user,
			code: 200,
		});
	} catch (error) {
		return res.json({
			succes: false,
			message: 'Utilisateur not found',
			code: 404,
		});
	}
};

const create = async (req, res) => {
	try {
		const { body } = req;
		const createUser = await prisma.users.create({
			data: {
				...body,
			},
		});
		return res.json({
			succes: true,
			data: createUser,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: false, data: { error } });
	}
};

const update = async (req, res) => {
	const {
		params: { userId },
	} = req;
	const { body } = req;
	try {
		const updateUser = await prisma.users.update({
			where: {
				id: parseInt(userId, 10),
			},
			data: {
				...body,
			},
		});
		return res.json({
			succes: true,
			data: updateUser,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: false, data: { error } });
	}
};

const register = async (req, res) => {
	//TODO : regex test if is only numbers
	const {
		params: { userId, tournoiId },
	} = req;
	try {
		const register = await prisma.ParticipeA.create({
			data: {
				userId: parseInt(userId, 10),
				tournoiId: parseInt(tournoiId, 10),
			},
		});
		return res.json({
			succes: true,
			data: register,
			code: 200,
		});
	} catch (error) {
		console.log(error);
		if (error.code === 'P2003') {
			return res.json({
				succes: false,
				message: `Le champs ${error.meta.field_name} est incorrecte.`,
				code: 404,
			});
		}
		return res.json({
			succes: false,
			data: { error },
			code: 400,
		});
	}
};

module.exports = {
	index,
	show,
	create,
	update,
	register,
};
