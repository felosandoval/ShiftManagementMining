const Mecanico = require("../models/Mecanico.js");

// Obtener todos los Mecanico
const getMecanico = async (req, res) => {
  const allMecanico = await Mecanico.findAll({});
  res.send(allMecanico).status(200);
};

// Obtener un Mecanico
const getOneMecanico = async (req, res) => {
  const rut = req.params;
  const mecanico = await Mecanico.findAll({ where: rut });
  res.status(200).json(mecanico);
};

// Crear un Mecanico
const createMecanico = async (req, res) => {
  const { rut, nombre, disponibilidad, turno } = req.body;

  if (!rut || !nombre || !disponibilidad || !turno) {
    return res.status(400).json({ error: "content missing" });
  }
  const mecanicoCreate = await Mecanico.create({
    rut,
    nombre,
    disponibilidad,
    turno,
  });

  res.status(200).json(mecanicoCreate);
};

// Actualizar un Mecanico
const putMecanico = async (req, res) => {
  const { rut } = req.params;
  const { nombre, disponibilidad, turno } = req.body;
  console.log(req.body);
  try {
    const mecanico = await Mecanico.findOne({ where: { rut } });
    if (!mecanico) {
      return res.status(404).send("Mecanico not found");
    }

    mecanico.nombre = nombre;
    mecanico.disponibilidad = disponibilidad;
    mecanico.turno = turno;
    await mecanico.save();
    return res.json(mecanico);
  } catch (error) {
    return res.status(500);
  }
};

// Eliminar un Mecanico
const deleteMecanico = async (req, res) => {
  const { rut } = req.params;
  try {
    const mecanico = await Mecanico.findOne({ where: { rut } });

    if (!mecanico) {
      return res.status(404).send("Mecanico not found");
    }
    await mecanico.destroy();
    res.status(204).json("delete Mecanico");
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getMecanico, getOneMecanico, createMecanico, putMecanico, deleteMecanico };