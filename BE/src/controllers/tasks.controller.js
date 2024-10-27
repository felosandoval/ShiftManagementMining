const Tareas = require("../models/Tasks.js");

//obtener todas las tareas
const getTask = async (req, res) => {
  const AllTask = await Tareas.findAll({});
  res.send(AllTask).status(200);
};

//obtener una tarea
const getOneTask = async (req, res) => {
  const id = req.params;
  const task = await Tareas.findAll({ where: id });
  res.status(200).json(task);
};

//crear una tarea
const createTask = async (req, res) => {
  const { tipoTarea, estado, Urgencia, observaciones, dia, hora, fechaMantencionFutura, rutJefe, rutMecanico, patenteMaquinaria } = req.body;

  if (!tipoTarea || !estado || !Urgencia || !observaciones || !dia || !hora || !fechaMantencionFutura || !rutJefe || !rutMecanico || !patenteMaquinaria) {
    return res.status(400).json({ error: "content missing" });
  }
  const taskCreate = await Tareas.create({
    tipoTarea,
    estado,
    Urgencia,
    observaciones,
    dia,
    hora,
    fechaMantencionFutura,
    rutJefe,
    rutMecanico,
    patenteMaquinaria
  });

  res.status(200).json(taskCreate);
};

// Actualizar una tarea
const putTask = async (req, res) => {
  const { id } = req.params;
  const { tipoTarea, estado, Urgencia, observaciones, dia, hora, fechaMantencionFutura, rutJefe, rutMecanico, patenteMaquinaria } = req.body;
  console.log(req.body);
  try {
    const task = await Tareas.findOne({ where: { id } });
    if (!task) {
      return res.status(404).send("Task not found");
    }

    task.tipoTarea = tipoTarea;
    task.estado = estado;
    task.Urgencia = Urgencia;
    task.observaciones = observaciones;
    task.dia = dia;
    task.hora = hora;
    task.fechaMantencionFutura = fechaMantencionFutura;
    task.rutJefe = rutJefe;
    task.rutMecanico = rutMecanico;
    task.patenteMaquinaria = patenteMaquinaria;
    await task.save();
    return res.json(task);
  } catch (error) {
    return res.status(500);
  }
};

//eliminar una tarea
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Tareas.findOne({ where: { id } });

    if (!task) {
      return res.status(404).send("Task not found");
    }
    await task.destroy();
    res.status(204).json("delete Task");
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getTask,getOneTask, createTask, putTask, deleteTask };