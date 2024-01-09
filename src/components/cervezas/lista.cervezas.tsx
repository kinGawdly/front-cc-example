// src\components\cervezas\lista.cervezas.tsx

import { useEffect, useState } from "react";
import ProductosService from "../../services/producto.services";
import { Link } from "react-router-dom";
import { Cerveza } from "../../interfaces/producto/cerveza";
import CervezasFiltro from "./filtro.cervezas";
import ProductoCard from "../producto/producto.compoment";

export function CervezasLista() {
  const [cervezas, setCervezas] = useState<Cerveza[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtenerCervezas = async () => {
      try {
        const data = await ProductosService.obtenerCervezas();
        setCervezas(data);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
        setError('Error fetching cervezas');
        setLoading(false);
      }
    };

    obtenerCervezas();
  }, []);

  const renderizarCervezas = () => {
    const filas = [];
    for (let i = 0; i < cervezas.length; i += 3) {
      const grupoCervezas = cervezas.slice(i, i + 3);
      filas.push(
        <div className="row" key={i}>
          {grupoCervezas.map((cerveza, idx) => (
            <div className="col-3 mb-5" key={idx}>
              <ProductoCard producto={cerveza} />
            </div>
          ))}
        </div>
      );
    }
    return filas;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Link to="/" className="text-decoration-underline">
            Home
          </Link>{" "}
          / <span> Cervezas</span>
        </div>
        <div className="col-6"></div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold">Cervezas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <CervezasFiltro cervezas={cervezas} />
        </div>
        <div className="col-9">
          {renderizarCervezas()}
        </div>
      </div>
    </div>
  );
}

export default CervezasLista;
