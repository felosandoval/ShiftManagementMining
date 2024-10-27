import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import FormTask from "../views/Forms/FormTask";

const Card = ({ data, dlteTask }) => {
  const { id, taskType, observation } = data;
  const [valor, setValor] = useState(false);
  return (
    <div>
      <div className="flex justify-around h-16 shadow rounded bg-magnolia">
        <div className="flex items-center w-1/4 px-4">{id}</div>
        <div className="w-1/4 p-5">{taskType}</div>
        <div className="w-1/2 p-5">{observation}</div>
        <div className="flex w-1/4 items-center justify-end p-7">
          <div className="px-3">
            <button
              className="pointer hover:bg-black hover:text-white w-24 h-8 rounded"
              onClick={() => setValor(true)}
            >
              editar
            </button>
          </div>
          <div className="px-3">
            <button
              className="pointer bg-red hover:bg-red-300 text-white w-24 h-8 rounded"
              onClick={() => dlteTask(id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      <Modal isValidate={valor} title={taskType} id={id} funcion={setValor}>
        <FormTask
          id={id}
          observation={observation}
          task={taskType}
          funcion={setValor}
        />
      </Modal>
    </div>
  );
};

export default Card;
