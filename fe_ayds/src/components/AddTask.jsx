import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTask } from "../redux/actionRedux/task";

const AddTask = ({ onClose }) => {
  const [tipotarea, setTipoTarea] = useState("");
  const [estadourgencia, setEstadoUrgencia] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      tipotarea,
      estadourgencia,
      observaciones,
      dia,
      hora,
    };
    console.log(newTask);
    dispatch(postTask(newTask));
    onClose();
  };

  const handleTipoTareaChange = (event) => {
    setTipoTarea(event.target.value);
  };

  const handleEstadoUrgenciaChange = (event) => {
    setEstadoUrgencia(event.target.value);
  };

  const handleObservacionesChange = (event) => {
    setObservaciones(event.target.value);
  };

  const handleDiaChange = (event) => {
    setDia(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <label htmlFor="tipoTareaInput">Tipo de tarea</label>
        <input
          id="tipoTareaInput"
          className="w-full border"
          value={tipotarea}
          onChange={handleTipoTareaChange}
        />
        <label htmlFor="estadoUrgenciaInput">Estado de urgencia</label>
        <input
          id="estadoUrgenciaInput"
          className="w-full border"
          value={estadourgencia}
          onChange={handleEstadoUrgenciaChange}
        />
        <label htmlFor="observacionesTextarea">Observaciones</label>
        <textarea
          id="observacionesTextarea"
          className="w-full border"
          value={observaciones}
          onChange={handleObservacionesChange}
        />
        <label htmlFor="diaInput">DÃ­a</label>
        <input
          id="diaInput"
          type="date"
          className="w-full border"
          value={dia}
          onChange={handleDiaChange}
        />
        <label htmlFor="horaInput">Hora</label>
        <input
          id="horaInput"
          type="time"
          className="w-full border"
          value={hora}
          onChange={handleHoraChange}
        />
        <div className="flex justify-end pt-2">
          <button className="bg-black text-white rounded p-2" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;