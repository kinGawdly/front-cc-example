// src\components\login\login.component.tsx
import React, { useState, useEffect } from 'react';

import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigate } from 'react-router-dom';

import { login } from '../../actions/authActions';
import { EstadoGlobal } from '../../estados/global.estado'

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.component.css';
import logotipo from '/login/login.png';
import { jwtDecode } from 'jwt-decode';
import { AuthEstado } from '../../estados/auth.estado';

export function LoginComponent() {

  const dispatch: ThunkDispatch<any, null, AnyAction> = useDispatch();

  const navigate = useNavigate();
  const authState = useSelector((state: EstadoGlobal) => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (authState.isAuthenticated) {
      const decodedToken = jwtDecode<AuthEstado>(authState.token || '');
      if (decodedToken.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  }, [authState, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleLogin = () => {
    const userData = {
      username: formData.username,
      password: formData.password,
    };
    dispatch(login(userData));
  };

  return (
    <div className="container">

      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-center mb-4">
          <img src={logotipo} alt="Logo" className="img-fluid logo" />
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-4 text-center">
          <div className="card">
            <div className="card-body">
              <form>
                <label htmlFor="username" className="form-label d-flex align-items-start">
                  Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="nombre@gmail.com"
                  onChange={handleInputChange}
                />
                <div className="mb-3">
                  <label htmlFor="password" className="form-label d-flex align-items-start">
                    Contraseña
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="contraseña"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 olvidatext mt-3">
                    Olvidé la contraseña
                  </div>

                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-full-width"
                      onClick={handleLogin}
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
