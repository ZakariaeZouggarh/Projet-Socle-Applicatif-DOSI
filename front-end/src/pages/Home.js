import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {FaRegTrashAlt, FaEdit, FaEye, FaPlusCircle} from 'react-icons/fa';

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8081/users/all");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8081/users/delete/${id}`);
    loadUsers();
  };

  return (
      <div className="container">
        <div className="py-4">
          <table className="table table-striped">
            <thead className="tableHead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                        className="btn btn-primary mx-2"
                        to={`/viewuser/${user.id}`}
                    >
                      <FaEye/>
                    </Link>
                    <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/edituser/${user.id}`}
                    >
                      <FaEdit/>
                    </Link>
                    <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteUser(user.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
          <Link className="btn btn-outline-light addutil" to="/adduser">
            Ajout Utilisateur <FaPlusCircle/>
          </Link>
        </div>
      </div>
  );
}