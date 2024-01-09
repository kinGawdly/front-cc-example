import { Link } from 'react-router-dom';

export function CasasConocenos() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-6">
                    <Link to="/" className="text-decoration-underline">Home </Link>/
                    <Link to="/conocenos" className="text-decoration-underline">Conócenos </Link>/
                    <span>Casas Cerveceras</span>

                </div>
                <div className="col-6"></div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <h3>Casas Cerveceras</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia aliquid esse rerum quidem voluptas illo repellendus rem cumque enim inventore tempora excepturi possimus, tempore doloremque natus laborum? Repellendus, aspernatur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CasasConocenos;
