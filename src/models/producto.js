import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    minLength: 2,
    maxLentgth: 100,
    required: true,
    unique: true
  },
  precio: {
    type: Number,
    required: true,
    min: 100,
    max: 100000
  },
  categoria: {
    type: String,
    enum: [
      "Acompañamientos",
      "Bebidas",
      "Ensaladas",
      "Hamburguesas",
      "Postres",
      "Pizzas",
      "Sandwiches y Wraps",
      "Veggie/Veganas"
    ],
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLength: 5,
    maxLentgth: 250
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 10,
    maxLentgth: 500
  },
  imagen: {
    type: String,
    required: true,
    validate: {
        validator: (valor) => {
            return /^https?:\/\/[^\s]+\.(png|jpg|jpeg|gif|bmp|webp|svg)$/
        }
    }
  }
},
{
    timestamps: true
}
);

const Producto = mongoose.model('producto', productoSchema);

export default Producto;
