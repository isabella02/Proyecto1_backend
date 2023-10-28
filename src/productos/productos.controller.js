import productModel from './productos.model';

//Create
export async function createProducto(req, res) {
  try {
    const document = await productModel.create({ ...req.body, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Read
export async function readProducto(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readProductos(req, res) {
  try {
    const { restaurant_id, category } = req.query;
    const documents = await productModel.find({
      ...(restaurant_id && { restaurant_id: restaurant_id }),
      ...(category && { category: category }),
      active: true,
    });
    documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Update
export async function updateProducto(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findOneAndUpdate({ _id: id, active: true }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Delete
export async function deleteProducto(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findById(id);
    document.active = false;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
