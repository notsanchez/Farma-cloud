import React from "react";
import axios from "axios";

const CheckoutComponet = ({ products, setProducts }: any) => {
  const handleMakePurchase = async () => {
    await axios
      .post("http://localhost:3001/pedidos", {
        id: 1,
        sellerId: "",
        dados: products,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {products.length >= 1 ? (
        <div className="flex flex-col items-center justify-center">
          <table className="table w-[1400px]">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th></th>
              </tr>
            </thead>
            {products.map((item: any, i: any) => (
              <>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <input
                        type="number"
                        defaultValue={1}
                        className="input input-bordered  "
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setProducts(products.slice(i, products.length - 1));
                        }}
                        className="btn btn-outline btn-error font-bold text-sm"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>
                  <button
                    onClick={handleMakePurchase}
                    className="btn btn-outline "
                  >
                    Gerar pedido
                  </button>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className="w-screen h-40 flex items-center justify-center">
          <h1 className="font-bold text-2xl">Seu carrinho está vazio</h1>
        </div>
      )}
    </>
  );
};

export default CheckoutComponet;
