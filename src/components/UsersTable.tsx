import React, { useState } from "react";
import axios from "axios";

const UsersTable = ({ users }: any) => {
  const [modalDesc, setModalDesc] = useState("");
  const [workDays, setWorkDays] = useState([]);
  const [modalItem, setModalItem]: any = useState("");

  const [newName, setNewName] = useState(modalItem.id);
  const [newEntrada, setNewEntrada] = useState(modalItem.entrada);
  const [newSaida, setNewSaida] = useState(modalItem.saida);
  const [newIdade, setNewIdade] = useState(modalItem.age);
  const [newSalario, setNewSalario] = useState(modalItem.salario);
  const [daysOnWeek, setDaysOnWeek]: any = useState([]);

  const handleAddUser = () => {
    axios
      .post("http://localhost:3001/users", {
        id: newName,
        email: "",
        password: "",
        salario: newSalario,
        age: newIdade,
        vendas: 0,
        entrada: newEntrada,
        saida: newSaida,
        workTime: daysOnWeek,
      })
      .then(() => {
        window.location.reload();
      });
  };

  const handleEditUser = async () => {
    await axios
      .patch("http://localhost:3001/users/" + modalItem.id, {
        id: newName,
        salario: newSalario,
        age: newIdade,
        entrada: newEntrada,
        saida: newSaida,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const handleRemoveUser = () => {
    axios.delete("http://localhost:3001/users/" + modalItem.id).then(() => {
      window.location.reload();
    });
  };

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
                          <div className="font-bold">{item.nome}</div>
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
                        onClick={() => {
                          setModalItem(users[i]);
                          setWorkDays(users[i].workTime);
                        }}
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
                    defaultValue={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Nome"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Horario de trabalho:</p>

                  <div className="flex gap-2">
                    {workDays.map((item: any) => (
                      <button disabled className="btn">
                        {item.slice(0, 3)}
                      </button>
                    ))}
                  </div>

                  <p className="text-sm m-4">Entrada:</p>
                  <input
                    type="number"
                    defaultValue={modalItem.entrada}
                    onChange={(e) => setNewEntrada(e.target.value)}
                    placeholder="Horario entrada"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Saída:</p>
                  <input
                    type="number"
                    defaultValue={modalItem.saida}
                    onChange={(e) => setNewSaida(e.target.value)}
                    placeholder="Horario saída"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Idade:</p>
                  <input
                    type="number"
                    defaultValue={modalItem.age}
                    onChange={(e) => setNewIdade(e.target.value)}
                    placeholder="Idade"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Salario:</p>
                  <input
                    type="number"
                    defaultValue={modalItem.salario}
                    onChange={(e) => setNewSalario(e.target.value)}
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
                        handleEditUser();
                      }}
                      className="btn btn-primary"
                    >
                      Salvar
                    </label>
                    <label
                      onClick={() => {
                        setModalItem("");
                        setNewName("");
                        setNewEntrada("");
                        setNewSaida("");
                        setNewIdade("");
                      }}
                      htmlFor="my-modal-2"
                      className="btn btn-warning"
                    >
                      Descartar
                    </label>
                  </div>

                  <label
                    onClick={() => {
                      setModalItem("");
                      handleRemoveUser();
                    }}
                    htmlFor="my-modal-2"
                    className="btn btn-error"
                  >
                    Excluir funcionario
                  </label>
                </label>
              </div>
            </>

            <>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />

              <div className="modal cursor-pointer flex flex-col items-center gap-4">
                <label
                  className="modal-box flex flex-col items-center gap-2"
                  htmlFor=""
                >
                  <h3 className="text-lg font-bold mb-2">
                    Adicionar funcionario
                  </h3>
                  <p className="text-sm m-4">Nome:</p>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Nome"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Horario de trabalho:</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        daysOnWeek.includes("segunda")
                          ? ""
                          : setDaysOnWeek((current: any) => [
                              ...current,
                              "segunda",
                            ]);
                      }}
                      className={`btn ${
                        daysOnWeek.includes("segunda") ? "btn-disabled" : ""
                      }`}
                    >
                      SEG
                    </button>
                    <button
                      onClick={() => {
                        daysOnWeek.includes("terca")
                          ? ""
                          : setDaysOnWeek((current: any) => [
                              ...current,
                              "terca",
                            ]);
                      }}
                      className={`btn ${
                        daysOnWeek.includes("terca") ? "btn-disabled" : ""
                      }`}
                    >
                      TER
                    </button>
                    <button
                      onClick={() => {
                        daysOnWeek.includes("quarta")
                          ? ""
                          : setDaysOnWeek((current: any) => [
                              ...current,
                              "quarta",
                            ]);
                      }}
                      className={`btn ${
                        daysOnWeek.includes("quarta") ? "btn-disabled" : ""
                      }`}
                    >
                      QUA
                    </button>
                    <button
                      onClick={() => {
                        daysOnWeek.includes("quinta")
                          ? ""
                          : setDaysOnWeek((current: any) => [
                              ...current,
                              "quinta",
                            ]);
                      }}
                      className={`btn ${
                        daysOnWeek.includes("quinta") ? "btn-disabled" : ""
                      }`}
                    >
                      QUI
                    </button>
                    <button
                      onClick={() => {
                        daysOnWeek.includes("sexta")
                          ? ""
                          : setDaysOnWeek((current: any) => [
                              ...current,
                              "sexta",
                            ]);
                      }}
                      className={`btn ${
                        daysOnWeek.includes("sexta") ? "btn-disabled" : ""
                      }`}
                    >
                      SEX
                    </button>
                    <button
                      onClick={() => {
                        daysOnWeek.includes("sabado")
                          ? ""
                          : setDaysOnWeek((current: any) => [
                              ...current,
                              "sabado",
                            ]);
                      }}
                      className={`btn ${
                        daysOnWeek.includes("sabado") ? "btn-disabled" : ""
                      }`}
                    >
                      SAB
                    </button>
                    <button
                      onClick={() => {
                        daysOnWeek.includes("domingo")
                          ? ""
                          : setDaysOnWeek((current: any) => [
                              ...current,
                              "domingo",
                            ]);
                      }}
                      className={`btn ${
                        daysOnWeek.includes("domingo") ? "btn-disabled" : ""
                      }`}
                    >
                      DOM
                    </button>
                  </div>

                  <p className="text-sm m-4">Entrada:</p>
                  <input
                    type="number"
                    value={newEntrada}
                    onChange={(e) => setNewEntrada(e.target.value)}
                    placeholder="Horario entrada"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Saída:</p>
                  <input
                    type="number"
                    value={newSaida}
                    onChange={(e) => setNewSaida(e.target.value)}
                    placeholder="Horario saída"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Idade:</p>
                  <input
                    type="number"
                    value={newIdade}
                    onChange={(e) => setNewIdade(e.target.value)}
                    placeholder="Idade"
                    className="input input-ghost w-full max-w-xs"
                  />
                  <p className="text-sm m-4">Salario:</p>
                  <input
                    type="number"
                    value={newSalario}
                    onChange={(e) => setNewSalario(e.target.value)}
                    placeholder="Salario"
                    className="input input-ghost w-full max-w-xs"
                  />

                  <div className="flex gap-4 m-4">
                    <label
                      onClick={() => {
                        setModalItem("");
                        handleAddUser();
                      }}
                      className="btn btn-primary"
                    >
                      Salvar
                    </label>
                    <label
                      onClick={() => {
                        setModalItem("");
                        setDaysOnWeek("");
                      }}
                      htmlFor="my-modal-3"
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
        <label htmlFor="my-modal-3" className="btn btn-ghost m-6">
          Adicionar funcionario
        </label>
      </div>
    </>
  );
};

export default UsersTable;
