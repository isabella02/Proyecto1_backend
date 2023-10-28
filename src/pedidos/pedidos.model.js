import { Schema, model } from 'mongoose';

const schemaPedido = new Schema(
  {
    user1_id: { type: String, required: true },
    user2_id: String,
    restaurant_id: { type: String, required: true },
    state: {
      type: String,
      required: true,
      enum: ['Creado', 'Enviado', 'Aceptado', 'Recibido', 'En direccion', 'Realizado'],
    },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const orderModel = model('pedidos', schemaPedido);
export default orderModel;
