import { Boletim } from '../models';

export default {
	async create (req, res)  {
		const boletim = new Boletim(req.body);
		try {
			await boletim.save();
			return res.status(201).json({
				message: 'Successfully created!'
			});
		} catch (err) {
			return res.status(500).json({
				error: err
			});
		}
	},

	async getById (req, res, next, id)  {
		try {
			let boletim = await Boletim.findById(id);
			if (!boletim)
				return res.status('404').json({
					error: 'Not found'
				});
		} catch (err) {
			return res.status('400').json({
				error: 'Could not retrieve user'
			});
		}
	},

	async getAll (req, res)  {
		try {
			let categories = await Boletim.find();
			res.status(200).json(categories);
		} catch (err) {
			return res.status(500).json({
				error: err
			});
		}
	},

	async update (req, res)  {
	
	},

	async remove (req, res)  {
		
	}
};
