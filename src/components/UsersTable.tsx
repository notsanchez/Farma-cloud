import React from "react";

const UsersTable = () => {
  return (
    <>
      <div className="overflow-x-auto w-full">
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
            <>
              <tr className={`${7 <= 0 ? "opacity-20" : "opacity-100"}`}>
                <th></th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">Joao pereira silva Gomes</div>
                    </div>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-sm font-bold">
                    Clique para ver
                  </button>
                </th>
                <td>
                  <span className="badge badge-ghost badge-sm">90</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-sm font-bold">
                    Clique para ver
                  </button>
                </th>
                <th>
                  <h1>1.500</h1>
                </th>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
