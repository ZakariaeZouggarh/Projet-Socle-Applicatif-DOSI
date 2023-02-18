import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa';

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    ville: "",
    age: "",
  });

  const { nom, prenom, email, ville, age } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/users/updatUser/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/users/${id}`);
    setUser(result.data);
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Modifier Utilisateur N° {id}</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Nom" className="form-label">
                  Nom
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Saisir le nom"
                    name="nom"
                    value={nom}
                    onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Prenom" className="form-label">
                  Prenom
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Saisir le prenom"
                    name="prenom"
                    value={prenom}
                    onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Saisir l'email"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Ville" className="form-label">
                  Ville
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Saisir la ville"
                    name="ville"
                    value={ville}
                    onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Age" className="form-label">
                  Age
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Saisir l'age"
                    name="age"
                    value={age}
                    onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary btn1">
                Modifier <FaCheckCircle/>
              </button>
              <Link className="btn btn-outline-danger mx-2 btn2" to="/">
                Annuler <FaWindowClose/>
              </Link>
            </form>
          </div>
        </div>
      </div>
  );
}