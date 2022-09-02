import React, { useState } from "react";

const UsersTable = ({ users }: any) => {
  const [modalDesc, setModalDesc] = useState("");
  const [workDays, setWorkDays] = useState([]);
  const [modalItem, setModalItem]: any = useState("");

  console.log(modalItem);

  return (
    <>
      <div className="overflow-x-auto w-full flex flex-col">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Farmaceutico</th>
              <th>Horario de trabalho</th>
              <th>Idade</th>
              <th>Salario</th>
              <th>Total de vendas</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item: any, i: any) => (
                <>
                  <tr>
                    <th></th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{item.id}</div>
                        </div>
                      </div>
                    </td>
                    <th>
                      <label
                        onClick={() => setWorkDays(users[i].workTime)}
                        htmlFor="my-modal-4"
                        className="btn modal-button"
                      >
                        clique para ver
                      </label>
                    </th>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {item.age}
                      </span>
                    </td>
                    <th>
                      <label
                        onClick={() => setModalDesc(users[i].salario)}
                        htmlFor="my-modal"
                        className="btn modal-button"
                      >
                        clique para ver
                      </label>
                    </th>
                    <th>
                      <h1>{item.vendas}</h1>
                    </th>
                    <th>
                      <label
                        onClick={() => setModalItem(users[i])}
                        htmlFor="my-modal-2"
                        className="btn btn-ghost btn-md"
                      >
                        Editar
                      </label>
                    </th>
                  </tr>
                </>
              ))}

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label
                className="modal-box flex flex-col items-center"
                htmlFor=""
              >
                <hr />
                <h3 className="text-lg font-bold mb-6">Horario de trabalho:</h3>
                {workDays.map((item: any, i: any) => (
                  <div key={i}>
                    <h1 className="font-semibold uppercase">{item} ✔️</h1>
                  </div>
                ))}
              </label>
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <label htmlFor="my-modal" className="modal cursor-pointer">
              <label
                className="modal-box flex flex-col items-center"
                htmlFor=""
              >
                <h3 className="text-lg font-bold">Salario total:</h3>
                <p className="py-4">R$ {modalDesc}</p>
              </label>
            </label>

            <>
              <input type="checkbox" id="my-modal-2" className="modal-toggle" />

              <div className="modal cursor-pointer flex flex-col items-center gap-4">
                <label
                  className="modal-box flex flex-col items-center gap-2"
                  htmlFor=""
                >
                  <h3 className="text-lg font-bold mb-2">Editar funcionario</h3>
                  <p className="text-sm m-4">Nome:</p>
                  <input
                    type="text"
                    defaultValue={modalItem.id}
                    placeholder="Nome"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Horario de trabalho:</p>

                  <div className="flex gap-2">
                    <button className="btn">Seg</button>
                    <button className="btn">Terç</button>
                    <button className="btn">Qua</button>
                    <button className="btn">Qui</button>
                    <button className="btn">Sex</button>
                    <button className="btn">Sab</button>
                    <button className="btn">Dom</button>
                  </div>

                  <input
                    type="number"
                    defaultValue={modalItem.price}
                    placeholder="Horario entrada"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <input
                    type="number"
                    defaultValue={modalItem.price}
                    placeholder="Horario saída"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Idade:</p>
                  <input
                    type="number"
                    defaultValue={modalItem.age}
                    placeholder="Idade"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Salario:</p>
                  <input
                    type="number"
                    defaultValue={modalItem.salario}
                    placeholder="Salario"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-lg m-4">
                    Total de vendas: {modalItem.vendas}
                  </p>

                  <div className="flex gap-4 m-4">
                    <label
                      onClick={() => {
                        setModalItem("");
                      }}
                      className="btn btn-primary"
                    >
                      Salvar
                    </label>
                    <label
                      onClick={() => {
                        setModalItem("");
                      }}
                      htmlFor="my-modal-2"
                      className="btn btn-warning"
                    >
                      Descartar
                    </label>
                  </div>
                </label>
              </div>
            </>
          </tbody>
        </table>
        <button className="btn btn-ghost m-6">Adicionar funcionario</button>
      </div>
    </>
  );
};

export default UsersTable;
