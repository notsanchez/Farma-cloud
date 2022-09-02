import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const handleAddProduct = () => {
    axios
      .post("http://localhost:3001/farma", {
        id: Math.floor(Math.random() * 100),
        name: name,
        price: price,
        count: qty,
      })
      .then((res) => {
        window.location.replace("/");
      });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[600px] h-[600px] bg-black bg-opacity-25 rounded-lg flex flex-col items-center justify-center gap-12">
        <h1 className="text-2xl font-semibold">Adicionar Produto</h1>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="form-control">
            <label className="input-group">
              <span>Produto</span>
              <input
                type="text"
                placeholder="Nome do produto"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="input-group">
              <span>Qtd</span>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                placeholder="Quantidade"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="input-group">
              <span>R$</span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Preço"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <button onClick={handleAddProduct} className="btn">
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
