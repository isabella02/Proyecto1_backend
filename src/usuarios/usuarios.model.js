import { Schema, model } from 'mongoose';

const schemaUsuarios = new Schema({
  mail: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  role: {
    type: String,
    enum: ['cliente', 'domiciliario', 'administrador'],
    default: 'cliente',
    required: true,
  },
  active: { type: Boolean, default: true },
});
const userModel = model('usuarios', schemaUsuarios);
export default userModel;
