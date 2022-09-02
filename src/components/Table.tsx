import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = ({ data, setProducts, products }: any) => {
  const [activeSelect, setActiveSelect] = useState(0);
  const [filter, setFilter] = useState(data);
  const [modalItem, setModalItem]: any = useState("");

  const [modalName, setModalName] = useState(modalItem.name);
  const [modalPrice, setModalPrice] = useState(modalItem.price);
  const [modalQty, setModalQty] = useState(modalItem.count);

  const handleSaveChanges = async () => {
    await axios
      .patch("http://localhost:3001/farma/" + modalItem.id, {
        name: modalName,
        price: modalPrice,
        count: modalQty,
      })
      .then(() => {
        window.location.reload();
      });
  };

  const handleDeleteItem = async () => {
    await axios
      .delete("http://localhost:3001/farma/" + modalItem.id)
      .then(() => {
        window.location.reload();
      });
  };

  console.log(modalItem);

  const dateNow = new Date().getTime() / 1000;

  useEffect(() => {
    if (activeSelect == 1) {
      setFilter(data);
    }
    if (activeSelect == 2) {
      function makeFilter(value: any) {
        if (value.count > 0) return value;
      }
      const podutosDisponiveis = data.filter(makeFilter);
      setFilter(podutosDisponiveis);
    }

    if (activeSelect == 3) {
      function makeFilter(value: any) {
        if (value.count <= 0) return value;
      }
      const podutosDisponiveis = data.filter(makeFilter);
      setFilter(podutosDisponiveis);
    }

    if (activeSelect == 4) {
      function makeFilter(value: any) {
        if (value.vencimento < dateNow) return value;
      }
      const podutosDisponiveis = data.filter(makeFilter);
      setFilter(podutosDisponiveis);
    }
  }, [activeSelect]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-screen">
      <select
        onClick={(e) => setActiveSelect(e.target.value)}
        className="select w-full max-w-md text-center"
      >
        <option disabled selected>
          Selecione uma opção
        </option>
        <option value={1}>Todos os produtos</option>
        <option value={2}>Disponiveis</option>
        <option value={3}>Indisponiveis</option>
        <option value={4}>Fora da validade</option>
      </select>
      <div className="flex flex-col items-center justify-center">
        <div className="overflow-x-auto w-full">
          <table className="table w-[1300px]">
            {filter.length > 0 && (
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
            )}

            <tbody>
              {filter &&
                filter.map((item: any, i: string) => (
                  <>
                    <tr key={i}>
                      <th></th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-ghost badge-lg">
                          R$ {item.price}
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-ghost badge-lg">
                          {item.count}
                        </span>
                      </td>

                      <div className="flex flex-col">
                        {item.count > 0 ? (
                          <td className="text-green-500">Disponivel</td>
                        ) : (
                          <td className="text-red-500">Indisponivel</td>
                        )}

                        {item.vencimento < dateNow ? (
                          <td className="text-red-500 text-sm text-opacity-50">
                            Fora da validade
                          </td>
                        ) : (
                          <td className="text-green-500 text-sm text-opacity-50">
                            Na validade
                          </td>
                        )}
                      </div>

                      <th>
                        {item.count > 0 && item.vencimento >= dateNow ? (
                          <button
                            onClick={() => {
                              setProducts([...products, data[i]]);
                            }}
                            className="btn btn-ghost btn-xs"
                          >
                            Adicionar em pedido
                          </button>
                        ) : (
                          <button
                            disabled
                            onClick={() => {
                              setProducts([...products, data[i]]);
                            }}
                            className="btn btn-ghost btn-xs"
                          >
                            Adicionar em pedido
                          </button>
                        )}
                        <label
                          onClick={() => {
                            setModalItem(filter[i]);
                            setModalName(filter[i].name);
                            setModalPrice(filter[i].price);
                            setModalQty(filter[i].count);
                          }}
                          htmlFor="my-modal"
                          className="btn btn-ghost btn-xs"
                        >
                          Editar
                        </label>
                      </th>
                    </tr>
                  </>
                ))}

              {modalItem && (
                <>
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />

                  <div className="modal cursor-pointer flex flex-col items-center gap-4">
                    <label
                      className="modal-box flex flex-col items-center gap-2"
                      htmlFor=""
                    >
                      <h3 className="text-lg font-bold mb-2">Editar produto</h3>
                      <p className="text-sm m-4">Nome:</p>
                      <input
                        type="text"
                        onChange={(e) => setModalName(e.target.value)}
                        defaultValue={modalItem.name}
                        placeholder="Nome"
                        className="input input-ghost w-full max-w-xs"
                      />
                      <p className="text-sm m-4">Preço:</p>
                      <input
                        type="number"
                        defaultValue={modalItem.price}
                        onChange={(e) => setModalPrice(e.target.value)}
                        placeholder="Preço"
                        className="input input-ghost w-full max-w-xs"
                      />
                      <p className="text-sm m-4">Quantidade:</p>
                      <input
                        type="number"
                        defaultValue={modalItem.count}
                        onChange={(e) => setModalQty(e.target.value)}
                        placeholder="Quantidade"
                        className="input input-ghost w-full max-w-xs"
                      />

                      <div className="flex gap-4 m-4">
                        <label
                          onClick={() => {
                            setModalItem("");
                            handleSaveChanges();
                          }}
                          className="btn btn-primary"
                        >
                          Salvar
                        </label>
                        <label
                          onClick={() => {
                            setModalItem("");
                          }}
                          htmlFor="my-modal"
                          className="btn btn-warning"
                        >
                          Descartar
                        </label>
                      </div>
                      {modalItem.vencimento < dateNow && (
                        <>
                          <h1 className="font-bold">
                            PRODUTO FORA DA VALIDADE !
                          </h1>
                          <button
                            onClick={() => {
                              setModalItem("");
                              handleDeleteItem();
                            }}
                            className="btn btn-error"
                          >
                            Excluir
                          </button>
                        </>
                      )}
                    </label>
                  </div>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
