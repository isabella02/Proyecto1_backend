import restaurantModel from './restaurantes.model';

//Create
export async function createRestaurante(req, res) {
  try {
    const document = await restaurantModel.create({ ...req.body, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Read
export async function readRestaurante(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readRestaurantes(req, res) {
  try {
    const { name, categories } = req.query;
    const documents = await restaurantModel.find({
      ...(name && { name: { $regex: name, $options: 'i' } }),
      ...(categories && { categories: { $in: categories.split(',') } }),
      active: true,
    });
    documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Update
export async function updateRestaurante(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findOneAndUpdate({ _id: id, active: true }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Delete
export async function deleteRestaurante(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findById(id);
    document.active = false;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
