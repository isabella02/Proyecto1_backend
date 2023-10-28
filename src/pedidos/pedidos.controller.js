import orderModel from './pedidos.model';

//Create
export async function createPedido(req, res) {
  try {
    const document = await orderModel.create({ ...req.body, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Read
export async function readPedido(req, res) {
  try {
    const id = req.params.id;
    const document = await orderModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readPedidos(req, res) {
  try {
    const { user_id, restaurant_id, initial_date, final_date } = req.query;
    const documents = await orderModel.find({
      ...(user_id && { user_id: user_id }),
      ...(restaurant_id && { restaurant_id: restaurant_id }),
      ...(initial_date &&
        final_date && {
          createdAt: {
            $gte: new Date(initial_date),
            $lt: new Date(final_date),
          },
        }),
      active: true,
    });
    documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readPedidosEnviados(res) {
  try {
    const document = await orderModel.find({
      state: 'Enviado',
      active: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Update
export async function updatePedido(req, res) {
  try {
    const id = req.params.id;
    const document = await orderModel.findOneAndUpdate(
      { _id: id, state: 'Creado', active: true },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Delete
export async function deletePedido(req, res) {
  try {
    const id = req.params.id;
    const document = await orderModel.findById(id);
    document.active = false;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
