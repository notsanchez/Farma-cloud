import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data, setProducts, products }: any) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li>
                <Link to="/">Todos os produtos</Link>
              </li>
              <li>
                <Link to="/users">Ver Famarceuticos</Link>
              </li>
              <li>
                <Link to="/create">Adicionar produto</Link>
              </li>
              <li>
                <a>Sair</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn uppercase text-xl m-6">
            💊 Farma Cloud
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {products.length > 0 && (
                <span className="badge badge-md indicator-item">
                  {products.length}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
