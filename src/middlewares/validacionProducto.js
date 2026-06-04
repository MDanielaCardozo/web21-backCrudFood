import { body } from "express-validator";
import Producto from "../models/producto";

const validacionProducto = [
    //invocamos al body(chequeamos que hay en el body de la solicitud)
    body("nombreProducto")
    //metodos de express-validator
    .notEmpty()
    .withMessage("El nombre es un dato obligatorio")
    .isLength({ min: 2, max: 100})
    .withMessage("El nombre del producto debe tener entre dos y 100 caracteres")
    .custom( async (valor, {req}) => {
        const productoExistente = await Producto.findOne({
            nombreProducto: valor,
        })
        if(!productoExistente){
            return true;
        }
        //chequear si el ID del PUT ya tenga ese nombre en otro producto
        if (req.params?.id && productoExistente._id.toString() === req.params.id) {
            return true
        }
        //enviar un msj de error
        throw new Error("Ya existe un producto con ese nombre")
    }),
    body("precio")
    .notEmpty()
    .withMessage("El precio del producto es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio del producto debe ser un dato numerico")
    .isFloat({min: 100, max: 100000})
    .withMessage("El precio del producto debe ser entre $100 y $100000"),
    body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve del producto es un dato obligatorio")
    .isLength({min: 5, max: 250})
    .withMessage("La descripcion breve del producto debe tener entre 5 y 250 caracteres"),
    body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia del producto es un dato obligatorio")
    .isLength({min: 10, max: 500})
    .withMessage("La descripcion amplia del producto debe tener entre 5 y 250 caracteres"),
    body("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn([
        "Acompañamientos",
        "Bebidas",
        "Ensaladas",
        "Hamburguesas",
        "Postres",
        "Pizzas",
        "Sandwiches y Wraps",
        "Veggie/Veganas",
    ])
    .withMessage( `La categoria debe ser uno de los siguientes terminos:
        "Acompañamientos",
        "Bebidas",
        "Ensaladas",
        "Hamburguesas",
        "Postres",
        "Pizzas",
        "Sandwiches y Wraps",
        "Veggie/Veganas `),
        (req, res, next) => resultadoValidacion(req, res, next),
]

export default validacionProducto;