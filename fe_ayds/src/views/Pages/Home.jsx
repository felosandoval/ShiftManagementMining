import { useEffect, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, getTask } from "../../redux/actionRedux/task";
import AddTask from "../../components/AddTask";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

const Home = memo(() => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { task, isLoading, error } = useSelector((state) => state.edit);
  useEffect(() => {
    dispatch(getTask());
  }, []);

  const deleteTaskk = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <Layout>
        <div className="flex py-2 w-full justify-between">
          <h1>Tareas</h1>
          <button
            className="bg-black text-white hover:bg-overlay rounded p-4 ease-in duration-200"
            onClick={() => setOpenModal(true)}
          >
            Agregar tarea
          </button>
        </div>
        <div className="flex justify-around h-12 m-4 shadow rounded bg-gray">
          <div className="flex items-center w-1/4 px-4">ID</div>
          <div className="w-1/4 p-5">TIPO TAREA</div>
          <div className="w-1/2 p-5">OBSERVACIONES</div>
          <div className="w-1/2 p-5">DIA</div>
          <div className="w-1/2 p-5">HORA</div>
          <div className="w-1/2 p-5">FECHA MANTENCION FUTURA</div>
          <div className="flex w-1/4 items-center justify-center p-7">
            ACCIONES
          </div>
        </div>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {error ? (
                <p>{error.message}</p>
              ) : (
                task?.map((t) => (
                  <div className="m-4" key={t.id}>
                    <Card data={t} dlteTask={deleteTaskk} />
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </Layout>
      <Modal
        isValidate={openModal}
        title={"Agregar tarea"}
        funcion={setOpenModal}
      >
        <AddTask funcion={setOpenModal} />
      </Modal>
    </div>
  );
});

export default Home;
