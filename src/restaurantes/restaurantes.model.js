import { Schema, model } from 'mongoose';

const schemaRestaurante = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    categories: {
      type: [String],
      validate: {
        validator: function (array) {
          return array && array.length > 0;
        },
        message: 'minimo 1 categoria',
      },
    },
    inventory: { type: Array, required: false },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const restaurantModel = model('restaurantes', schemaRestaurante);
export default restaurantModel;
