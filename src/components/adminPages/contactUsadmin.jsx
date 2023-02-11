import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import "./adminarticles.css";
import AdminNav from "./adminNav";

function AdminContactUs() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("https://mobilixbackend.onrender.com/contactus");
    const latest1 = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setUsers(latest1);
  };
  const deleteUser = async (id) => {
    await axios.delete(`https://mobilixbackend.onrender.com/contactus/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <AdminNav />
      <main className="main-cntct">
        <h1>Contacts Info</h1>
        <table class="content-table">
          <thead>
            <tr>
              <th>index</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.mail}</td>
                <td>{user.Message}</td>

                <td>
                  <button
                    className="tbl-btn"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminContactUs;
