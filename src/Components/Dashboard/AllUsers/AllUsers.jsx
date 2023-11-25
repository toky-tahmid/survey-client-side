import  { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []); 
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users?role=admin&id=${user._id}`,
     {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          fetchUsers(); 
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making user admin:", error);
      });
  };
  const handleMakeSurveyor = (user) => {
    fetch(`http://localhost:5000/users?role=surveyor&id=${user._id}`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          fetchUsers(); 
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Surveyor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making user admin:", error);
      });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm bg-orange-500"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "surveyor" ? (
                    "Surveyor"
                  ) : (
                    <button
                      onClick={() => handleMakeSurveyor(user)}
                      className="btn btn-sm bg-orange-500"
                    >
                      Make Surveyor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
