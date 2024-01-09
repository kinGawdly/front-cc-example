import React, { useState, useEffect } from 'react';
import { CervezasProps, Cerveza } from '../../interfaces/producto/cerveza';
// import ProductosService from '../../tu/ruta/al/servicio/ProductosService';

export const CervezasFiltro = (props: CervezasProps) => {
  const { cervezas } = props;
  const [rangoPrecios, setRangoPrecios] = useState<{ min: number; max: number } | null>(null);
  const [valorActual, setValorActual] = useState<number | string>(0);
  const [estrellasSeleccionadas, setEstrellasSeleccionadas] = useState<number | string>('');
  useEffect(() => {
    if (estrellasSeleccionadas !== '' && valorActual !== '') {
      console.log('estrellasSeleccionadas: ', estrellasSeleccionadas, 'valorActual: ', valorActual);
      // Realizar la llamada al servicio
        // ProductosService.obtenerCervezasFiltradas(estrellasSeleccionadas as number, valorActual as number).then((cervezasFiltradas: Cerveza[]) => {
      //   console.log('Cervezas filtradas:', cervezasFiltradas);
      // });
    }
  }, [estrellasSeleccionadas, valorActual]);

  useEffect(() => {
    if (cervezas.length > 0) {
      const precios = cervezas.map((cerveza) => cerveza.precio_venta);
      const minPrecio = Math.min(...precios);
      const maxPrecio = Math.max(...precios);
      setRangoPrecios({ min: minPrecio, max: maxPrecio });
      setValorActual(maxPrecio);
    } else {
      setRangoPrecios(null);
    }
  }, [cervezas]);

  const handleRangoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorActual(event.target.value);
  };

  const handleEstrellasChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEstrellasSeleccionadas(event.target.value);
  };

  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-heading6">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse6"
              aria-expanded="false"
              aria-controls="flush-collapse6"
            >
              Rango de precio
            </button>
          </h2>
          <div
            id="flush-collapse6"
            className="accordion-collapse collapse"
            aria-labelledby="flush-heading6"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <input
                type="range"
                className="form-range"
                min={rangoPrecios?.min}
                max={rangoPrecios?.max}
                value={valorActual as number}
                onChange={handleRangoChange}
              />
              {rangoPrecios !== null && (
                <p>
                  Rango de precio: ${rangoPrecios.min.toFixed(2)} - ${rangoPrecios.max.toFixed(2)}
                </p>
              )}
              <p>Valor actual: ${(typeof valorActual === 'string' ? parseFloat(valorActual) : valorActual).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-heading7">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse7"
              aria-expanded="false"
              aria-controls="flush-collapse7"
            >
              Cantidad de estrellas
            </button>
          </h2>
          <div
            id="flush-collapse7"
            className="accordion-collapse collapse"
            aria-labelledby="flush-heading7"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <label>Cantidad de estrellas:</label>
              <select value={estrellasSeleccionadas as string} onChange={handleEstrellasChange}>
                <option value="">Seleccione</option>
                <option value="1">1 Estrella</option>
                <option value="2">2 Estrellas</option>
                <option value="3">3 Estrellas</option>
                <option value="4">4 Estrellas</option>
                <option value="5">5 Estrellas</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CervezasFiltro;
