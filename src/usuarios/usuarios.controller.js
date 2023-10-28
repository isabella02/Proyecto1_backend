import userModel from './usuarios.model';

//Create
export async function createUsuario(req, res) {
  try {
    const document = await userModel.create({ ...req.body, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.messge);
  }
}

//Read
export async function readUsuario(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readUserByMailAndPassword(req, res) {
  try {
    const { mail, password } = req.params;
    const document = await userModel.findOne({
      mail: mail,
      password: password,
      active: true,
    });

    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Update
export async function updateUsuario(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findOneAndUpdate({ _id: id, active: true }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Delete
export async function deleteUsuario(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findById(id);
    document.active = false;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
