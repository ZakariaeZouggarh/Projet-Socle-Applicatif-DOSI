
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    ville: "",
    age: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/users/${id}`);
    setUser(result.data);
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Details d'Utilisateur N° {user.id} </h2>


            <div className="card">
              <div className="card-header">
                <table className="table table-striped">
                  <tr>
                    <td>Nom : </td>
                    <td>{user.nom}</td>
                  </tr>
                  <tr>
                    <td>Prenom : </td>
                    <td>{user.prenom}</td>
                  </tr>
                  <tr>
                    <td>Email : </td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Ville : </td>
                    <td>{user.ville}</td>
                  </tr>
                  <tr>
                    <td>Age : </td>
                    <td>{user.age}</td>
                  </tr>
                </table>
              </div>
            </div>
            <Link className="btn btn-primary my-2" to={"/"}>
              Retour
            </Link>
          </div>
        </div>
      </div>
  );
}