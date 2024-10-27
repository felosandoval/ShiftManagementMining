const Maquinaria = require("../models/Maquinaria.js");

// Obtener todas las Maquinaria
const getMaquinaria = async (req, res) => {
  const allMaquinaria = await Maquinaria.findAll({});
  res.send(allMaquinaria).status(200);
};

// Obtener una Maquinaria
const getOneMaquinaria = async (req, res) => {
  const patente = req.params;
  const maquinaria = await Maquinaria.findAll({ where: patente });
  res.status(200).json(maquinaria);
};

// Crear una Maquinaria
const createMaquinaria = async (req, res) => {
  const { patente, modelo, tipoMotor, estado } = req.body;

  if (!patente || !modelo || !tipoMotor || !estado) {
    return res.status(400).json({ error: "content missing" });
  }
  const maquinariaCreate = await Maquinaria.create({
    patente,
    modelo,
    tipoMotor,
    estado,
  });

  res.status(200).json(maquinariaCreate);
};

// Actualizar una Maquinaria
const putMaquinaria = async (req, res) => {
  const { patente } = req.params;
  const { modelo, tipoMotor, estado } = req.body;
  console.log(req.body);
  try {
    const maquinaria = await Maquinaria.findOne({ where: { patente } });
    if (!maquinaria) {
      return res.status(404).send("Maquinaria not found");
    }

    maquinaria.modelo = modelo;
    maquinaria.tipoMotor = tipoMotor;
    maquinaria.estado = estado;
    await maquinaria.save();
    return res.json(maquinaria);
  } catch (error) {
    return res.status(500);
  }
};

// Eliminar una Maquinaria
const deleteMaquinaria = async (req, res) => {
  const { patente } = req.params;
  try {
    const maquinaria = await Maquinaria.findOne({ where: { patente } });

    if (!maquinaria) {
      return res.status(404).send("Maquinaria not found");
    }
    await maquinaria.destroy();
    res.status(204).json("delete Maquinaria");
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getMaquinaria, getOneMaquinaria, createMaquinaria, putMaquinaria, deleteMaquinaria };