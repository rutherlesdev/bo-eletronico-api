import express from "express";
import {BoletimController} from "../controllers";
const routes = express.Router();

router
	.route('/boletim')
	.get( BoletimController.getAll)
	.post( BoletimController.create);

export default routes;
