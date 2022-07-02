const { prisma } = require('../../services/prismaClient');

const returnSuccess = (res, data, code) => {
	let response = { succes: true };
	if (data && typeof data === 'object') {
		response = Object.assign(data);
	} else {
		response.data = {};
	}
	if (typeof code !== 'undefined') res.statusCode = code;
	return res.json({ succes: true, data: response });
};

const index = async (req, res) => {
	try {
		const users = await prisma.users.findMany();
		console.log(users);
		return returnSuccess(true, users, 200);
		// res.json({
		// 	succes: 'true',
		// 	data: users,
		// 	code: 200,
		// });
	} catch (error) {
		console.log(error);
		return res.json({ succes: 'false', data: { error } });
	}
};

const show = async (req, res) => {
	const {
		params: { userId },
	} = req;
	console.log(userId);
	try {
		const user = await prisma.users.findUnique({
			where: {
				id: parseInt(userId, 10),
			},
			select: {
				id: true,
				pseudo: true,
			},
		});
		return res.json({
			succes: 'true',
			data: user,
			code: 200,
		});
	} catch (error) {
		console.log(error);
		return res.json({ succes: 'false', data: { error } });
	}
};
// const create = async (req, res) => {};
// const update = async (req, res) => {};

module.exports = {
	index,
	show,
	// create,
	// update,
};
