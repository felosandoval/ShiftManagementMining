import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedTask } from "../../redux/actionRedux/task";

const FormTask = ({ id, tipotarea, estado, observaciones, dia, hora, onClose }) => {
  const dispatch = useDispatch();
  const [taskType, setTaskType] = useState(tipotarea);
  const [taskStatus, setTaskStatus] = useState(estado);
  const [taskObservations, setTaskObservations] = useState(observaciones);
  const [taskDate, setTaskDate] = useState(dia);
  const [taskTime, setTaskTime] = useState(hora);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      tipotarea: taskType,
      estado: taskStatus,
      observaciones: taskObservations,
      dia: taskDate,
      hora: taskTime,
    };
    console.log(updatedData);
    dispatch(updatedTask(id, updatedData));
    onClose();
  };

  const handleTaskTypeChange = (event) => {
    setTaskType(event.target.value);
  };

  const handleTaskStatusChange = (event) => {
    setTaskStatus(event.target.value);
  };

  const handleTaskObservationsChange = (event) => {
    setTaskObservations(event.target.value);
  };

  const handleTaskDateChange = (event) => {
    setTaskDate(event.target.value);
  };

  const handleTaskTimeChange = (event) => {
    setTaskTime(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskTypeInput">Tipo de Tarea</label>
          <input
            id="taskTypeInput"
            type="text"
            value={taskType}
            onChange={handleTaskTypeChange}
          />
        </div>
        <div>
          <label htmlFor="taskStatusInput">Estado</label>
          <input
            id="taskStatusInput"
            type="text"
            value={taskStatus}
            onChange={handleTaskStatusChange}
          />
        </div>
        <div>
          <label htmlFor="taskObservationsTextarea">Observaciones</label>
          <textarea
            id="taskObservationsTextarea"
            value={taskObservations}
            onChange={handleTaskObservationsChange}
          />
        </div>
        <div>
          <label htmlFor="taskDateInput">Fecha</label>
          <input
            id="taskDateInput"
            type="date"
            value={taskDate}
            onChange={handleTaskDateChange}
          />
        </div>
        <div>
          <label htmlFor="taskTimeInput">Hora</label>
          <input
            id="taskTimeInput"
            type="time"
            value={taskTime}
            onChange={handleTaskTimeChange}
          />
        </div>
        <div>
          <button type="submit">Actualizar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTask;