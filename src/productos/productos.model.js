import { Schema, model } from 'mongoose';

const schemaProducto = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    restaurant_id: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const productModel = model('productos', schemaProducto);
export default productModel;
