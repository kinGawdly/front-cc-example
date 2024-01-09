export const MerchandisingsFiltro = () => 
<div>
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Casa Cervecera
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <input type='checkbox' />Marca 1<br />
                    <input type='checkbox' />Marca 2<br />
                    <input type='checkbox' />Marca 3<br />
                    <input type='checkbox' />Marca 4<br />
                    <input type='checkbox' />Marca 5<br />
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Tipo de Cerveza
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <input type='checkbox' />IPA<br />
                    <input type='checkbox' />Pale Ale<br />
                    <input type='checkbox' />Stout<br />
                    <input type='checkbox' />Porter<br />
                    <input type='checkbox' />Larger<br />
                    <input type='checkbox' />Experimentales<br />
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Grado Alcohólico
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <input type='checkbox' />Sin alcohol<br />
                    <input type='checkbox' />Bajo (0% - 4%)<br />
                    <input type='checkbox' />Medio (4% - 8%)<br />
                    <input type='checkbox' />Medio (8% - 12%)
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                    Amargor
                </button>
            </h2>
            <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <input type='checkbox' />Bajo<br />
                    <input type='checkbox' />Medio<br />
                    <input type='checkbox' />Alto
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading6">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                    Rango de precio
                </button>
            </h2>
            <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <input type="range" className="form-range" />
                </div>
            </div>
        </div>

    </div>
</div>

export default MerchandisingsFiltro;
