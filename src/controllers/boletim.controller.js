import ejs from 'ejs';
import pdf from 'html-pdf'
import path from 'path'
import {v4 as uuid} from 'uuid'

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
			let data = await Boletim.findById(id);
			if (!data)
				return res.status('404').json({
					error: 'Not found'
				});

			return res.status(200).json({
				result: data
			});
		} catch (err) {
			return res.status('400').json({
				error: 'Could not retrieve user'
			});
		}
	},

	async getAll (req, res)  {
		try {
			let data = await Boletim.find();
			res.status(200).json({ result: data});
		} catch (err) {
			return res.status(500).json({
				error: err
			});
		}
	},

	async getLatest (req, res)  {
		try {
			let data = await Boletim.find().limit(10);
			res.status(200).json({ result: data});
		} catch (err) {
			return res.status(500).json({
				error: err
			});
		}
	},

	async generateReport ( req, res ) {

		let _boletim = await Boletim.findById(req.params._id);

		ejs.renderFile(path.join(__dirname, '../views/', "report-template.ejs"), {}, {
			cache: false

		}, (err, data) => {
			if (err)
				res.json({ success: false, message: 'Erro ao gerar relatorio'})

			// com o dado retornado com sucesso, cria-se o B.O
			let filename = uuid();

			pdf.create(data,  {
				scale: .1,
				height: '210mm',
				width: '450mm',
				header: {
					height: "10mm",
				},
				footer: {
					height: "8mm",
				},
			}).toFile(path.join("storage", filename+".pdf"), function (err, data) {
				if (err) {
					res.send(err);
				} else {
					res.json({
						message: "File created successfully",
						url: `storage/${filename}.pdf`,
					});
				}
			});
		});

	},

	async update (req, res)  {
	
	},

	async remove (req, res)  {
		
	}
};
