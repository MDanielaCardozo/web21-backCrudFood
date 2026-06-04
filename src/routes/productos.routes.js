import { Router } from "express";
import { borrarProductoPorID, crearProducto, editarProductoPorID, listarProductos, obtenerProducto, prueba } from "../controllers/productos.controllers.js";
import validacionProducto from "../middlewares/validacionProducto.js";

const router = Router();

router.route("/test").get(prueba)

router.route('/').post([validacionProducto], crearProducto).get(listarProductos)

router.route('/:id').get(obtenerProducto).delete(borrarProductoPorID).put(editarProductoPorID)

export default router;