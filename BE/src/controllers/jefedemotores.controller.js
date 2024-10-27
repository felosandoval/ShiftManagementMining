const JefeDeMotores = require("../models/JefeDeMotores.js");

// Obtener todos los JefeDeMotores
const getJefeDeMotores = async (req, res) => {
  const allJefeDeMotores = await JefeDeMotores.findAll({});
  res.send(allJefeDeMotores).status(200);
};

// Obtener un JefeDeMotores
const getOneJefeDeMotores = async (req, res) => {
  const rut = req.params;
  const jefeDeMotores = await JefeDeMotores.findAll({ where: rut });
  res.status(200).json(jefeDeMotores);
};

// Crear un JefeDeMotores
const createJefeDeMotores = async (req, res) => {
  const { rut, nombre, disponibilidad, turno } = req.body;

  if (!rut || !nombre || !disponibilidad || !turno) {
    return res.status(400).json({ error: "content missing" });
  }
  const jefeDeMotoresCreate = await JefeDeMotores.create({
    rut,
    nombre,
    disponibilidad,
    turno,
  });

  res.status(200).json(jefeDeMotoresCreate);
};

// Actualizar un JefeDeMotores
const putJefeDeMotores = async (req, res) => {
  const { rut } = req.params;
  const { nombre, disponibilidad, turno } = req.body;
  console.log(req.body);
  try {
    const jefeDeMotores = await JefeDeMotores.findOne({ where: { rut } });
    if (!jefeDeMotores) {
      return res.status(404).send("JefeDeMotores not found");
    }

    jefeDeMotores.nombre = nombre;
    jefeDeMotores.disponibilidad = disponibilidad;
    jefeDeMotores.turno = turno;
    await jefeDeMotores.save();
    return res.json(jefeDeMotores);
  } catch (error) {
    return res.status(500);
  }
};

// Eliminar un JefeDeMotores
const deleteJefeDeMotores = async (req, res) => {
  const { rut } = req.params;
  try {
    const jefeDeMotores = await JefeDeMotores.findOne({ where: { rut } });

    if (!jefeDeMotores) {
      return res.status(404).send("JefeDeMotores not found");
    }
    await jefeDeMotores.destroy();
    res.status(204).json("delete JefeDeMotores");
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getJefeDeMotores, getOneJefeDeMotores, createJefeDeMotores, putJefeDeMotores, deleteJefeDeMotores };
