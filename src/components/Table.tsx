import React, { useState } from "react";

const Table = ({ data, setProducts, products }: any) => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Disponibilidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, i) => (
                <>
                  <tr
                    key={i}
                    className={`${
                      item.count <= 0 ? "opacity-20" : "opacity-100"
                    }`}
                  >
                    <th></th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        R$ {item.price}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {item.count}
                      </span>
                    </td>
                    {item.count > 0 ? (
                      <td className="text-green-500">Disponivel</td>
                    ) : (
                      <td className="text-red-500">Indisponivel</td>
                    )}
                    <th>
                      {item.count > 0 && (
                        <button
                          onClick={() => {
                            setProducts([...products, data[i]]);
                          }}
                          className="btn btn-ghost btn-xs"
                        >
                          Adicionar em pedido
                        </button>
                      )}
                    </th>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
